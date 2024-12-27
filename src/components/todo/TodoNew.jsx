const TodoNew = (props) => {
    console.log("check props >>>", props)

    const { addNewTodo } = props;

    //addNewTodo("ABC");

    const handleClick = () => {
        alert("Click")
    }

    const handleChange = (name) => {
        console.log(">>>> handle On Change", name)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleChange(event.target.value)}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    );
}
export default TodoNew;