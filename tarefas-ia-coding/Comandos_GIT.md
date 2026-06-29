# Dicas gerais

## GIT
# Resumo dos comandos Git

Este resumo reúne os comandos usados para inicializar o projeto, vincular ao GitHub, fazer o primeiro commit, resolver problemas de repositório remoto privado, trabalhar com branch e revisar alterações com `git diff`.

---

## 1. `git init`

Inicializa um repositório Git dentro da pasta atual do projeto.

```bash
git init
```

### Descrição

Cria a pasta oculta `.git`, que permite ao Git controlar o histórico de alterações do projeto.

### Quando usar

Use quando você já tem uma pasta com arquivos e quer começar a versionar esse projeto com Git.

### Comandos adicionais

Verificar se o Git foi inicializado:

```bash
git status
```

---

## 2. `git branch -M main`

Renomeia ou define a branch principal como `main`.

```bash
git branch -M main
```

### Descrição

Garante que a branch principal do repositório local se chame `main`, que é o padrão mais comum atualmente no GitHub.

### Quando usar

Use após o `git init`, antes de fazer o primeiro push para o GitHub.

### Comandos adicionais

Ver branches existentes:

```bash
git branch
```

---

## 3. `git remote add origin`

Vincula o repositório local ao repositório remoto do GitHub.

```bash
git remote add origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
```

### Descrição

Cria um remote chamado `origin`, apontando para o repositório no GitHub.

### Quando usar

Use quando o projeto local ainda não está conectado a nenhum repositório remoto.

### Exemplo

```bash
git remote add origin https://github.com/seu-usuario/app-tarefas.git
```

### Comandos adicionais

Verificar os remotes cadastrados:

```bash
git remote -v
```

Alterar a URL do remote caso tenha sido cadastrada errada:

```bash
git remote set-url origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
```

---

## 4. `git remote -v`

Mostra os repositórios remotos vinculados ao projeto.

```bash
git remote -v
```

### Descrição

Exibe a URL usada para buscar e enviar código para o repositório remoto.

### Quando usar

Use para conferir se o repositório local está apontando para o GitHub correto.

### Exemplo de saída

```bash
origin  https://github.com/usuario/app-tarefas.git (fetch)
origin  https://github.com/usuario/app-tarefas.git (push)
```

### Comandos adicionais

Corrigir a URL do remote:

```bash
git remote set-url origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
```

---

## 5. `git status`

Mostra o estado atual do repositório.

```bash
git status
```

### Descrição

Informa quais arquivos foram modificados, quais ainda não estão sendo rastreados e se há algo pronto para commit.

### Quando usar

Use antes e depois de alterações importantes.

### Exemplos de uso

Antes de adicionar arquivos:

```bash
git status
```

Depois de adicionar arquivos ao stage:

```bash
git status
```

Antes de fazer commit:

```bash
git status
```

### Resultado ideal antes de iniciar uma nova tarefa

```text
nothing to commit, working tree clean
```

---

## 6. `git add .`

Adiciona todos os arquivos modificados ou novos ao stage.

```bash
git add .
```

### Descrição

Prepara os arquivos para o próximo commit.

### Quando usar

Use quando quiser incluir todas as alterações atuais no commit.

### Comandos adicionais

Adicionar apenas um arquivo específico:

```bash
git add script.js
```

Adicionar mais de um arquivo específico:

```bash
git add index.html styles.css script.js
```

Ver o que foi preparado:

```bash
git status
```

---

## 7. `git commit -m`

Cria um commit com uma mensagem descritiva.

```bash
git commit -m "Adiciona versão inicial do app de tarefas"
```

### Descrição

Salva um ponto no histórico do projeto com as alterações preparadas pelo `git add`.

### Quando usar

Use depois de revisar e testar uma alteração.

### Boas mensagens de commit

```bash
git commit -m "Adiciona versão inicial do app de tarefas"
git commit -m "Valida dados carregados do localStorage"
git commit -m "Atualiza documentação da Fase 1"
git commit -m "Melhora responsividade dos botões"
```

### Mensagens ruins

```bash
git commit -m "ajustes"
git commit -m "teste"
git commit -m "mudanças"
git commit -m "final"
```

---

## 8. `git push -u origin main`

Envia a branch local `main` para o GitHub e cria o vínculo com o remoto.

