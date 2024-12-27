import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'


// ()=>{}
const App = () => {

  const name = "Real";
  const age = 40;
  const data = {
    address: "HCM",
    country: "VN"
  };

  //truyen function
  const addNewTodo = (name) => {
    alert(` Call me ${name} `)
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

      />
      <div className='todo-image'></div>

      <img src={reactLogo} />

    </div>
  )
}

export default App
