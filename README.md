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

- `.vscode/extensions.json`
- `.vscode/settings.json`
- `.prettierignore`
- `.prettierrc.cjs`

Additional settings were added to:

- `eslint.config.js`
