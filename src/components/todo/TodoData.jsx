const TodoData = (props) => {

    const { todoList } = props; //destructure

    //truyen function



    console.log("Check props>>>>>", props);

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>
                            {item.name}
                        </div>
                        <div>
                            <button>Delete</button>
                        </div>

                    </div>
                )
            }
            )}




            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    );
}
export default TodoData;