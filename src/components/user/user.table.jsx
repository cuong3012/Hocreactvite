import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/api.service';
const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);
    useEffect(() => {
        console.log("RUN RENDER >>>>>>>>>>> 11111...");
        loadUser();
    }, []);



    //Dat ten cot
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',

        },
        {
            title: 'Full Name Thiết',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        }

    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }



    console.log(">>> run render 000000")

    return (
        <Table columns={columns}
            dataSource={dataUsers}
            rowKey={"_id"}
        />
    )

}
export default UserTable;