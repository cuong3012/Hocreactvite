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

  return (
    <div className="todo-container">
      <div className="todo-title"> Todo List</div>
      <TodoNew></TodoNew>
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