```bash
git push -u origin main
```

### Descrição

Faz o primeiro envio da branch `main` para o repositório remoto.

O `-u` define o relacionamento entre a branch local e a branch remota. Depois disso, você pode usar apenas:

```bash
git push
```

### Quando usar

Use no primeiro push da branch `main`.

### Comandos adicionais

Enviar novamente após novos commits:

```bash
git push
```

Enviar uma branch específica:

```bash
git push origin nome-da-branch
```

---

## 9. `git pull origin main --allow-unrelated-histories`

Baixa o conteúdo remoto quando o repositório local e remoto têm históricos diferentes.

```bash
git pull origin main --allow-unrelated-histories
```

### Descrição

Usado quando o repositório no GitHub já foi criado com arquivos, como `README.md`, `.gitignore` ou licença, e o projeto local também já tem commits.

### Quando usar

Use apenas se o push for rejeitado porque o repositório remoto já possui histórico.

### Comandos adicionais

Depois de resolver possíveis conflitos:

```bash
git add .
git commit -m "Resolve conflitos com repositório remoto"
git push -u origin main
```

---

## 10. `git config --global credential.https://github.com.useHttpPath true`

Configura o Git para diferenciar credenciais por repositório no GitHub.

```bash
git config --global credential.https://github.com.useHttpPath true
```

### Descrição

Ajuda quando você usa duas contas do GitHub no mesmo computador, principalmente com repositórios privados.

Sem isso, o Git pode usar a credencial salva apenas para `github.com`, mesmo que o repositório pertença a outra conta.

### Quando usar

Use quando tiver múltiplas contas GitHub no mesmo Windows e precisar autenticar repositórios privados de contas diferentes.

### Comandos adicionais

Verificar configurações globais:

```bash
git config --global --list
```

---

## 11. `git remote set-url origin`

Altera a URL do repositório remoto.

```bash
git remote set-url origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
```

### Descrição

Corrige ou troca o destino remoto do projeto.

### Quando usar

Use quando o remote estiver apontando para:

- usuário errado;
- organização errada;
- nome de repositório errado;
- URL HTTPS/SSH diferente da desejada.

### Comandos adicionais

Verificar antes:

```bash
git remote -v
```

Alterar:

```bash
git remote set-url origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
```

Verificar depois:

```bash
git remote -v
```

---

## 12. `git checkout -b`

Cria uma nova branch e já muda para ela.

```bash
git checkout -b fase2/aula1-validacao-localstorage
```

### Descrição

Cria uma branch separada para trabalhar em uma alteração específica.

### Quando usar

Use antes de iniciar uma melhoria, correção ou nova funcionalidade.

### Exemplo

```bash
git checkout -b fase2/aula1-validacao-localstorage
```

### Comandos adicionais

Ver branches:

```bash
git branch
```

Voltar para a branch principal:

```bash
git checkout main
```

Criar outra branch:

```bash
git checkout -b docs/atualiza-readme
```

---

## 13. `git checkout main`

Muda para a branch `main`.

```bash
git checkout main
```

### Descrição

Retorna para a branch principal do projeto.

### Quando usar

Use antes de criar uma nova branch ou depois de concluir uma tarefa.

### Comandos adicionais

Atualizar a `main` com o remoto:

```bash
git pull
```

Criar uma nova branch a partir da `main` atualizada:

```bash
git checkout -b nome-da-nova-branch
```

---

## 14. `git branch`

Lista as branches locais.

```bash
git branch
```

### Descrição

Mostra as branches existentes no repositório local.

A branch atual aparece com `*`.

### Exemplo de saída

```text
* fase2/aula1-validacao-localstorage
  main
```

### Comandos adicionais

Criar e entrar em uma nova branch:

```bash
git checkout -b nome-da-branch
```

Trocar de branch:

```bash
git checkout main
```

---

## 15. `git diff`

Mostra as alterações feitas nos arquivos antes do commit.

```bash
git diff
```

### Descrição

Mostra exatamente o que foi alterado no código.

### Quando usar

Use sempre antes de fazer `git add` e `git commit`.

### O que observar

Verifique:

- quais arquivos foram alterados;
- se a alteração está dentro do objetivo;
- se a IA mudou algo fora do escopo;
- se alguma funcionalidade foi removida sem querer;
- se o código alterado está pequeno e revisável.

