
# Todo App

This project is a simple Todo application built with React. It allows users to add, edit, delete, and mark tasks as completed. The application also persists the todo list in the browser's local storage, so tasks are saved even when the browser is closed or refreshed.

## Features

- **Add Todos:** Users can add new tasks to their todo list.
- **Edit Todos:** Users can edit existing tasks.
- **Delete Todos:** Users can delete tasks.
- **Mark as Completed:** Users can mark tasks as completed or uncompleted.
- **Show/Hide Completed Todos:** Users can toggle the visibility of completed tasks.
- **Local Storage:** The todo list is saved in the browser's local storage.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### `App.jsx`

The main component that handles the state and logic of the application. It includes:

- **State Management:** Uses `useState` to manage the list of todos and the input value for new todos.
- **Side Effects:** Uses `useEffect` to load todos from local storage when the component mounts.
- **Event Handlers:** Handles adding, editing, deleting, and marking todos as completed.

### `Navbar.jsx`

A simple navigation bar component included in the application.

## Dependencies

- **React:** A JavaScript library for building user interfaces.
- **UUID:** For generating unique identifiers for todos.
- **React Icons:** For adding icons to buttons.
  
## Authors

- [@raiyan-fr](https://www.github.com/raiyan-fr)


## License

This project is licensed under the MIT License.
