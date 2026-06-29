# App de Tarefas — IA Coding Fase 1

## Objetivo

O objetivo deste projeto é criar um **App de Tarefas** simples utilizando **HTML, CSS e JavaScript puro**, como parte de um treinamento de **IA Coding**.

Nesta primeira fase, o foco é praticar os fundamentos de uma aplicação web:

* estruturação de página com HTML;
* estilização com CSS;
* manipulação do DOM com JavaScript;
* controle de dados com array;
* renderização dinâmica da lista de tarefas;
* persistência local usando `localStorage`.

O app permite ao usuário cadastrar, editar, excluir, concluir e desmarcar tarefas, mantendo os dados salvos no navegador.

---

## Tecnologias utilizadas

O projeto utiliza apenas tecnologias nativas do navegador:

* **HTML5**
  Responsável pela estrutura da página.

* **CSS3**
  Responsável pelo layout, cores, espaçamentos e aparência visual.

* **JavaScript puro**
  Responsável pela lógica do app, manipulação da tela, controle do array de tarefas e integração com `localStorage`.

* **localStorage**
  Recurso do navegador usado para salvar as tarefas localmente, mesmo após atualizar ou fechar a página.

Não foram utilizados:

* frameworks;
* bibliotecas externas;
* backend;
* banco de dados externo;
* TypeScript.

---

## Funcionalidades

O app possui as seguintes funcionalidades:

### 1. Adicionar tarefa

O usuário digita uma tarefa no campo de texto e clica no botão **Adicionar**.

Ao adicionar, o sistema cria um objeto de tarefa no seguinte formato:

```javascript
{
  id: number,
  text: string,
  completed: boolean
}
```

Por padrão, toda nova tarefa é criada como pendente:

```javascript
completed: false
```

---

### 2. Validar tarefa vazia

Antes de adicionar uma tarefa, o sistema usa `.trim()` para remover espaços do início e do fim do texto.

Se o usuário tentar adicionar uma tarefa vazia, o app exibe um alerta e não cadastra a tarefa.

---

### 3. Listar tarefas

As tarefas são renderizadas na tela a partir do array `tasks`.

A lista exibida no HTML não é a fonte principal dos dados. A fonte principal é o array.

Sempre que uma tarefa é adicionada, editada, excluída ou marcada como concluída, a tela é renderizada novamente.

---

### 4. Excluir tarefa

Cada tarefa possui um botão **Excluir**.

Ao clicar nesse botão, o sistema remove a tarefa correspondente do array usando `filter`.

Depois disso, o app salva a nova lista no `localStorage` e renderiza a tela novamente.

---

### 5. Editar tarefa

Cada tarefa possui um botão **Editar**.

Ao clicar nele, o sistema abre um `prompt()` com o texto atual da tarefa.

O app trata três cenários:

* se o usuário cancelar, nada é alterado;
* se o usuário digitar texto vazio, aparece um alerta;
* se o usuário digitar um texto válido, a tarefa é atualizada.

A edição altera apenas o campo `text`.

O `id` da tarefa não é alterado.

O status `completed` também não é alterado.

---

### 6. Marcar e desmarcar tarefa como concluída

Cada tarefa possui um checkbox.

Quando o checkbox é marcado, a tarefa passa a ter:

```javascript
completed: true
```

Quando é desmarcado, volta para:

```javascript
completed: false
```

Essa alteração é feita usando `map`, pois o objetivo é atualizar uma tarefa específica sem remover itens do array.

---

### 7. Contador de tarefas

O app exibe um contador com:

* total de tarefas;
* tarefas pendentes;
* tarefas concluídas.

O contador é calculado a partir do array `tasks`.

Isso evita manter uma variável separada apenas para contagem, reduzindo risco de inconsistência.

---

### 8. Mensagem de lista vazia

Quando não existem tarefas cadastradas, o app exibe a mensagem:

```text
Nenhuma tarefa cadastrada.
```

Quando há pelo menos uma tarefa, essa mensagem é ocultada.

---

### 9. Persistência com localStorage

As tarefas são salvas no navegador usando `localStorage`.

Sempre que o array `tasks` é alterado, o app chama `saveTasks()`.

Quando o app é carregado, o array `tasks` é iniciado com o resultado da função `loadTasks()`.

---

## Como executar

Para executar o projeto:

1. Crie uma pasta para o projeto.
2. Dentro dela, coloque os arquivos:

   * `index.html`
   * `styles.css`
   * `script.js`
