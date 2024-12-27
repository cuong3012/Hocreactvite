const TodoData = (props) => {

    //const [idDelete, setIdeDelete] = useState("")

    const { todoList, deleteTodo } = props; //destructure

    const handleDeleteClick = (id) => {
        console.log(">>>> Show Click delete ID", id)
        deleteTodo(id)
    }



    console.log("Check props>>>>>", props);

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            <button
                                onClick={(event) => handleDeleteClick(item.id)} //tham so dau vao
                            >Delete</button>
                        </div>

                    </div>
                )
            }
            )}





        </div>
    );
}
export default TodoData;