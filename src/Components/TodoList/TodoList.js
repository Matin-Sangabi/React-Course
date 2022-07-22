import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import Style from "./todoList.module.css";
const TodoList = ({ todo, onComplete, onRemove , onUpdate }) => {

  const [edit ,  setEdit] = useState({id : null , text : "" , isCompleted : false});
  const submitHandlers = (newValue)=>{
    console.log(newValue)
    onUpdate(edit.id , newValue);
    setEdit({id:null , text : ""});
  }

  const renderTodo = () =>{
  if (todo.length === 0) return <p>Add Some Task's</p>;
    return (<div className={Style.TodoList}>
      {todo.map((item, index) => {
        return (
          <Todo
            item={item}
            key={index}
            onComplete={() => onComplete(item.id)}
            onRemove={() => onRemove(item.id)}
            onEdit = { ()=> setEdit(item)}
          />
        );
      })}
    </div>)
  }

  return (edit.id ? <TodoForm addTodoHandlers={submitHandlers} edit={edit}/> : renderTodo());
};

export default TodoList;
