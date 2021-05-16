<h3 align="center">
  <img alt="logo" title="logo" src="./.github/logo.svg" width="220px" />
</h3>

<p align="center">
  <img alt="ignews" title="ignews" src="./.github/ignews.png" width="100%" />
</p>

## 🚀 Tecnologias e Bibliotecas

Esse projeto está sendo desenvolvido com as seguintes tecnologias:

- ReactJS
- TypeScript
- NextJS
- Stripe (plataforma de pagamentos online, no qual foi utilizado sua API para realização das inscrições)
- Next Auth (sistema de autenticação para realizar o sistema de login com as API Routes)
- FaunaDB (banco de dados recomendado para funções Serveless)

## 📖 Conceitos

Anotações de conceitos estudados:

- Renderização de página
  - Client Side Rendering (CSR; as informações são carregadas a partir de alguma ação do usuário; quando não necessita de indexação no Google)
  - Server Side Rendering (SSR; as informações do html são atualizadas em tempo real; é diferente para cada usuário; quando necessita de indexação no Google)
  - Static Site Generation (SSG; mesmo html compartilhado para todos os usuários, no qual as informações são atualizadas a cada tanto tempo determindo no código; quando necessita de indexação no Google)
- API Routes (são executadas utilizando o conceito de Serveless, no qual as rotas não criam um servidor 24 horas rodando que nem com Axios, só sobe e desce os ambientes conforme elas são chamadas)
- Estratégias de autenticação (estudar quando utilizar cada uma com mais detalhes nesta própria [documentação](https://nextjs.org/docs/authentication) do NextJS)
  - JWT (salvo no storage; tem data de expiração)
  - Next Auth (sistema simples; independe do back end; tem data de expiração; utilizado quando necessita fazer login com algum sistema social, por exemplo Facebook ou GitHub; utilizado quando não se quer armazenar credenciais de acesso do usuário; informações ficam armazenadas nos cookies)
  - Cognito, Auth0 (providers de autenticação externa; integram com o Next Auth; armazenam dados do usuário)

## 💻 Projeto

O ig.news é um blog para listagem de posts. Foi desenvolvido durante as aulas do Chapter III da trilha de ReactJS do Bootcamp Ignite da Rocketseat, e nela é possível fazer login com conta do GitHub e pagar uma inscrição mensal para visualizar os posts completos ou não pagar e visualizar somente alguns parágrafos iniciais.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/gl0fHkQgvaUfXNjuwGtDDs/ig.news?node-id=1%3A2). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

---

Por Felipe Brenner
