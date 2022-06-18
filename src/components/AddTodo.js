import { memo} from "react";

function AddTodo({submitHandle , todo, changeHandle}){
    return(
        <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={changeHandle} />
        <button disabled={!todo} type="submit">
          Ekle
        </button>
      </form>
    )

}

export default memo(AddTodo);