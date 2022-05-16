import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;
  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };
  return (
    <div className="todo">
      <ul>
        {todos.map((todo) => (
          <li onClick={() => handleClick(todo)} key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
