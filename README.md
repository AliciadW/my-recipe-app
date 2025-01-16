# my-recipe-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Tools and libraries

While working on this project I decided to include the following tools, packages, frameworks and libraries:

- Vue
- Vite
- Pinia
  - Pinia plugin persisted state
- Vue router
- Vitest
- TailwindUI
  - Tailwind CSS
  - Headless UI
  - Heroicons

## API

I opted to use an API to get a list of recipes. The one I ended up making use of is by DummyJSON and can be found [here] (https://dummyjson.com/docs/recipes#recipes-tag). 

I ended up only using the recipes endpoint to get a list of recipes, then store this in the store from where I then manipulated the data.

## Assumptions and design decisions
While working on this project I opted for a clean layout. 

The design is done in such a way that it is intuitive and easy to use. A user is faced with a list of recipes on the landing page and from here they are able to search through the recipes either by the recipe name or by an ingredient.

An improvement to the design would be to highlight/display the search term to the user in the results layout (i.e either the recipe name or the ingredient could be highlighted).

Each recipe image has a heart in the top right corner which indicate whether the recipe has been added to the user's favourites list. 
When a user clicks or taps on a recipe card, the user is redirected to a full recipe view page. From here the user can click/tap on the heart icon to add or remove the recipe from their favourites list.

To improve user experience with favouriting a recipe, the user should be able to click on the heart icon from the main page as well.

To keep the site simple, I opted against adding filters and the ability to select tags for quick searches. This could be added as an improvement at a later stage.

## Things to fix

- Improve error handling
- Add unit tests
- Add ability for the user to favourite a recipe from the landing page
- Add loading modals when navigating

## See it in action

The site has been deployed on Netlify.
If you would like to see the site in action, you can do this by clicking [here] (https://alicias-recipe-app.netlify.app/)