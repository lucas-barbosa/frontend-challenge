# Foton Books • ![BADGE](https://img.shields.io/github/checks-status/lucas-barbosa/frontend-challenge/master) ![BADGE](https://img.shields.io/github/languages/top/lucas-barbosa/frontend-challenge) ![BADGE](https://img.shields.io/website?url=https%3A%2F%2Ffoton-books-lucasbarbosa.vercel.app) ![BADGE](https://img.shields.io/github/license/lucas-barbosa/frontend-challenge)

Content
=================
<!--ts-->
   * [About](#About)
   * [Status](#Status)
   * [How to use](#How-to-use)
      * [Requeriments](#requeriments)
      * [Running Storybook](#running-storybook)
      * [Running Tests](#running-tests)
      * [Running Frontend](#running-frontend)
   * [Stack](#stack)
   * [API](#api)
   * [Design/Screens](#Design)
<!--te-->

## About
A front-end app developed for Foton Frontend Challenge.

Running at [Vercel](https://foton-books-lucasbarbosa.vercel.app/).

**NOTE:** If you have any questions regarding the test, just send us your question on our Discord's channel **#technical-challenge** on [Foton Discord](https://discord.gg/uw55aDewNf).

## Status
App finished and deployed at Vercel. [Demo](https://foton-books-lucasbarbosa.vercel.app/).

## How to use
### Requeriments
You need to have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/) installed on your computer to work properly.

### Running Storybook

```bash
$ git clone https://github.com/lucas-barbosa/frontend-challenge.git

$ cd foton-books

$ yarn storybook
```

### Running Tests

```bash
$ git clone https://github.com/lucas-barbosa/frontend-challenge.git

$ cd foton-books

$ yarn test
```

### Running Frontend

```bash
$ git clone https://github.com/lucas-barbosa/frontend-challenge.git

$ cd foton-books

$ yarn build

$ yarn start
```

## Stack
The following techs were used to make this app.

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)


## API

Use the [Google Books](https://developers.google.com/books/docs/v1/using)' API to recover the data that will be shown on the app.

```js
const query = 'harry potter';
fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
```

**NOTE:** You can use the form of calling apis of your choice (Fetch, Axios, etc).

## Design
https://www.figma.com/file/KFElqzD983WNyvMY1SaF0c/book-app?node-id=0%3A1

<img width="581" alt="Screen Shot 2021-04-13 at 10 19 47" src="https://user-images.githubusercontent.com/13947203/114559257-eb55ad00-9c41-11eb-9617-4e7627cc373e.png">


The website design has 3 screens, which are:

### Home

1. Create a Pixel Perfect screen based on design above;
2. The books must be clickable and redirect to **details** screen.

### Search

In this screen the functionalities below are **mandatory**:

1. See a list of books based on search query;
2. Make it possible to search for more books with a "Load more" button;
3. Search books by name;
4. Click on one of the books to see their details.

### Books details

In this screen the functionalities below are **mandatory**:

1. See all information for the selected book.
