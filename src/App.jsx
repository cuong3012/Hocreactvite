import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


// ()=>{}
const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
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
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <div className="todo-container">
      <div className="todo-title"> Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo} //truyen function khong co () 
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}

      />
      <div className='todo-image'></div>

      <img src={reactLogo} />

    </div>
  )
}

export default App
