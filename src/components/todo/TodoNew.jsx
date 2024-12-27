import { useState } from "react";

const TodoNew = (props) => {
    //const valueInput = "vinh"

    const [valueInput, setValueInput] = useState("cuong")

    const { addNewTodo } = props;

    //addNewTodo("ABC");

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleChange = (name) => {
        console.log(">>>> handle On Change", name)
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleChange(event.target.value)}
                value={valueInput}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div> may value is {valueInput}</div>
        </div>
    );
}
export default TodoNew;