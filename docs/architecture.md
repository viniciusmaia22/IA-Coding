# Arquitetura — App de Tarefas

## Visão geral

O App de Tarefas é uma aplicação web simples criada com HTML, CSS e JavaScript puro.

O app permite:

- adicionar tarefas;
- editar tarefas inline;
- excluir tarefas;
- marcar e desmarcar como concluídas;
- contar tarefas totais, pendentes e concluídas;
- persistir dados no localStorage.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- localStorage

## Estrutura de arquivos

```text
app-tarefas/
├── index.html
├── styles.css
└── script.js
```

## Responsabilidades dos arquivos

### index.html

#### Define a estrutura inicial da página:

```text
- formulário;
- input de nova tarefa;
- botão adicionar;
- lista de tarefas;
- contador;
- mensagem de lista vazia.
```

### styles.css

#### Define a aparência visual:

```text
- layout;
- card principal;
- formulário;
- lista;
- botões;
- responsividade;
- estados de foco;
- edição inline.
```

### script.js

#### Controla o comportamento:

```text
- estado da aplicação;
- eventos;
- criação de tarefas;
- edição;
- exclusão;
- conclusão;
- renderização;
- persistência;
- validações.
```

## Documentação do projeto

```text
docs/
├── architecture.md
├── decisions.md
├── fluxo-git.md
└── testes-manuais.md
```

.github/
└── pull_request_template.md