3. Abra o arquivo `index.html` diretamente no navegador.

Também é possível abrir o projeto com a extensão **Live Server** no VS Code.

O app não precisa de instalação, servidor, backend ou dependências externas.

---

## Estrutura de arquivos

A estrutura atual do projeto é:

```text
app-tarefas/
├── index.html
├── styles.css
└── script.js
```

### `index.html`

Arquivo responsável pela estrutura da página.

Contém:

* título do app;
* descrição;
* formulário de nova tarefa;
* campo de texto;
* botão adicionar;
* contador;
* lista de tarefas;
* mensagem de lista vazia;
* importação do CSS;
* importação do JavaScript.

---

### `styles.css`

Arquivo responsável pela aparência visual do app.

Contém estilos para:

* reset básico;
* layout principal;
* card central;
* título e descrição;
* formulário;
* campo de texto;
* botão adicionar;
* contador;
* lista de tarefas;
* tarefa individual;
* checkbox;
* texto concluído;
* botão editar;
* botão excluir;
* mensagem de lista vazia.

---

### `script.js`

Arquivo responsável pelo comportamento da aplicação.

Contém:

* captura dos elementos do HTML;
* array `tasks`;
* evento de envio do formulário;
* função `addTask`;
* função `deleteTask`;
* função `editTask`;
* função `toggleTaskCompleted`;
* função `renderTasks`;
* função `updateTaskCounter`;
* função `saveTasks`;
* função `loadTasks`;
* renderização inicial da tela.

---

## Como o app funciona

O funcionamento geral do app segue este fluxo:

```text
Usuário interage com a tela
        ↓
JavaScript altera o array tasks
        ↓
O array é salvo no localStorage
        ↓
A tela é renderizada novamente
```

---

### Fluxo de adicionar tarefa

1. O usuário digita uma tarefa.
2. O formulário dispara o evento `submit`.
3. O JavaScript impede o recarregamento da página com `event.preventDefault()`.
4. O texto é lido do input.
5. O texto é validado com `.trim()`.
6. A função `addTask()` cria uma nova tarefa.
7. A tarefa é adicionada ao array `tasks`.
8. O app salva o array no `localStorage`.
9. A tela é renderizada novamente.

---

### Fluxo de excluir tarefa

1. O usuário clica em **Excluir**.
2. A função `deleteTask()` recebe o `id` da tarefa.
3. O array é filtrado com `filter`.
4. A tarefa com o `id` correspondente é removida.
5. O app salva o array atualizado.
6. A tela é renderizada novamente.

---

### Fluxo de editar tarefa

1. O usuário clica em **Editar**.
2. A função `editTask()` recebe o `id` da tarefa.
3. O sistema localiza a tarefa com `find`.
4. O `prompt()` abre com o texto atual.
5. Se o usuário cancelar, nada acontece.
6. Se o texto estiver vazio, o app exibe um alerta.
7. Se o texto for válido, o array é atualizado com `map`.
8. O `id` e o `completed` são preservados.
9. O app salva no `localStorage`.
10. A tela é renderizada novamente.

---

### Fluxo de marcar tarefa como concluída

1. O usuário marca ou desmarca o checkbox.
2. A função `toggleTaskCompleted()` recebe o `id` da tarefa.
3. O array é atualizado com `map`.
4. A tarefa correspondente tem o valor de `completed` invertido.
5. O operador `!` transforma:

   * `true` em `false`;
   * `false` em `true`.
6. O app salva no `localStorage`.
7. A tela é renderizada novamente.

---

### Fluxo de renderização

A função `renderTasks()` é responsável por atualizar a interface.

Ela faz as seguintes ações:

1. Limpa a lista atual no HTML.
2. Atualiza o contador.
3. Verifica se existem tarefas.
4. Mostra ou esconde a mensagem de lista vazia.
5. Percorre o array `tasks`.
6. Cria os elementos HTML de cada tarefa.
7. Adiciona checkbox, texto, botão editar e botão excluir.
8. Insere cada tarefa na lista.

---

### Fluxo de persistência

A persistência acontece com duas funções principais:

#### `saveTasks()`

Salva o array `tasks` no navegador.

Como o `localStorage` só armazena texto, o array precisa ser convertido com:

```javascript
JSON.stringify(tasks)
```

#### `loadTasks()`

Carrega as tarefas salvas no navegador.

Como os dados vêm em formato de texto, precisam ser convertidos de volta para array com:

```javascript
JSON.parse(storedTasks)
```

---

