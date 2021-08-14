<h3 align="center">
  <img alt="logo" title="logo" src="./.github/logo.svg" width="220px" />
</h3>

<p align="center">
  <img alt="ignews" title="ignews" src="./.github/ignews.png" width="100%" />
</p>

## 🚀 Tecnologias e Bibliotecas

Projeto desenvolvido com as seguintes tecnologias:

- ReactJS
- TypeScript
- NextJS
- Stripe (plataforma de pagamentos online, no qual foi utilizado sua API para realização das inscrições)
- Next Auth (sistema de autenticação para realizar o sistema de login com as API Routes)
- FaunaDB (banco de dados recomendado para funções Serveless)
- Prismic CMS (plataforma de CMS que contém os conteúdos dos posts que serão consumidos no código com sua API)
- Jest e Testing Library (framework e biblioteca para testes)

## 📖 Conceitos

Anotações de conceitos estudados:

- Renderização de página
  - Client Side Rendering (CSR; as informações são carregadas a partir de alguma ação do usuário; quando não necessita de indexação no Google)
  - Server Side Rendering (SSR; as informações do html são atualizadas em tempo real; é diferente para cada usuário; quando necessita de indexação no Google)
  - Static Site Generation (SSG; mesmo html compartilhado para todos os usuários, no qual as informações são atualizadas a cada tanto tempo determinado no código; quando necessita de indexação no Google)
- API Routes (são executadas utilizando o conceito de Serveless, no qual as rotas não criam um servidor 24 horas rodando que nem com Axios, só sobe e desce os ambientes conforme elas são chamadas)
- Estratégias de autenticação
  - JWT (salvo no storage; tem data de expiração)
  - Next Auth (sistema simples; independe do back end; tem data de expiração; utilizado quando necessita fazer login com algum sistema social, por exemplo Facebook ou GitHub; utilizado quando não se quer armazenar credenciais de acesso do usuário; informações ficam armazenadas nos cookies)
  - Cognito, Auth0 (providers de autenticação externa; integram com o Next Auth; armazenam dados do usuário)
- JAMStack (JavaScript API Markup; conceito de aplicações completas que dependem menos de um back end)
- CMS (Content Management System; projetos com painel de administração pronto e é possível criar conteúdo dentro; exemplo Wordpress. Drupal, Joomla, Magento)
- Headless CMS (Painel de administração + API HTTP, GraphQL, SDK; exemplo Strapi, Ghost, Keystone, GraphCMS, Prismic CMS, Contentful, Shopify, Saleor)
- Jest
  - Mock (função que simula um funcionamento diferente do real para funcionalidades externas do código para a execução de testes)
- Testing Library
  - Testing Playground (função que gera uma URL com uma interface onde é possível ver todo o html gerado pelo componente e os exatos códigos possíveis para testar estes determinados componentes renderizados)
    <img alt="testing-playground" title="testing-playground" src="./.github/testing-playground.png" />
  - Coverage report (função que gera um relatório que exibe se os testes já feitos no projeto são suficientes e quais partes do código os testes feitos estão cobrindo e não estão cobrindo)
    <img alt="coverage-report" title="coverage-report" src="./.github/coverage-report.png" />
    <img alt="coverage-report-2" title="coverage-report-2" src="./.github/coverage-report-2.png" />

## 💻 Projeto

O ig.news é um blog para listagem de posts. Foi desenvolvido durante as aulas do Chapter III da trilha de ReactJS do Bootcamp Ignite da Rocketseat, e os testes unitários feitos foram desenvolvidos posteriormente durante as aulas do Chapter V, e nela é possível fazer login com conta do GitHub e pagar uma inscrição mensal para visualizar os posts completos ou não pagar e visualizar somente alguns parágrafos iniciais.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/gl0fHkQgvaUfXNjuwGtDDs/ig.news?node-id=1%3A2). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## ⚙ Clone e execução

```bash
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/FelipeBrenner/ignite-reactjs-ignews.git
```

```bash
# Acesse a pasta da aplicação
$ cd ignite-reactjs-ignews

# Crie um arquivo .env.local e coloque as variaveis de ambiente baseado no arquivo .env.example, o que
# exige um certo conhecimento para criá-las e configurá-las em cada respectiva aplicação, Stripe,
# GitHub, FaunaDB e Prismic
# No projeto online que está disponível eu adicionei-as no próprio Vercel, por isso funciona lá
$ cp .env.example .env.local

# Instale as dependências
$ yarn
```

```bash
# Para o sistema de inscrição funcionar, é necessário o download da última versão do stripe-cli em
# https://github.com/stripe/stripe-cli/releases/tag/v1.5.14, e na pasta que contém ele abrir um cmd
# e rodar o seguinte comando para ouvir os eventos desenvolvidos em /src/pages/api/webhooks
$ stripe listen --forward-to localhost:3000/api/webhooks
# Para testar um cartão de crédito válido para a compra pode ser preenchido o número
# 4242 4242 4242 4242, e o resto das informação com qualquer coisa

# Inicie a aplicação
$ yarn dev

```

---

Por Felipe Brenner
