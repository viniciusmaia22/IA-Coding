# Decisões técnicas

## 1. Usar JavaScript puro

### Decisão

O projeto foi construído com HTML, CSS e JavaScript puro.

### Motivo

O objetivo da Fase 1 e da Fase 2 inicial era aprender os fundamentos sem depender de frameworks.

### Alternativas consideradas

- React
- Vue
- Angular
- TypeScript

### Por que não foram usadas agora

Essas tecnologias aumentariam a complexidade antes do domínio dos conceitos básicos.

---

## 2. Usar localStorage

### Decisão

As tarefas são salvas no localStorage do navegador.

### Motivo

O app não possui backend ou banco de dados externo.

### Consequência

Os dados ficam salvos apenas no navegador do usuário.

---

## 3. Usar array como fonte da verdade

### Decisão

O array `tasks` representa o estado principal da aplicação.

### Motivo

Isso facilita renderização, edição, exclusão, conclusão e contagem de tarefas.

### Consequência

A interface deve sempre ser renderizada a partir do array.

---

## 4. Usar edição inline

### Decisão

A edição com `prompt()` foi substituída por edição inline.

### Motivo

A edição inline melhora a experiência do usuário e aproxima o app de um comportamento mais real.

### Consequência

Foi necessário controlar qual tarefa está em edição usando `editingTaskId`.

---

## 5. Criar helpers de criação de elementos

### Decisão

Foram criadas funções auxiliares como:
- `createTaskCheckbox`
- `createEditInput`
- `createButton`

### Motivo

Reduzir repetição e melhorar a legibilidade do código.

---

## 6. Manter escopo simples

### Decisão

Não adicionar backend, autenticação ou framework nesta fase.

### Motivo

O foco atual é IA Coding, fluxo Git, revisão, documentação e evolução controlada.