<br/>
<div align="center">
  <img src="public/favicon.svg" alt="Logo" width="100" height="100">

  <h3 align="center">VirtualSpirit FindMovie app</h3>

  <p align="center">
    Search and view app utilizing TheMovieDB API
  </p>
</div>
<br/>

<br/>

### Framework, library, language or API is used in this app

- [Vite.js - Framework / Bootstrap](https://vitejs.dev/)

- [React.js - Renderer library](https://reactjs.org/)

- [TheMovieDB - API](https://developer.themoviedb.org/)

- [React Query - State & data management](https://tanstack.com/query/)

- [Styled components - Styling library](https://styled-components.com/)

<br/>

## Features

- Featured & Discovery list of movies & tv series.

- Search for either movie, tv series, or people.

- Show more detail for movie and tv series.

<br/>

## Access the live demo following <a href="https://virtualspirit-findmovie.vercel.app/">this</a> link

<br/>

## Starting points

- Spin up development server start <a href="#development">here</a>

- Initiate test cases <a href="#test">here</a>

<div id="development"></div>
<br/>

## Spin up development server

In this section, we're going to spin our development server locally. Following this step

- The first thing we need to do is, clone the repository

    ```sh
    git clone https://github.com/yusrmuttaqien/virtualspirit-findmovie-app.git
    ```

- Go into our newly created directory by git

   ```sh
   cd virtualspirit-findmovie-app
   ```

- Install all required packages listed on `packages.json`

   ```sh
   npm i
   ```

- After all of those texts are done spitting, as long there is no red-colored text, we're good to go, spin the development server

   ```sh
   npm run dev
   ```

- Access the app in the browser at `http://localhost:5173/`

<div id="test"></div>
<br/>

## Initiate test cases

In this section, we're going to execute avaliable test cases. Following this step

- The first thing we need to do is, to have clone of the repository locally, and open the directory inside terminal

    ```sh
    cd virtualspirit-findmovie-app
    ```

- Install all required packages listed on `packages.json`

   ```sh
   npm i
   ```

- After all of those texts are done spitting, as long there is no red-colored text, we're good to go, initiate all test cases

   ```sh
   npm run test
   ```

- Let it run for sometimes. At the end there will be a report regarding how many test cases is passed.

- For coverage, following commands will do the tricks.

   ```sh
   npm run test:cover
   ```

- After the commands is complete, checkout `coverage/index.html` to view the report visually.

<br/>

## Credits

### <a href="https://github.com/yusrmuttaqien">Yusril Muttaqien</a> - 2023 - MIT License