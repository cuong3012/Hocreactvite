import { Space, Table, Tag } from 'antd';


const UserTable = (props) => {
    const { dataUsers } = props;



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







    return (
        <Table columns={columns}
            dataSource={dataUsers}
            rowKey={"_id"}
        />
    )

}
export default UserTable;