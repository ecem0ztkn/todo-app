import { useReducer, useState, useCallback, useMemo } from "react";
import todoReducers from "./reducers/todo-reducer";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function TodoApp() {
  // const [todos, setTodos] = useState([])
  // const [todo, setTodo] = useState("")

  const [state, dispatch] = useReducer(todoReducers, {
    todos: ["todo1", "todo2"],
    todo: "",
    search: "",
  });

  const submitHandle = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
    // setTodos(todos => [...todos, todo]);
    // setTodo('')
  });

  const changeHandle = useCallback((e) => {
    // setTodo(e.target.value);
    dispatch({
      type: "UPDATE_TODO",
      value: e.target.value,
    });
  }, []);

  const deleteTodo = useCallback((index) => {
    dispatch({
      type: "DELETE_TODO",
      index,
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: "SEARCH_TODO",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.search, state.todos]);

  console.log(filteredTodos);

  return (
    <>
      <Header />
      <input
        type="text"
        placeholder="Todolarda ara"
        onChange={searchHandle}
        value={state.search}
      />
      <AddTodo
        todo={state.todo}
        submitHandle={submitHandle}
        changeHandle={changeHandle}
      />
      <Todos todos={filteredTodos} deleteTodo={deleteTodo} />
    </>
  );
}

export default TodoApp;