## Conceitos aprendidos

Durante esta fase, foram praticados os seguintes conceitos:

### HTML

* estrutura básica de uma página;
* uso de `form`;
* uso de `input`;
* uso de `button`;
* uso de `ul` e `li`;
* uso de `id` para JavaScript;
* uso de `class` para CSS;
* importação de arquivos externos.

---

### CSS

* reset básico;
* `box-sizing`;
* `display: flex`;
* espaçamentos com `padding`, `margin` e `gap`;
* estilização de botões;
* estilização de estados visuais;
* uso de classes;
* organização do CSS por blocos.

---

### JavaScript

* variáveis com `const` e `let`;
* arrays;
* objetos;
* funções;
* eventos;
* `addEventListener`;
* `preventDefault`;
* manipulação do DOM;
* `createElement`;
* `appendChild`;
* `textContent`;
* `classList.add`;
* `style.display`;
* `forEach`;
* `map`;
* `filter`;
* `find`;
* `JSON.stringify`;
* `JSON.parse`;
* `localStorage`.

---

### Estado da aplicação

O projeto ensina o conceito de estado.

Neste app, o estado principal é:

```javascript
let tasks = loadTasks();
```

Esse array representa os dados atuais do app.

A tela é construída com base nesse array.

---

### Renderização

Renderização é o processo de transformar os dados em elementos visuais na tela.

Neste projeto, a função `renderTasks()` é responsável por isso.

Sempre que o array muda, a tela precisa ser redesenhada.

---

### Diferença entre `map` e `filter`

#### `map`

Usado para transformar ou atualizar itens de um array.

Neste projeto, é usado para:

* editar o texto de uma tarefa;
* marcar ou desmarcar tarefa como concluída.

#### `filter`

Usado para selecionar ou remover itens de um array.

Neste projeto, é usado para:

* excluir uma tarefa;
* contar tarefas pendentes;
* contar tarefas concluídas.

---

### Diferença entre dados e tela

O app ajuda a entender que:

* o array `tasks` guarda os dados;
* o HTML mostra os dados;
* o CSS estiliza os dados;
* o JavaScript controla o comportamento.

Essa separação é uma base importante para projetos maiores.

---

## Testes manuais realizados

Os seguintes testes devem ser feitos manualmente no navegador:

### Testes de abertura

* Abrir o `index.html` no navegador.
* Confirmar se o layout aparece corretamente.
* Confirmar se o campo de tarefa aparece.
* Confirmar se o botão **Adicionar** aparece.
* Confirmar se a mensagem de lista vazia aparece quando não há tarefas.

---

### Testes de adição

* Adicionar uma tarefa válida.
* Confirmar se ela aparece na lista.
* Adicionar mais de uma tarefa.
* Confirmar se todas aparecem.
* Tentar adicionar tarefa vazia.
* Confirmar se aparece alerta.
* Tentar adicionar apenas espaços.
* Confirmar se aparece alerta.

---

### Testes de conclusão

* Marcar uma tarefa como concluída.
* Confirmar se o checkbox fica marcado.
* Confirmar se o texto fica riscado ou visualmente diferente.
* Desmarcar a tarefa.
* Confirmar se ela volta para pendente.

---

### Testes de contador

* Confirmar se o total aumenta ao adicionar tarefa.
* Confirmar se pendentes aumenta ao adicionar tarefa.
* Confirmar se concluídas aumenta ao marcar tarefa.
* Confirmar se pendentes diminui ao concluir tarefa.
* Confirmar se os números mudam corretamente ao excluir tarefa.

---

### Testes de edição

* Clicar em **Editar**.
* Confirmar se o `prompt()` abre com o texto atual.
* Alterar o texto.
* Confirmar se a tarefa aparece com o novo texto.
* Cancelar a edição.
* Confirmar se a tarefa não muda.
* Apagar o texto e confirmar.
* Confirmar se aparece alerta.
* Digitar apenas espaços.
* Confirmar se aparece alerta.
* Editar tarefa concluída.
* Confirmar se ela continua concluída.
* Editar tarefa pendente.
* Confirmar se ela continua pendente.

---

### Testes de exclusão

* Excluir uma tarefa pendente.
* Confirmar se ela desaparece.
* Excluir uma tarefa concluída.
* Confirmar se ela desaparece.
* Excluir todas as tarefas.
* Confirmar se a mensagem de lista vazia aparece.

---

### Testes de localStorage

