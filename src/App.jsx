import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'


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
      <div className="todo-container">
        <div className="todo-title"> Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo} //truyen function khong co () 
        />



        {todoList.length > 0 ?
          <>
            <TodoData
              todoList={todoList}
              deleteTodo={deleteTodo}

            />
          </>
          :
          <>
            <div className='todo-image'>

              <img src={reactLogo} />
            </div>

          </>





        }



        {/* {todoList.length > 0 &&
        <>
          <TodoData
            todoList={todoList}

          />
        </>

      }

      {todoList.length === 0 &&
        <div className='todo-image'>

          <img src={reactLogo} />
        </div>
      } */}

      </div>
      <Footer />
    </>

  )
}

export default App
