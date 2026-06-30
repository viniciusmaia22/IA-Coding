// Captura os elementos principais da tela
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCounter = document.getElementById("taskCounter");

// Array que guarda as tarefas do app
let tasks = loadTasks();

// Variável para controle se o texto da tarefa está sendo editado
let editingTaskId = null;

// Mensagens do sistema e labels dos botões
const MESSAGES = {
  emptyTask: "Digite uma tarefa antes de adicionar.",
  emptyEdit: "O texto da tarefa não pode ficar vazio.",
  addButton: "Adicionar",
  editButton: "Editar",
  saveButton: "Salvar",
  cancelButton: "Cancelar",
  deleteButton: "Excluir"
};

// Escuta o envio do formulário
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert(MESSAGES.emptyTask);
    return;
  }

  addTask(taskText);

  taskInput.value = "";
  taskInput.focus();
});

// Adiciona uma nova tarefa no array
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

// Remove uma tarefa do array
function deleteTask(taskId) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  saveTasks();
  renderTasks();
}

function editTask(taskId, newText) {
  const trimmedText = newText.trim();

  if (trimmedText === "") {
    alert(MESSAGES.emptyEdit);
    return;
  }

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

function updateTaskCounter() {
  const pendingTasks = tasks.filter(function (task) {
    return task.completed === false;
  }).length;

  const completedTasks = tasks.filter(function (task) {
    return task.completed === true;
  }).length;

  taskCounter.textContent = `Total de tarefas: ${tasks.length} | Pendentes: ${pendingTasks} | Concluídas: ${completedTasks}`;
}

// Renderiza as tarefas na tela
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

// Responsável pela criação do item da lista (li)
function createTaskElement(task) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.classList.add("task-checkbox");

  checkbox.addEventListener("change", function () {
    toggleTaskCompleted(task.id);
  });

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const isEditing = editingTaskId === task.id;

  if (isEditing) {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task.text;
    editInput.classList.add("task-edit-input");

    const saveButton = document.createElement("button");
    saveButton.classList.add("edit-button");
    saveButton.textContent = MESSAGES.saveButton;

    saveButton.addEventListener("click", function () {
      editTask(task.id, editInput.value);
    });

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("delete-button");
    cancelButton.textContent = MESSAGES.cancelButton;

    cancelButton.addEventListener("click", function () {
      editingTaskId = null;
      renderTasks();
    });

    taskActions.appendChild(saveButton);
    taskActions.appendChild(cancelButton);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(editInput);
    taskItem.appendChild(taskActions);

    setTimeout(function () {
      editInput.focus();
    }, 0);

    return taskItem;
  }

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = task.text;

  if (task.completed) {
    taskSpan.classList.add("completed");
  }

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = MESSAGES.editButton;

  editButton.addEventListener("click", function () {
    editingTaskId = task.id;
    renderTasks();
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = MESSAGES.deleteButton;

  deleteButton.addEventListener("click", function () {
    deleteTask(task.id);
  });

  taskActions.appendChild(editButton);
  taskActions.appendChild(deleteButton);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(taskActions);

  return taskItem;
}

// Alterna a tarefa entre concluída e pendente
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

function isValidTask(task) {
  return (
    typeof task.id === "number" &&
    typeof task.text === "string" &&
    typeof task.completed === "boolean"
  );
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Renderização inicial da tela
renderTasks();