// import { useState } from "react";
import "./App.scss";
import AddTodoList from "./compoments/AddTodoList";
// import ColorBox from "./compoments/ColorBox";
// import TodoList from "./compoments/TodoList";

function App() {
  // const arr = [
  //   {
  //     id: 1,
  //     title: "Nấu cơm",
  //   },
  //   {
  //     id: 2,
  //     title: "Quét nhà",
  //   },
  //   {
  //     id: 3,
  //     title: "Rửa chén",
  //   },
  // ];
  // const [todoList, setTodoList] = useState(arr);
  // const handleTodoClick = (todo) => {
  //   console.log(todo);
  //   let index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) {
  //     return;
  //   } else {
  //     const newTodoList = [...todoList];
  //     newTodoList.splice(index, 1);
  //     setTodoList(newTodoList);
  //   }
  // };
  return (
    <div className="app">
      {/* <ColorBox /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <AddTodoList />
    </div>
  );
}

export default App;
