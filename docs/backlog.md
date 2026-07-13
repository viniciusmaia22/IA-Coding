# Backlog — App de Tarefas

Este documento registra ideias, melhorias e possíveis evoluções do App de Tarefas.

O objetivo do backlog é manter as próximas alterações organizadas antes de virarem código.

---

## Prioridades

### Alta prioridade

- Corrigir problemas que quebrem funcionalidades existentes.
- Melhorar clareza do código sem alterar comportamento.
- Manter documentação atualizada.
- Garantir que o app continue funcionando em telas pequenas.

### Média prioridade

- Melhorar experiência de uso.
- Criar novas pequenas funcionalidades.
- Melhorar acessibilidade.
- Organizar melhor arquivos e funções.

### Baixa prioridade

- Melhorias visuais não essenciais.
- Funcionalidades que aumentam muito o escopo.
- Integrações externas.
- Reescrita com framework.

---

## Backlog atual

| ID | Item | Tipo | Prioridade | Status |
|---|---|---|---|---|
| 1 | Melhorar foco automático no input de edição inline | Melhoria | Média | Pendente |
| 2 | Separar `createTaskElement` em funções menores | Refatoração | Média | Pendente |
| 3 | Revisar README após documentação técnica | Documentação | Média | Pendente |
| 4 | Criar guia de contribuição simples | Documentação | Baixa | Pendente |
| 5 | Avaliar confirmação antes de excluir tarefa | UX | Baixa | Pendente |
| 6 | Criar filtro de tarefas pendentes e concluídas | Funcionalidade | Média | Futuro |
| 7 | Criar botão para limpar tarefas concluídas | Funcionalidade | Baixa | Futuro |
| 8 | Avaliar testes automatizados simples | Qualidade | Média | Futuro |

---

## Regras para novos itens

Antes de implementar uma melhoria, ela deve ter:

- objetivo claro;
- escopo limitado;
- impacto esperado;
- critérios de aceite;
- testes manuais previstos.