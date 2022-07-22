import { useEffect, useState } from "react";
import FilterTodo from "../FilterTodo/FilterTodo";
import Navbar from "../navbar/navbar";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  //state => todos ?
  const [todos, setTodods] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [selectOption , setSelectOption] = useState("All");


  useEffect(()=>{
    selectFilter(selectOption);
  } ,[todos , selectOption])
  
  const addTodoHandlers = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodods([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[index] };
    // not is complete => if true => false and upside down
    todo.isCompleted = !todo.isCompleted;
    const todoS = [...todos];
    todoS[index] = todo;
    setTodods(todoS);
  };
  const removeTodo = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodods(filterTodos);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectTodo = { ...todos[index] };
    selectTodo.text = newValue;
    const updateTodos = [...todos];
    updateTodos[index] = selectTodo;
    setTodods(updateTodos);
  };

  const selectFilter = (e) => {
    switch (e) {
      case "Completed": {
        const filterTodo = todos.filter((todo) => todo.isCompleted);
        return setFilterTodos(filterTodo);
      }
      case "Uncompleted": {
        const filterTodo = todos.filter((todo) => !todo.isCompleted);
        return setFilterTodos(filterTodo)
      }
      default:
        return setFilterTodos(todos);
    }
  };

  return (
    <div>
      <Navbar todo={todos} />
      <div className="container">
        <FilterTodo onSelect={selectFilter} status = {selectOption} setStatus = {setSelectOption}/>
        <TodoForm addTodoHandlers={addTodoHandlers} />
        <TodoList
          todo={filterTodos}
          onComplete={completeTodo}
          onRemove={removeTodo}
          onUpdate={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;

//? select option => filter component => 1.react select 2.All , unCompleted , completed =>
