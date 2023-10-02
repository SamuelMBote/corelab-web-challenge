
# Corelab Web Chanllenge
Desafio Front End

## Desafio:
Você tem a tarefa de criar um aplicativo da Web que permita aos usuários criar e gerenciar suas listas de tarefas. O aplicativo deve consistir em uma página da Web responsiva construída em React e uma API construída em Node.js para armazenar e gerenciar as listas de tarefas.

#### O aplicativo tem as seguintes funcionalidades:
- Os usuários são capazes de criar, ler, atualizar e excluir itens de tarefas usando a API.
- Os usuários devem podem marcar um item como favorito.
- Os usuários podem definir uma cor para cada item de tarefa.
- A lista de tarefas pode ser filtrada por itens e cores favoritos.
- Os itens favoritos são exibidos no topo da lista.

# DETALHES DO PROJETO
### Header

O cabeçalho conta com um input de pesquisa que não necessista de botão para funcionar.

Ao digitar na caixa de pesquisa, voce pode buscar conteúdo de texto que conste tanto do titulo da tarefa quanto no corpo.

Ao lado da caixa de texto tem um botao checkbox, ele ativa/desativa o painel de seleção de cores.

Ao selecionar uma ou mais cores é retornado do seu banco de dados as tarefas com aquelas cores específicas.

### Criação de Notas

A segunda seção do web aplicativo, contem uma caixa de criação de nota.

Para criar uma nota é obrigatório que tenha um corpo, mas o título e a opção de ser favorito é opcional.

Ao digitar o texto do corpo da tarefa é apresentado um botao de Salvar.

### Exibição de Notas

O painel de exibição retorna da API todas as tarefas cadastradas ou as pesquisadas.

Ele é dividido em duas seções.
Uma para tarefas favoritas e outra para tarefas comuns.
Caso haja só tarefas comuns ele apresenta somemnte uma secao com a infomação 'Todas'

### Notas/Tarefas
Cada uma apresentada as seguintes opções:

Deletar, clicando no botão X.

Editar, clicando no Lápis. Ao clicar, os campos de digitação são liberados e voce pode alterar o texto como achar melhor. Clique no mesmo botão porém com um simbolo diferente(Concluído) para salvar a mensagem digitada.

Trocar cor, ao clicar na lata de tinta é ativado um painel de seleção de cores que te permite alterar a cor da nota.
## Autor

[@SamuelMBote](https://github.com/SamuelMBote)


## Stack

**Front-end:** React, TypeScript, TailwindCSS

**Back-end:** Node.Js, AdonisJs

[Clique aqui para acessar o repositório da API](https://github.com/SamuelMBote/corelab_api_challenge)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_URL`


## Para rodar localmente

Clone o projeto

```bash
  git clone https://github.com/SamuelMBote/corelab_web_challenge
```

Entre na pasta em que foi clonado o projeto com o comando

```bash
  cd 'nome_da_pasta'
```

Instale as dependencias

```bash
  npm install
```

Se você deseja executar a versao de desenvolvimento execute

```bash
  npm run dev

```

Se deseja somente ver o projeto rodando

```bash
  npm run preview

```

Se você deseja gerar uma nova build

```bash
  npm run build

```
