# Aula 4 — Explicação do código

## Resumo do projeto

O projeto é um App de Tarefas simples. Ele permite adicionar tarefas em uma lista, excluir tarefas individualmente e mostrar uma mensagem quando a lista está vazia.

Neste momento, as tarefas existem apenas na tela. O projeto ainda não usa array para armazenar tarefas e também não usa localStorage. Por isso, ao recarregar a página, as tarefas adicionadas desaparecem.

## index.html

O arquivo index.html define a estrutura inicial da página.

Ele contém:
- o título do app;
- uma descrição;
- um formulário para adicionar tarefas;
- um campo de texto para digitar a tarefa;
- um botão para adicionar;
- uma lista vazia onde o JavaScript irá inserir as tarefas;
- uma mensagem exibida quando não houver tarefas.

O botão "Excluir" não está no HTML inicial. Ele é criado dinamicamente pelo JavaScript sempre que uma nova tarefa é adicionada.

## styles.css

O arquivo styles.css controla a aparência visual da página.

Ele define o layout, espaçamentos, estilos dos campos, botões, lista e mensagem de lista vazia.

O CSS não cria comportamento. Ele apenas define como os elementos aparecem visualmente.

## script.js

O arquivo script.js controla o comportamento da página.

Ele captura elementos do HTML usando document.getElementById, escuta o envio do formulário, impede o reload da página, valida se o campo está vazio, cria novas tarefas na lista, cria botões de exclusão e atualiza a exibição da mensagem de lista vazia.

## Variáveis importantes

taskForm:
Representa o formulário usado para adicionar uma nova tarefa.

taskInput:
Representa o campo de texto onde o usuário digita a tarefa.

taskList:
Representa a lista ul onde as tarefas serão adicionadas pelo JavaScript.

emptyMessage:
Representa a mensagem "Nenhuma tarefa cadastrada.", que aparece quando a lista está vazia.

## Funções importantes

Evento de submit do formulário:
É executado quando o usuário clica em "Adicionar" ou aperta Enter no campo de texto. Ele impede o reload da página, lê o valor digitado, remove espaços com trim, valida se está vazio e chama addTask quando o texto é válido.

addTask:
Cria uma nova tarefa na tela. Ela cria um li, cria um span com o texto da tarefa, cria um botão Excluir, adiciona um evento de clique ao botão, coloca tudo dentro da lista e atualiza a mensagem de lista vazia.

Evento de click do botão Excluir:
Remove o item da tarefa correspondente e depois chama updateEmptyMessage para verificar se a mensagem de lista vazia deve aparecer.

updateEmptyMessage:
Verifica se a lista possui tarefas. Se possuir, esconde a mensagem "Nenhuma tarefa cadastrada". Se não possuir, mostra a mensagem.

## Fluxo ao adicionar uma tarefa

1. O usuário digita uma tarefa no campo de texto.
2. O usuário clica em "Adicionar" ou aperta Enter.
3. O formulário dispara o evento submit.
4. O JavaScript executa event.preventDefault para impedir o reload da página.
5. O código lê o valor do input com taskInput.value.
6. O código remove espaços no início e no fim com trim.
7. Se o texto estiver vazio, mostra um alerta e interrompe o fluxo com return.
8. Se o texto for válido, chama addTask(taskText).
9. A função addTask cria o item li da tarefa.
10. A função cria um span com o texto da tarefa.
11. A função cria o botão Excluir.
12. A função adiciona um evento de clique ao botão Excluir.
13. A função coloca o span e o botão dentro do li.
14. A função adiciona o li dentro da lista taskList.
15. A função chama updateEmptyMessage.
16. O campo de texto é limpo.
17. O foco volta para o campo de texto.

## Pontos que ainda não entendi

No momento, entendi o fluxo geral do código. Preciso apenas praticar mais os conceitos de DOM, addEventListener, createElement, appendChild e remove.

## Possíveis erros

