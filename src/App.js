
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';

function App() {

  // Initialize todos from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Delete a todo
  const ondelete = (sno) => {
    console.log("I am ondelete of todo", sno);

    setTodos(todos.filter((e) => {
      return e.sno !== sno;
    }));
  };

  // Add a todo
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno;

    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]);

    console.log(myTodo);
  };

  return (
    <>
      <Header title="My Todos List" searchBar={true} />

      <AddTodo addTodo={addTodo} />

      <Todos todos={todos} ondelete={ondelete} />

      <Footer />
    </>
  );
}

export default App;
