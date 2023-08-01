import React from "react";
import { useTodo } from "../Context/DataContext";
import Todo from "./Todo";

export default function Todolist() {
    const { todos } = useTodo();

    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    );
}
