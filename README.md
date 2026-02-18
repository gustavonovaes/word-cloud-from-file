# Word Cloud from File

A web application for generating interactive word clouds from text files.

## Features

- Upload files containing text data
- Generate interactive word clouds
- State management with Zustand
- Form validation with React Hook Form and Zod
- Feature-based architecture

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **State Management:** Zustand
- **Routing:** React Router
- **Form Handling:** React Hook Form with Zod validation
- **Word Cloud Library:** @cp949/react-wordcloud

## Local Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd word-cloud-from-csv
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Build for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deploy

The project includes a deploy script using Surge:

```bash
npm run deploy
```

This will build the project and deploy it to `word-cloud-from-file.surge.sh`.

## License

This project is licensed under the MIT License.
