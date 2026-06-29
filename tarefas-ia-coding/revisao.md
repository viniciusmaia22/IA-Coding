# Prova final da Fase 1

---

## Parte 1 — Conceito

### O que significa dizer que tasks é a fonte da verdade?

> O array tasks armazena as tarefas incluídas pelo app e seus estados. Ele guarda todas das informações.

### Por que a tela precisa ser renderizada novamente após cada alteração?

> As informações são atualizadas no array e, por esse motivo, a tela precisa ser renderizada para que a listagem exibida na tela seja atualizada também.

### Qual é a diferença entre dado, interface e persistência?

> Dados são as informações (tarefas) incluídas no array (tasks). Interface é o HTML que é exibido para o usuário. Persistência é o armazenamento de dados (localStorage) que mantém o array mesmo após fechar e abrir o navegador.

### Por que o app não salva objetos diretamente no localStorage?

> Porque o localStorage serve para persistir o array. O custo de gravação (tempo) no localStorage é maior do que manipulação de dados em memória (array). Se tivéssemos que trabalhar diretamente com o localStorage, seria muito mais complexo fica lendo e gravando de lá, além de aumentar o risco de erros na atualização.

### Por que JSON.stringify e JSON.parse são necessários?

> Para poder transformar o array em string (JSON.stringify) antes de armazenar do localStorage e depois para transformar a string lida do localStorage em um JSON (JSON.parse) que irá popular o array.

## Parte 2 — Código

### Qual função adiciona tarefa?

> addTask

### Qual função exclui tarefa?

> deleteTask

### Qual função edita tarefa?

> editTask

### Qual função marca/desmarca como concluída?

> toggleTaskCompleted

### Qual função atualiza o contador?

> updateTaskCounter

### Qual função desenha a lista na tela?

> renderTasks

### Qual função salva no navegador?

> saveTasks

### Qual função carrega os dados salvos?

> loadTasks

## Parte 3 — Revisão

### Qual melhoria você decidiu deixar para depois?

> Validar melhor os dados carregados do localStorage.

### Por que não vale a pena adicionar framework agora?

> Porque estamos trabalhando com um projeto simples e não vale criar complexidade adicionando um framework.

### Qual é a maior limitação atual do projeto?

> Validação limitada do localStorage

### Qual parte do código você acha que ficaria difícil se o app crescesse?

> script.js, pelo tamanho excessivo de funções para controlar todas as novas funcionalidades

### O que você faria diferente se fosse transformar esse app em produto real?

> Muitas coisas, mas a que mais impactaria a utilização é a edição da tarefa inline.

## Parte 4 — IA Coding

### Qual foi a diferença entre um prompt ruim e um prompt bom?

> Um prompt ruim é genérico e não inclui papel, contexto, stack, objetivo, restrições e critérios de aceite.

### Por que pedir “faça tudo” é perigoso?

> Porque a IA vai realizar um trabalho grande demais que pode ser muito difícil de entender e de corrigir. Além de permitir que ela inclua códigos incorretos.

### Como você limita o escopo de uma resposta da IA?

> Incluindo no prompt a stack e as restrições.

### Como você verifica se a IA inventou algo?

> Peço para ela explicar todos os paços.

### Quando você deve recusar uma sugestão da IA?

> Quando não obedecer algum dos parâmetros do prompt ou quando a solução não atender meus objetivos.