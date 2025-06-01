# WebLLM Chat Interface

A modern React web application for chatting with a local Large Language Model (LLM) in your browser using [@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm). Built with Vite for fast development and production builds.

## Features
- Chat interface to interact with an LLM directly in your browser
- Powered by [@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm)
- Modern, responsive UI with React hooks
- Fast development with Vite and hot module replacement (HMR)
- Code quality enforced with ESLint

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
```powershell
# Clone the repository (if needed)
# git clone <repo-url>
cd webllm

# Install dependencies
npm install
```

### Running the App in Development
```powershell
npm run dev
```
Visit the local URL shown in the terminal (usually http://localhost:5173).

### Building for Production
```powershell
npm run build
```

### Previewing Production Build
```powershell
npm run preview
```

### Linting
```powershell
npm run lint
```

## Project Structure
```
webllm/
├── public/           # Static assets
├── src/              # Source code
│   ├── App.jsx       # Main React component
│   ├── main.jsx      # Entry point
│   ├── app.css       # Styles
│   └── ...
├── index.html        # HTML template
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── ...
```

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm)
- [ESLint](https://eslint.org/)

## License
This project is for educational and demonstration purposes.

## Credits
- [MLC AI WebLLM](https://github.com/mlc-ai/web-llm)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
