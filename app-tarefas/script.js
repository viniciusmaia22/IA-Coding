// ==============================
// Elementos do DOM
// ==============================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCounter = document.getElementById("taskCounter");

// ==============================
// Estado da aplicação
// ==============================

let tasks = loadTasks();
let editingTaskId = null;

// ==============================
// Mensagens do sistema
// ==============================

const MESSAGES = {
  emptyTask: "Digite uma tarefa antes de adicionar.",
  emptyEdit: "O texto da tarefa não pode ficar vazio.",
  addButton: "Adicionar",
  editButton: "Editar",
  saveButton: "Salvar",
  cancelButton: "Cancelar",
  deleteButton: "Excluir"
};

// ==============================
// Eventos principais
// ==============================

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (isEmptyText(taskInput.value)) {
    alert(MESSAGES.emptyTask);
    return;
  }

  editingTaskId = null;

  addTask(taskInput.value.trim());

  taskInput.value = "";
  taskInput.focus();
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    taskInput.value = "";
  }
});

// ==============================
// Funções de tarefas
// ==============================

function addTask(taskText) {
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(newTask);

  saveTasks();
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  saveTasks();
  renderTasks();
}

function editTask(taskId, newText) {
  if (isEmptyText(newText)) {
    alert(MESSAGES.emptyEdit);
    return;
  }

  const trimmedText = newText.trim();

  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      return {
        id: task.id,
        text: trimmedText,
        completed: task.completed
      };
    }

    return task;
  });

  editingTaskId = null;

  saveTasks();
  renderTasks();
}

function toggleTaskCompleted(taskId) {
  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      return {
        id: task.id,
        text: task.text,
        completed: !task.completed
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}

// ==============================
// Renderização
// ==============================

function renderTasks() {
  taskList.innerHTML = "";

  updateTaskCounter();

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
    taskCounter.style.display = "none";
    return;
  }

  emptyMessage.style.display = "none";
  taskCounter.style.display = "block";

  tasks.forEach(function (task) {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  });
}

function updateTaskCounter() {
  const pendingTasks = tasks.filter(function (task) {
    return task.completed === false;
  }).length;

  const completedTasks = tasks.filter(function (task) {
    return task.completed === true;
  }).length;

  taskCounter.textContent = `Total de tarefas: ${tasks.length} | Pendentes: ${pendingTasks} | Concluídas: ${completedTasks}`;
}

function createTaskElement(task) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const checkbox = createTaskCheckbox(task);
  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const isEditing = editingTaskId === task.id;

  if (isEditing) {
    const editInput = createEditInput(task);

    const saveButton = createButton(
      MESSAGES.saveButton,
      "edit-button",
      "Salvar edição da tarefa: " + task.text,
      function () {
        editTask(task.id, editInput.value);
      }
    );

    const cancelButton = createButton(
      MESSAGES.cancelButton,
      "delete-button",
      "Cancelar edição da tarefa: " + task.text,
      function () {
        editingTaskId = null;
        renderTasks();
      }
    );

    taskActions.appendChild(saveButton);
    taskActions.appendChild(cancelButton);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(editInput);
    taskItem.appendChild(taskActions);

    editInput.focus();

    return taskItem;
  }

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = task.text;

  if (task.completed) {
    taskSpan.classList.add("completed");
  }

  const editButton = createButton(
    MESSAGES.editButton,
    "edit-button",
    "Editar tarefa: " + task.text,
    function () {
      editingTaskId = task.id;
      renderTasks();
    }
  );

  const deleteButton = createButton(
    MESSAGES.deleteButton,
    "delete-button",
    "Excluir tarefa: " + task.text,
    function () {
      deleteTask(task.id);
    }
  );

  taskActions.appendChild(editButton);
  taskActions.appendChild(deleteButton);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(taskActions);

  return taskItem;
}

// ==============================
// Helpers de criação de elementos
// ==============================

function createTaskCheckbox(task) {
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.classList.add("task-checkbox");
  checkbox.setAttribute("aria-label", "Marcar ou desmarcar tarefa: " + task.text);

  checkbox.addEventListener("change", function () {
    toggleTaskCompleted(task.id);
  });

  return checkbox;
}

function createEditInput(task) {
  const editInput = document.createElement("input");

  editInput.type = "text";
  editInput.value = task.text;
  editInput.classList.add("task-edit-input");
  editInput.setAttribute("aria-label", "Editar texto da tarefa: " + task.text);

  editInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      editTask(task.id, editInput.value);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      editingTaskId = null;
      renderTasks();
    }
  });

  return editInput;
}

function createButton(text, className, ariaLabel, onClick) {
  const button = document.createElement("button");

  button.textContent = text;
  button.classList.add(className);
  button.setAttribute("aria-label", ariaLabel);
  button.addEventListener("click", onClick);

  return button;
}

// ==============================
// Helpers de validação
// ==============================

function isEmptyText(text) {
  return text.trim() === "";
}

function isValidTask(task) {
  return (
    typeof task.id === "number" &&
    typeof task.text === "string" &&
    typeof task.completed === "boolean"
  );
}

// ==============================
// Persistência local
// ==============================

function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");

  if (!storedTasks) {
    return [];
  }

  try {
    const parsedTasks = JSON.parse(storedTasks);

    if (!Array.isArray(parsedTasks)) {
      return [];
    }

    const allTasksAreValid = parsedTasks.every(function (task) {
      return isValidTask(task);
    });

    if (!allTasksAreValid) {
      return [];
    }

    return parsedTasks;
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ==============================
// Inicialização
// ==============================

renderTasks();