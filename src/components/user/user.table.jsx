import { Table, Popconfirm, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';

import { deleteUserAPI } from '../../services/api.service';


const UserTable = (props) => {
    const { dataUsers, loadUser } = props;

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [dataDetailOpen, setDataDetailOpen] = useState(null);

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id)
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xoa user thanh cong Hiểu và Làm Chủ"

            })

            await loadUser();
        }
        else {
            notification.error({
                message: "Error Delete user",
                // description: "Taoj user khong thanh cong Hiểu và Làm Chủ"
                description: JSON.stringify(res.message)
            })
        }


    }





    //Dat ten cot
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href='#'
                            onClick={() => {
                                setIsDetailOpen(true)
                                setDataDetailOpen(record)
                            }}>
                            {record._id}
                        </a>
                    </>
                )

            }

        },
        {
            title: 'Full Name Thiết',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                            style={{ cursor: "pointer", color: "orange" }} />


                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => { handleDeleteUser(record._id) }}

                            okText="Yes"
                            cancelText="No"
                            placement='left'
                        >
                            <DeleteOutlined
                                onClick={() => {

                                }}
                                style={{ cursor: "pointer", color: "red" }} />
                        </Popconfirm>



                    </div>
                )

            }

        }

    ];






    console.log("Check dataUpdate>>>>>>>>", dataUpdate)
    return (
        <>

            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />

            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                dataDetailOpen={dataDetailOpen}
                setDataDetailOpen={setDataDetailOpen}
                loadUser={loadUser}
            />





        </>
    )

}
export default UserTable;