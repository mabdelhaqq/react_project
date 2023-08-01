import React from 'react';
import { useTodoContext } from './TodoContext';

const Todo = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default Todo;
