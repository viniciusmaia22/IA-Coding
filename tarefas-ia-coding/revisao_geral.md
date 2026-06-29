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