### Comandos adicionais

Ver diff sem abrir o paginador:

```bash
git --no-pager diff
```

Ver diff de apenas um arquivo:

```bash
git --no-pager diff -- script.js
```

Ver resumo dos arquivos alterados:

```bash
git diff --stat
```

---

## 16. Navegação dentro do `git diff`

Quando o `git diff` abre em páginas, normalmente ele usa o paginador `less`.

### Teclas úteis

```text
q        sai do diff e volta ao prompt
Espaço   avança uma página
b        volta uma página
Enter    desce uma linha
↑        sobe uma linha
↓        desce uma linha
g        vai para o início
G        vai para o final
/termo   pesquisa um termo
n        próximo resultado da pesquisa
N        resultado anterior da pesquisa
```

### Quando usar

Use quando o diff for grande e abrir em tela paginada.

### Comando alternativo

Para evitar o paginador:

```bash
git --no-pager diff
```

---

## 17. `git --no-pager diff`

Mostra o diff direto no terminal, sem abrir o modo de páginas.

```bash
git --no-pager diff
```

### Descrição

Imprime todo o diff diretamente no terminal.

### Quando usar

Use quando quiser copiar o resultado do diff para enviar para a IA revisar.

### Comandos adicionais

Ver apenas o diff do `script.js`:

```bash
git --no-pager diff -- script.js
```

Ver resumo:

```bash
git diff --stat
```

---

## 18. `git diff --stat`

Mostra um resumo das alterações.

```bash
git diff --stat
```

### Descrição

Exibe quais arquivos foram alterados e a quantidade aproximada de linhas adicionadas/removidas.

### Quando usar

Use para ter uma visão rápida antes de analisar o diff completo.

### Exemplo de saída

```text
script.js | 25 ++++++++++++++++++++-----
1 file changed, 20 insertions(+), 5 deletions(-)
```

### Comandos adicionais

Ver diff completo:

```bash
git diff
```

Ver diff sem paginador:

```bash
git --no-pager diff
```

---

# Comandos auxiliares usados no processo

Estes não são comandos Git puros, mas ajudaram no fluxo.

## 19. `cmdkey /delete`

Remove credenciais salvas no Windows.

```bash
cmdkey /delete:LegacyGeneric:target=git:https://github.com
```

### Descrição

Remove uma credencial salva no Gerenciador de Credenciais do Windows.

### Quando usar

Use quando o Git estiver autenticando com a conta errada do GitHub.

### Alternativa pela interface

```text
Painel de Controle
↓
Gerenciador de Credenciais
↓
Credenciais do Windows
↓
github.com ou git:https://github.com
↓
Remover
```

---

# Fluxo completo usado até agora

## Primeiro envio do projeto para o GitHub

```bash
git init
git branch -M main
git remote add origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
git remote -v
git status
git add .
git commit -m "Adiciona versão inicial do app de tarefas"
git push -u origin main
```

---

## Correção de remote errado

```bash
git remote -v
git remote set-url origin https://github.com/USUARIO_CORRETO/NOME-DO-REPOSITORIO.git
git remote -v
```

---

## Fluxo para múltiplas contas GitHub

```bash
git config --global credential.https://github.com.useHttpPath true
git remote -v
git remote set-url origin https://github.com/USUARIO_DA_CONTA_CORRETA/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Se necessário, limpar credencial antiga:

```bash
cmdkey /delete:LegacyGeneric:target=git:https://github.com
```

---

## Fluxo de trabalho com branch

```bash
git status
git checkout main
git pull
git checkout -b fase2/aula1-validacao-localstorage
```

Depois da alteração:

```bash
git diff
git --no-pager diff -- script.js
git status
git add script.js
git commit -m "Valida dados carregados do localStorage"
git push origin fase2/aula1-validacao-localstorage
```

---

# Checklist antes de cada commit

```md
## Checklist antes do commit

- [ ] Rodei `git status`.
- [ ] Confirmei que estou na branch correta.
- [ ] A alteração tem um único objetivo.
- [ ] Rodei `git diff`.
- [ ] Revisei os arquivos alterados.
- [ ] A IA não mudou nada fora do escopo.
- [ ] Testei manualmente.
- [ ] O app continua funcionando.
- [ ] A mensagem do commit descreve bem a alteração.
```