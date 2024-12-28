

import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'


// ()=>{}
const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" }
  ])

  const name = "Real";
  const age = 40;
  const data = {
    address: "HCM",
    country: "VN"
  };

  //truyen function
  const addNewTodo = (name) => {

    const newTodo = {
      id: randomIntFromInterval(1, 10000),
      name: name
    }

    setTodoList([...todoList, newTodo])
    // alert(` Call me ${name} `)
  }


  const deleteTodo = (id) => {



    const newTodo = todoList.filter(item => item.id !== id)
    console.log(">>>> Show Click delete ID", newTodo);
    setTodoList(newTodo);


  }
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>

  )
}

export default App
