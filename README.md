**Teste Técnico**  

Para Executar localmente instale as dependências com NPM

```
npm i
```

Para executar testes automatizados com o Jest, execute o comando

```
npm run test
```

Para Executar o codigo como DEV, execute o comando

```
npm run dev
```

Para criar o banco limpo, execute o comando

```
npm run typeorm:run
```

Objetivo: Criar um sistema de chat simples para múltiplos 
usuários. 

![Tela Chat](/anexos/chat.gif)

**Necessidades:**   
Requisitos funcionais:
- Tela de login 
  
![Tela Chat](/anexos/TelaLogin.png)
- Seleção de sala/conversa 
  - Apenas Administrador

![Tela Chat](/anexos/TelaAdmin.png)
- Tela da conversa 

![Tela Chat](/anexos/TelaConversa.png)

Requisitos não funcionais 
- Persistência em um banco relacional SQL

![Tela Chat](/anexos/DBRepo.png)
- Chat em tempo real
  - Sim em socket.io
- Utilizar Node.js ou Java (versão 8 ou maior) no back-end 
  - Node LTS
- Preferencialmente React porém poderá ser usado framework de sua preferência para o front-end 
  - API express fornecendo o HTML
- Entregar projeto em algum repositório público 
  - https://github.com/alvaroico/esx
- baseado em Git(histórico de commit)

Diferenciais: 
- Testes de unidade (“unitários”) 
  - `` npm run test  ``

![Tela Chat](/anexos/teste.gif)

- Diagramas 

![Tela Chat](/anexos/DiagramaSQL.png)

- Fluxograma 
  - Baseado no fluxo do Banco
- Histórico do chat em banco 
- Chamar um usuário para sala privada 
  - Sala privada baseado no usuário administrador criado ao entra na sala Admin
- Modelo de Entidade Relacionamento 
  - Sim
- Typescript 
  - Sim
- CRUD de sala 
  - Sim
- Hospedar site na nuvem (Heroku, Netlify, AWS, Azure, Vercel, etc...) 
  - Home https://esx-teste.herokuapp.com/
  - Usuário https://esx-teste.herokuapp.com/pages/client
  - Administrador https://esx-teste.herokuapp.com/pages/admin
- Docker 
  - Aplicado Docker Compose
    - ``docker compose up -d``
- Swagger o Infra as Code 
![Tela Chat](/anexos/DockerCompose.gif)