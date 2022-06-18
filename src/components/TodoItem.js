import { memo} from "react";

function TodoItem({deleteTodo, todo, index}){
    return(
        <li onClick={() => deleteTodo(index)} key={index}>{todo}</li>
    )
}
export default memo(TodoItem)