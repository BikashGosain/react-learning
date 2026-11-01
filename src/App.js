import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const ondelete = (sno) => {
    console.log("I am ondelete of todo", sno);

    setTodos(todos.filter((e) => {
      return e.sno !== sno;
    }));
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy stuff"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy stuff"
    },
    {
      sno: 3,
      title: "Go to the school",
      desc: "You need to go to the school to buy stuff"
    }
  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos todos={todos} ondelete={ondelete}/>
      <Footer/>
    </>
  );
}

export default App;