* Adicionar tarefas.
* Atualizar a página.
* Confirmar se as tarefas continuam aparecendo.
* Marcar uma tarefa como concluída.
* Atualizar a página.
* Confirmar se ela continua concluída.
* Editar uma tarefa.
* Atualizar a página.
* Confirmar se o texto editado continua salvo.
* Excluir uma tarefa.
* Atualizar a página.
* Confirmar se ela continua excluída.

---

## Limitações atuais

### Prioridade Alta — Validação limitada do localStorage

O app possui tratamento com `try/catch` ao carregar os dados do `localStorage`.

Isso protege contra JSON inválido.

Porém, se o dado salvo for um JSON válido, mas em formato inesperado, o app ainda pode ter problemas.

Exemplo:

```javascript
{
  "text": "valor inválido"
}
```

O ideal seria validar se o conteúdo carregado é realmente um array.

---

### Prioridade Média — Função renderTasks concentra muitas responsabilidades

A função `renderTasks()` faz várias coisas:

* limpa a lista;
* atualiza contador;
* controla mensagem vazia;
* cria elementos HTML;
* adiciona eventos;
* monta cada item da lista.

Para a Fase 1 está aceitável.

Mas, se o projeto crescer, pode ser interessante dividir parte dessa lógica em funções menores.

---

### Prioridade Média — Edição com prompt é simples, mas limitada

O uso de `prompt()` é adequado para estudo inicial.

Porém, ele possui limitações:

* visual pouco personalizável;
* experiência simples;
* bloqueia a interação com a página enquanto está aberto.

Para uma fase futura, a edição inline ou com modal próprio pode melhorar a experiência.

---

### Prioridade Baixa — Exclusão sem confirmação

Atualmente, ao clicar em **Excluir**, a tarefa é removida imediatamente.

Isso é simples e funcional.

Porém, o usuário pode excluir uma tarefa sem querer.

---

### Prioridade Baixa — Layout pode ficar apertado em telas pequenas

Em celulares ou telas estreitas, os botões **Editar** e **Excluir** podem ficar próximos ou ocupar muito espaço na linha da tarefa.

Isso não impede o funcionamento, mas pode afetar a usabilidade.

---

## Melhorias futuras

### Prioridade Alta — Validar melhor os dados carregados do localStorage

Adicionar uma validação para garantir que o valor carregado seja realmente um array.

Também seria possível validar se cada item possui:

* `id`;
* `text`;
* `completed`.

Essa melhoria aumenta a robustez do app.

---

### Prioridade Média — Separar a criação visual da tarefa em uma função

Criar uma função específica para montar o elemento visual de uma tarefa.

Exemplo conceitual:

```javascript
function createTaskElement(task) {
  // cria li, checkbox, texto, botões e eventos
}
```

Isso deixaria `renderTasks()` mais curta e fácil de entender.

---

### Prioridade Média — Melhorar responsividade

Ajustar o layout para telas menores.

Possíveis melhorias:

* permitir quebra de linha nos botões;
* agrupar botões em uma área separada;
* reduzir espaçamentos em telas pequenas;
* ajustar tamanho da fonte e largura do card.

---

### Prioridade Média — Melhorar acessibilidade

Algumas melhorias possíveis:

* adicionar textos mais descritivos nos botões;
* melhorar navegação por teclado;
* associar melhor os textos aos controles;
* indicar visualmente foco nos botões e campos.

---

### Prioridade Baixa — Padronizar mensagens

As mensagens do app podem seguir um padrão mais consistente.

Exemplos:

* mensagens de erro;
* mensagens de lista vazia;
* textos dos botões.

---

### Prioridade Baixa — Melhorar visual da tarefa concluída

Atualmente, a tarefa concluída fica visualmente diferente.

Futuramente, é possível melhorar esse estado visual com:

* cor mais suave;
* ícone;
* separação visual;
* animação simples.

---

### Prioridade Baixa — Criar confirmação antes de excluir

Adicionar uma confirmação antes de remover uma tarefa.

Exemplo:

```javascript
confirm("Tem certeza que deseja excluir esta tarefa?")
```

Essa melhoria evita exclusões acidentais, mas muda o comportamento atual. Por isso, deve ser feita apenas em uma próxima fase.

---

## Uso da IA no projeto

A IA foi usada como apoio para planejamento, geração de código, explicação, revisão e criação de testes manuais.

Durante o processo, o código gerado foi revisado antes de ser aceito. As sugestões da IA foram avaliadas conforme o objetivo da Fase 1, evitando adicionar complexidade desnecessária.