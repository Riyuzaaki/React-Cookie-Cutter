# {{ cookiecutter.project_name }}

{{ cookiecutter.project_description }}

## Features

- ⚡️ [React](https://reactjs.org) - A JavaScript library for building user interfaces
- 🔥 [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
{% if cookiecutter.use_typescript == "yes" %}- 📦 [TypeScript](https://www.typescriptlang.org) - JavaScript with syntax for types{% endif %}
{% if cookiecutter.use_router == "yes" %}- 🛣️ [React Router](https://reactrouter.com) - Declarative routing for React{% endif %}
{% if cookiecutter.use_tailwind == "yes" %}- 🎨 [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework{% endif %}
- 📏 [ESLint](https://eslint.org) - Pluggable JavaScript linter
- 💅 [Prettier](https://prettier.io) - Code formatter

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── App.tsx        # Main App component
  ├── main.tsx       # Entry point
  └── index.css      # Global styles
```

## Author

- **{{ cookiecutter.author_name }}** - [{{ cookiecutter.github_username }}](https://github.com/{{ cookiecutter.github_username }})
- Email: {{ cookiecutter.author_email }}

## License

This project is licensed under the {{ cookiecutter.license }} License - see the [LICENSE](LICENSE) file for details. 