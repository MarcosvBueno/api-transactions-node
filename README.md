 
 
 # <img src="https://i.imgur.com/jgM1K5Z.png" width=30 height=30 /> API Transactions



  
O projeto consiste em uma API RESTful para gerenciar transações bancárias básicas, como depósitos e saques . A API foi construída utilizando o framework Node.js para o ambiente de execução do JavaScript no servidor, o Fastify como o framework web para lidar com as requisições HTTP de forma eficiente e o Knex.js como um query builder para interagir com o banco de dados.


## Requisitos Funcionais

  - [x] O usuário deve poder criar uma nova transação;
  - [x] O usuário deve poder obter um resumo da sua conta;
  - [x] O usuário deve poder listar todas transações que já ocorreram;
  - [x] O usuário deve poder visualizar uma trasnsação única;

## Regras de negócio

  - [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
  - [x] Deve ser possível idenficar o usuário entre as requisições;
  - [x] O usuário só pode visualizar transações o qual ele criou;

## Instalação

```bash
# Faça o clone do repotório
  git clone git@github.com:MarcosvBueno/api-transactions-node.git

# Instalar as dependências do projeto
  npm install

# Executando o Knex para criar nosso banco de dados
  npm run knex -- migrate:latest

# Rodar a build do projeto 
  npm run build
```

## Insomnia do projeto

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API-node-js-TEST&uri=https%3A%2F%2Fraw.githubusercontent.com%2FRenanFachin%2FRS_IGNITE_api-rest-nodejs%2Fmain%2Fexport.json%3Ftoken%3DGHSAT0AAAAAABV4J7KLCHDKOY6B4OGZONSWZB5R4JA)

## Testes e2e
Os testes foram desenvolvidos utilizando `vitest` e `supertest`


## Rotas
- Criar nova transação
```bash
POST /transactions
```

- Listar todos usuários
```bash
GET /transactions
```

- Listar transação específica usuários
```bash
GET /transactions/:${transaction_id}
```

- Mostrar um resumo geral das transações do usuário
```bash
GET /transactions/summary
```

## Ferramentas utilizadas
  - `NodeJS`
  - `Fastify`
  - `Sqlite`
  - `Typescript`
  - `Knex`
  - `tsup`
  - `zod`
  - `vitest`
  - `eslint`
  - `supertest`
  - `dotenv`
