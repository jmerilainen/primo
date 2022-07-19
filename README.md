<div align="center">
    <br/>
    <h1>Primo 🌤</h1>
    <i>The start</i>
    <br/>
</div>

<br/>
<br/>

Primo is a one-view starting page for the browsers. It shows the weather for the next 12 hours.
With a few themes available you can match the colors by your preferences.

Primo is heavily inspired by an actual Chrome extension that I used many years ago.
Unfortunately, I can't remember the exact name nor find it from Chrome Store to give
full credits.

<br/>
<br/>

<div align="center">
    <img src="./docs/primo.jpg" alt="Example view of the app" />
</div>

<br/>

<div align="center">
    Demo: <a href="https://getprimo.vercel.app">getprimo.now.sh</a>
</div>

<br/>
<br/>

## About

This is an example React project built from scratch including a robust development
enviroment and with minimal production dependencies.

## Usage

Primo uses the browser's geolocation to get your current position to fetch weather forecasts
for the location. If you don't allow location Primo will only show the current time.

From the top right, you can switch themes. Selection will be saved to local storage.

## Quickstart with Docker

To get project running locally with Docker, run

```sh
yarn docker:serve

# alias for "docker-compose -f docker-compose.local.yml up"
```

Open [http://localhost:5000](http://localhost:5000)

## Requirements

-   node.js `14.x`
-   yarn

## Development

1. Install dependecies

    ```sh
    yarn install
    ```

2. Start development server with watch mode

    ```sh
    yarn dev
    ```

3. Start coding

## Testing

### Unit

For unit tests the project uses Jest. Tests are in `src` directory among other
source files prefixed with `*.test.(ts|tsx)`.

To run unit tests run command

```sh
yarn test
```

### E2E

Project uses the Cypress for End-to-End (E2E) tests. Tests are in `cypress/integartion` directory.

To run e2e tests, run command

```sh
yarn test:e2e
```

### Type checks

Project uses TypeScript.

To run type checking across the whole project, run command

```sh
yarn typecheck
```

### Linting

Project uses ESLint for linting TypeScript. That is configured in `.eslintrc.js`.

To run linting, run command

```sh
yarn lint:js
```

For the styles, Stylelint is in use. That is configured in `.stylelintrc.json`.

To run linting, run command

```sh
yarn lint:css
```

> Altough it is recommended to use Tailwind CSS for styling there might be a cases when custom css is required to write. [Prettier](#Formatting) will handle Tailwind's class sorting.

To run both linting with auto fix, run

```sh
yarn lint
```

### Formatting

[Prettier](https://prettier.io/) is used for auto-formatting. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save.

To run formating, run command

```sh
yarn format
```

### Accessibility (a11y)

ESlint is used for identifying accessibility issues in JSX.

Axe is used for React application accessibility testing. Results will show in the
DevTools console (works best in Chrome, limited in Safari and Firefox). E2E tests
will also run Axe tests automatically and will error on violations.

Rest of the accessibility testing is done manually. The `WCAG 2.0 Level AA`
should be achieved.

## Deployment

Project is hosted in [Vercel](https://vercel.com).

The `main` branch will be automatically deployed to production.
