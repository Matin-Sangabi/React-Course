import Style from "./Todo.module.css";
import { VscEdit } from "react-icons/vsc";
import { IoTrash, IoCheckbox } from "react-icons/io5";
const Todo = ({ item, onComplete, onEdit, onRemove }) => {
  return (
    <div
      className={
        item.isCompleted
          ? `${Style.todoCom} ${Style.todoList}`
          : `${Style.todoList}`
      }
    >
      <div className={item.isCompleted ? `${Style.complete} ${Style.text}` : `${Style.text}`}>
        {item.text}
      </div>
      <div className={Style.handlers}>
        <button onClick={onEdit} className={Style.edit}>
          {VscEdit()}
        </button>
        <button
          onClick={onComplete}
          className={
            item.isCompleted
              ? `${Style.onChecked} ${Style.checked}`
              : `${Style.checked}`
          }
        >
          {IoCheckbox()}
        </button>
        <button
          onClick={onRemove}
          className={`${Style.checked} ${Style.delete}`}
        >
          {IoTrash()}
        </button>
      </div>
    </div>
  );
};

export default Todo;
