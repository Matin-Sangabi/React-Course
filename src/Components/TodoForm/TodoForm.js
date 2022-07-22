import { useEffect, useRef, useState } from "react";
import Style from "./totoForm.module.css";
import { IoAddSharp } from "react-icons/io5";
const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");
   const inputRef = useRef(null);
  const changeHandlers = (e) => {
    setTodo(e.target.value);
  };
  useEffect(()=>{
    inputRef.current.focus();
  } , [todo])

  const submitHandlers = (e) => {
    e.preventDefault();
    // Add entered todo to todo's
    if (!todo) return;
    props.addTodoHandlers(todo);
    setTodo("");
  };
  return (
    <form onSubmit={submitHandlers} className={Style.TodoForm}>
      <input
            type="text"
            placeholder={props.edit ? "Update todo's ..." : "Add new Todo's"}
            value={todo}
            onChange={changeHandlers}
            className={Style.formInput}
            ref={inputRef}
          />
          <button type="submit" className={Style.formSubmit}>
            {props.edit ? "Edit" : IoAddSharp()}
          </button>
    </form>
  );
};

export default TodoForm;
