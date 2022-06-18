import TodoItem from "./TodoItem";
import { memo } from "react";
import {useSite} from "../context/SiteContext";

function Todos({ todos, deleteTodo }) {
  const { theme } = useSite();

  return (
    <>
      <h3>Tema = {theme}</h3>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            index={index}
            key={index}
          />
        ))}
      </ul>
    </>
  );
}

export default memo(Todos);
