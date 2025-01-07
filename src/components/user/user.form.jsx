import { Button, Descriptions, Input, message, Modal, notification } from "antd";
import { useState } from "react";
import axios from "axios";
import { creteUserAPI } from "../../services/api.service";
const UserForm = (props) => {
    const { loadUser } = props

    const [fullName, setFullName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleSubmitBtn = async () => {

        // alert("click me");

        const res = await creteUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Taoj user thanh cong Hiểu và Làm Chủ"

            })

            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error Create user",
                // description: "Taoj user khong thanh cong Hiểu và Làm Chủ"
                description: JSON.stringify(res.message)
            })
        }
    }


    const resetAndCloseModal = () => {

        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");

    }
    return (
        <>
            <div className="user-form" style={{ margin: "20px 0" }}>
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3>Table Users</h3>
                        <Button type="primary"
                            onClick={() => { setIsModalOpen(true) }}
                        >Create User</Button>
                    </div>


                </div>

            </div>

            <Modal title="Basic Modal"
                open={isModalOpen}
                onOk={() => { handleSubmitBtn() }}
                onCancel={() => { resetAndCloseModal() }}
                maskClosable={false}
                okText={"Create"}
            >

                <div>
                    <span> Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span> Email </span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span> Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span> Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </Modal>

        </>
    )
}
export default UserForm;