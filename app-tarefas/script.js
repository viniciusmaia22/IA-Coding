// Captura os elementos principais da tela
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCounter = document.getElementById("taskCounter");

// Array que guarda as tarefas do app
let tasks = loadTasks();

// Escuta o envio do formulário
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa antes de adicionar.");
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

function editTask(taskId) {
  const taskToEdit = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (!taskToEdit) {
    return;
  }

  const newTaskText = prompt("Edite a tarefa:", taskToEdit.text);

  if (newTaskText === null) {
    return;
  }

  const trimmedText = newTaskText.trim();

  if (trimmedText === "") {
    alert("O texto da tarefa não pode ficar vazio.");
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

//Responsável pela criação do item da lista (li)
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

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = task.text;

  if (task.completed) {
    taskSpan.classList.add("completed");
  }

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = "Editar";

  editButton.addEventListener("click", function () {
    editTask(task.id);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Excluir";

  deleteButton.addEventListener("click", function () {
    deleteTask(task.id);
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

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
    console.error("Erro ao carregar tarefas:", error);git 
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