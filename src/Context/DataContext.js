import React, { createContext, useState, useContext } from 'react';

// Create the TodoContext
const TodoContext = createContext();

// Create a custom hook to access the TodoContext
export function useTodoContext() {
  return useContext(TodoContext);
}

// Create the TodoProvider component to wrap the app with the context
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  // Add Todo function
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Toggle Todo completion status function
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove Todo function
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // The value that will be provided by the TodoContext
  const value = {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
