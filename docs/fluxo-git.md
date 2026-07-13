# Fluxo Git do projeto

## Fluxo padrão

Para cada alteração:

### Prepara o ambiente local, criando uma branch para o controle da alteração

```
git checkout main
git pull origin main
git checkout -b nome-da-branch
```

### Envia a branch para o GitHub

```
git status
git diff
git add .
git commit -m "Mensagem clara"
git push origin nome-da-branch
```

### Realizar o merge no GitHub pelo Pull Request (PR)

1. Abrir Pull Request no GitHub.
2. Revisar arquivos alterados.
3. Confirmar testes.
4. Fazer merge.
5. Apagar branch remota.
6. Atualizar main local.

### Atualização do ambiente local após o merge

Depois que o Pull Request for aprovado e mergeado no GitHub:

```
git checkout main
git pull origin main
git branch -d nome-da-branch
git fetch --prune
git status
git branch
```

Descrição dos comandos

git checkout main
→ volta para a branch main local

git pull origin main
→ atualiza sua main local com o merge feito no GitHub

git branch -d fase2/aula14-backlog-roadmap
→ apaga a branch local da aula 14

git fetch --prune
→ remove referências locais de branches remotas que já foram apagadas no GitHub

git status
→ confirma se está tudo limpo

git branch
→ lista as branches locais restantes

### Checklist antes do commit

[ ] Estou na branch correta.
[ ] A alteração tem um único objetivo.
[ ] Rodei git status.
[ ] Rodei git diff.
[ ] Testei manualmente.
[ ] A mensagem do commit está clara.