- Se algum id do HTML for alterado e o JavaScript não for atualizado, o código pode quebrar.
- Se o arquivo script.js não for carregado corretamente, nenhuma funcionalidade irá funcionar.
- Se o formulário não tiver o id taskForm, o addEventListener não será aplicado.
- As tarefas desaparecem ao recarregar a página porque ainda não há localStorage.
- O app ainda não possui array de tarefas, então não há estado estruturado da aplicação.

## Correções após revisão

Após responder às perguntas da Aula 4, entendi melhor os seguintes pontos:

- O evento `submit` pertence ao formulário, não à página inteira.
- O `event.preventDefault()` impede o comportamento padrão do formulário, evitando o reload da página.
- O `.trim()` remove espaços do início e do fim do texto, ajudando a impedir tarefas vazias.
- O `return` dentro do `if` encerra a execução quando o campo está vazio.
- O botão "Excluir" é criado dinamicamente pelo JavaScript, e não existe no HTML inicial.
- O `appendChild` adiciona um elemento filho dentro de um elemento pai.
- O `taskItem.remove()` remove o item completo da tarefa correspondente ao botão clicado.
- O app ainda não usa array para armazenar tarefas.
- As tarefas existem apenas no DOM e somem ao recarregar a página.
- As principais limitações atuais são ausência de array, ausência de persistência e dependência dos IDs do HTML.

## Aula 5 — Estado com array

Nesta etapa, o app foi alterado para usar um array chamado `tasks`.

Antes, cada tarefa era criada diretamente na tela com `createElement` e `appendChild`. Agora, a tarefa é criada primeiro como um objeto dentro do array `tasks`.

O array passou a ser a fonte da verdade do app. A tela é apenas uma representação visual desse array.

Quando uma tarefa é adicionada, a função `addTask` cria um objeto com `id` e `text`, adiciona esse objeto no array e chama `renderTasks`.

Quando uma tarefa é excluída, a função `deleteTask` usa `filter` para criar um novo array sem a tarefa selecionada e depois chama `renderTasks`.

A função `renderTasks` limpa a lista atual da tela e recria todos os elementos HTML com base no conteúdo do array `tasks`.

Essa estrutura é melhor porque prepara o app para funcionalidades futuras, como marcar tarefa como concluída, editar tarefa e salvar no localStorage.

Limitações atuais:
- As tarefas ainda somem ao recarregar a página.
- Ainda não existe propriedade `completed`.
- O app ainda depende dos IDs corretos no HTML.
## Aula 6 — Marcar tarefa como concluída

Nesta etapa, o app passou a controlar se uma tarefa está concluída ou pendente.

Para isso, foi adicionada a propriedade `completed` no objeto da tarefa:

```
js
{
  id: Date.now(),
  text: taskText,
  completed: false
}
```

## Aula 7 — Contador de tarefas

Nesta etapa, o app passou a exibir um contador com o total de tarefas, tarefas pendentes e tarefas finalizadas.

Para isso, foi adicionado um elemento no HTML com o id `taskCounter`.

No JavaScript, esse elemento foi capturado com:

```
js
const taskCounter = document.getElementById("taskCounter");
```

# Consolidado JS

> push     → adicionar tarefa
> filter   → excluir ou contar tarefas
> map      → alterar uma tarefa
> length   → contar itens
> forEach  → renderizar item por item

## Aula 9 — Edição de tarefas

Nesta etapa, o app passou a permitir editar o texto de uma tarefa existente.

Foi criada a função `editTask`, que recebe o id da tarefa que será editada.

A função usa `find` para localizar a tarefa dentro do array `tasks`.

Depois, usa `prompt` para abrir uma caixa de edição já preenchida com o texto atual da tarefa.

Se o usuário clicar em Cancelar, o prompt retorna `null`, e a função é encerrada sem alterar nada.

Se o usuário apagar o texto ou digitar apenas espaços, o app mostra um alerta e não altera a tarefa.

Quando o novo texto é válido, a função usa `map` para percorrer o array e atualizar apenas a tarefa que possui o id correspondente.

Durante a edição:
- o id da tarefa é mantido;
- o completed da tarefa é mantido;
- apenas o text é alterado.

