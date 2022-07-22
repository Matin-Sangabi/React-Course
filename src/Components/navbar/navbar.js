

const Navbar = ({ todo }) => {
  const filterTodo = todo.filter((todo) => !todo.isCompleted).length;
  return (
    <header className="header">
      <div className="navbar-container">
        <h1>todoList App</h1>
        <p className="todoCounter">unComplete todo's : <span className="todoUn"> {filterTodo}</span></p>
      </div>
    </header>
  );
};

export default Navbar;
