# React Todos Demo

## Getting Started

Install NPM Packages

```sh
npm install
```

Run dev server

```sh
npm run dev
```

## Starting a new project

### Prerequisites

- Make sure you have Node.js v16+ installed
- If using Windows, it's recommended to use GitBash and/or WSL.

### Initial Setup

Create Vite project named anything you want (without spaces), in this case it will be "react-todos":

```sh
npm create vite@latest react-todos
```

Select the following when prompted:

- Select a framework:
  - `React`
- Select a variant:
  - `Typescript`

Then install the required npm packages Vite set up, and start the dev server:

```sh
cd react-todos
npm install
npm run dev
```

### Extra Overrides

The following files were added:

- `.vscode/extensions.json`: Recommends VSCode extensions to use
- `.vscode/settings.json`: Standardizes VSCode settings for the project
- `.prettierrc.cjs`: Additional settings for formatting React code
- `.prettierignore`: Files to ignore when checking React code format

Additional settings were added to:

- `eslint.config.js`: Similar to prettier file, specifies rules for formatting react code

## React Concepts

### Bootstrapping - Writing React with JavaScript

The following code uses pure ES6 javascript and HTML5, no React macros or "magic".

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Jukebox</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

```js
// src/main.js
import { createRoot } from 'react-dom/client'
import { App } from './App.js'

createRoot(document.getElementById('root')!).render(App)
```

```js
// src/App.js
export const App = () => {
  return React.createElement('div', null, 'Hello World')
}
```

Renders:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Jukebox</title>
  </head>
  <body>
    <div id="root">
      <div>Hello World</div>
    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### Components

A component is an independent block on the website that takes a set of inputs, and is in charge of rendering a specific set of elements to the page.

#### How they work

Each of the following code examples are the same, and get increasingly more vanilla.

Functional components, with React JSX syntax:

```jsx
const Example = () => {
  return <div>Lorem Ipsum</div>
}
```

Class components, with React JSX syntax:

```jsx
class Example extends React.Component {
  render() {
    return <div>Lorem Ipsum</div>
  }
}
```

Functional component, without JSX syntax:

```js
const Example = () => {
  return React.createElement('div', null, 'Hello World')
}
```

Html file with pure vanilla JS:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Jukebox</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      var root = document.getElementById('root')
      var Example = document.createElement('div')
      Example.textContent = 'Hello World'

      root.appendChild(Example)
    </script>
  </body>
</html>
```

Ultimately, all of these generate this inside the root element:

```html
<div>Lorem Ipsum</div>
```

### State

The `useState` hook can be used in react to store data in a component, allowing you to change it whenever needed. If you change the value set in `useState`, then it will update everywhere it is used.

Example:

```jsx
export const Example = () => {
  const [message, setMessage] = useState('Hello world')

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage('Changed value')}>Change value</button>
    </div>
  )
}
```

### Effects

The `useEffect` hook in react will call a function whenever a specified value changes.

```jsx
export const Example = (props) => {
  const { someValue } = props

  useEffect(() => {
    console.log('Some value changed!')
  }, [someValue])

  return <div>{someValue}</div>
}
```

In the above example, `someValue` was passed to the component as a "prop", or essentially an input. This value is expected to change somewhere else in the application, and when it does it will trigger the `useEffect` hook since it was provided in the list provided to `useEffect`.

### Context

Context allows you to access state in multiple nested components. An example can be seen in `src/App.tsx`.
