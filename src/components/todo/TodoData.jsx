const TodoData = (props) => {

    const { name, age, data } = props; //destructure

    //truyen function



    console.log("Check props>>>>>", props);

    return (
        <div className='todo-data'>
            <div>my name is {name}</div>


            <div> Learn react</div>
            <div> Watch youtube</div>

            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    );
}
export default TodoData;