Após editar, o app chama `saveTasks` para salvar a alteração no localStorage e `renderTasks` para atualizar a tela.

Nesta aula, entendi a diferença entre:
- `find`, usado para localizar uma tarefa;
- `map`, usado para alterar uma tarefa;
- `filter`, usado para remover ou contar tarefas.
  
## Conclusão da Aula 10 — Revisão crítica

A revisão crítica mostrou que o app está funcional e adequado para os objetivos da Fase 1.

Foram identificadas melhorias possíveis, como validação mais forte dos dados vindos do localStorage, melhor organização visual dos botões, ajustes de responsividade, padronização de mensagens e melhorias de acessibilidade.

Nenhuma dessas melhorias foi classificada como crítica para a Fase 1, pois o app já cumpre seu objetivo principal: controlar tarefas, manter estado no array, renderizar a tela com base nesse estado e persistir os dados no localStorage.

Decidi não implementar novas melhorias agora para evitar aumentar a complexidade do projeto antes da hora.

Estado final do projeto:
O app permite adicionar, editar, excluir, concluir e reabrir tarefas. Também possui contador de total, pendentes e concluídas, além de persistência no localStorage.

Após a revisão, confirmei que as funcionalidades continuam funcionando corretamente.

# IMPORTANTE

## Como identificar se a IA inventou a algo

```
1. Comparar a resposta da IA com o código real.
2. Verificar se ela citou funções, arquivos ou bibliotecas que não existem.
3. Rodar o código.
4. Fazer testes manuais.
5. Pedir para ela apontar exatamente onde cada trecho existe no código.
```


## Fase 2 — Aula 1: Git, branch, diff e revisão

Nesta aula, pratiquei o fluxo profissional de versionamento usando Git e GitHub.

Criei uma branch específica para a melhoria:

