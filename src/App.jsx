import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { v4 as uuidv4 } from "uuid";
import { GiCheckMark } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setsShowfinished] = useState(false);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setsShowfinished(!showFinished);
  };

  const handleAdd = () => {
    if (todo.length !== 0) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
      saveToLs();
    }
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLs();
  };

  const handleDelete = (e, id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      let newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
      saveToLs();
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLs();
  };

  return (
    <>
      <Navbar />
      <div className=" mx-4 md:container rounded-xl p-5 md:mx-auto my-8 bg-teal-100 md:w-1/2 min-h-[80vh]">
        <h1 className="font-bold text-lg text-center">
          Mr-Todo:- A better way to manage your todos
        </h1>
        <h2 className="text-lg font-bold">Add a Todo</h2>
        <div className="addTodo flex my-4">
          <RiTodoFill className="mx-2 h-8 w-8" />
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            className="w-full rounded-lg py-1 px-4"
          />
          <button
            onClick={handleAdd}
            className="bg-teal-800 hover:bg-teal-900 text-white rounded-lg mx-4 p-3 py-1 text-sm font-bold"
          >
            <GiCheckMark />
          </button>
        </div>
        <input
          className="my-4"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        Show Finished
        <h2 className="text-lg font-bold">My Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-4">No Todos To Display</div>}

          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex justify-between md:w-3/4 my-3"
                >
                  <div className="flex gap-5">
                    <input
                      onChange={handleCheckbox}
                      name={item.id}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="Buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-teal-800 hover:bg-teal-900 text-white rounded-lg h-8 mx-2 p-3 py-2 text-sm font-bold"
                    >
                      <CiEdit className="font-extrabold text-lg" />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-lg h-8 mx-2 p-3 py-2 text-sm font-bold"
                    >
                      <MdDeleteForever className="font-extrabold text-lg" />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