```bash
fase2/aula1-validacao-localstoragedade de validação do array de dados


## Conclusão — Fase 2 Aula 1

A melhoria de validação dos dados carregados do localStorage foi implementada em uma branch separada.

Fluxo realizado:
- criação de branch;
- alteração pequena e focada;
- revisão com git diff;
- testes manuais;
- commit na branch;
- push para o GitHub;
- abertura de Pull Request;
- merge do Pull Request;
- exclusão da branch remota.

Com isso, pratiquei um fluxo profissional de versionamento, evitando alterar diretamente a main e garantindo que a mudança fosse revisável antes de entrar no projeto principal.

## Fase 2 — Aula 2: Refatoração controlada do renderTasks

Nesta aula, refatorei a função `renderTasks` sem alterar o comportamento do app.

Antes, `renderTasks` era responsável por:
- limpar a lista;
- atualizar o contador;
- controlar a mensagem de lista vazia;
- percorrer o array `tasks`;
- criar o `li`;
- criar checkbox;
- criar texto;
- criar botão editar;
- criar botão excluir;
- adicionar eventos;
- montar o item;
- inserir o item na lista.

A refatoração criou a função `createTaskElement(task)`, responsável por criar e retornar o elemento `li` completo de uma tarefa.

Com isso, `renderTasks` ficou mais simples e passou a apenas controlar o fluxo geral da renderização.

Fluxo realizado:
- criação de branch;
- alteração pequena e focada;
- revisão com `git diff`;
- testes manuais;
- commit na branch;
- push para o GitHub;
- abertura de Pull Request;
- merge do Pull Request.

Nenhum comportamento do app foi alterado.

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

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

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

/* Reset básico */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Estilos gerais da página */
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f3f4f6;
  color: #111827;
}

/* Layout principal */
.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
}

/* Card principal */
.todo-card {
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

/* Cabeçalho */
h1 {
  font-size: 28px;
  margin-bottom: 8px;
}

.description {
  color: #6b7280;
  margin-bottom: 20px;
}

/* Formulário */
.task-form {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.task-input {
  flex: 1;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
}

.task-button {
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}

.task-button:hover {
  background-color: #1d4ed8;
}

/* Contador */
.task-counter {
  margin-bottom: 16px;
  font-size: 14px;
  color: #374151;
  font-weight: bold;
}

/* Lista de tarefas */
.task-list {
  list-style: none;
  margin-bottom: 16px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 10px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.task-text {
  flex: 1;
  font-size: 16px;
}

.task-text.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

.task-checkbox {
  cursor: pointer;
}

/* Ações da tarefa */
.task-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}

/* Botão de editar */
.edit-button {
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  background-color: #f59e0b;
  color: #ffffff;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #d97706;
}

/* Botão de excluir */
.delete-button {
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  background-color: #ef4444;
  color: #ffffff;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #dc2626;
}

/* Mensagens */
.empty-message {
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
}

## Fase 2 — Aula 5: Edição inline de tarefas

Nesta aula, substituí a edição com `prompt()` por edição inline.

Foi criada a variável `editingTaskId`, responsável por indicar qual tarefa está em modo de edição.

Quando `editingTaskId` é igual ao `id` de uma tarefa, essa tarefa é renderizada com:
- checkbox;
- input de edição;
- botão Salvar;
- botão Cancelar.

Quando a tarefa não está em edição, ela é renderizada normalmente com:
- checkbox;
- texto da tarefa;
- botão Editar;
- botão Excluir.

A função `editTask` passou a receber o novo texto como parâmetro, validar se ele não está vazio, atualizar apenas o campo `text`, manter o mesmo `id`, manter o mesmo `completed`, salvar no `localStorage` e renderizar a tela novamente.

Também foi criado o objeto `MESSAGES` para começar a centralizar textos e labels usados no app.

O comportamento principal do app foi mantido:
- adicionar tarefa;
- editar tarefa;
- cancelar edição;
- impedir texto vazio;
- excluir tarefa;
- concluir/desmarcar;
- atualizar contador;
- persistir dados no localStorage.

Fluxo realizado:
- análise da alteração;
- implementação com apoio da IA;
- testes manuais;
- commit;
- Pull Request;
- merge;
- exclusão da branch;
- atualização da main local.

## Fase 2 — Aula 6: Limpeza e consistência após edição inline

Nesta aula, realizei ajustes pequenos de consistência após a implementação da edição inline.

As melhorias aplicadas foram:
- padronização do uso de mensagens no objeto `MESSAGES`;
- substituição de textos fixos por constantes quando aplicável;
- revisão de comentários;
- validação do foco no campo de edição inline;
- limpeza de pequenos pontos deixados após a implementação anterior.

Essa etapa não teve como objetivo adicionar nova funcionalidade, mas melhorar a consistência e a legibilidade do código.

O comportamento principal do app foi mantido:
- adicionar tarefa;
- editar inline;
- cancelar edição;
- salvar edição;
- validar texto vazio;
- excluir tarefa;
- concluir/desmarcar;
- atualizar contador;
- persistir dados no localStorage.

Essa aula reforçou a importância de fazer pequenos ajustes em branches separadas, mantendo commits claros e fáceis de revisar.

## Fase 2 — Aula 7: Acessibilidade básica

Nesta aula, implementei melhorias de acessibilidade nos controles do App de Tarefas.

Foram adicionados `aria-label` em elementos criados dinamicamente pelo JavaScript, como:
- checkbox de conclusão da tarefa;
- botão Editar;
- botão Excluir;
- botão Salvar;
- botão Cancelar.

Também foram adicionados estilos de `focus-visible` no CSS para melhorar a navegação por teclado, permitindo que o usuário veja claramente qual botão ou campo está focado.

Essas alterações melhoram a experiência para usuários que utilizam teclado e leitores de tela.

O comportamento principal do app foi mantido:
- adicionar tarefa;
- editar inline;
- salvar edição;
- cancelar edição;
- excluir tarefa;
- marcar/desmarcar como concluída;
- atualizar contador;
- persistir dados no localStorage.

Melhorias futuras possíveis:
- adicionar `aria-label` no input de edição inline;
- permitir salvar com Enter;
- permitir cancelar com Escape.