import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { updateUserAPI } from "../../services/api.service";
const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [_id, setId] = useState("");
    const [phone, setPhone] = useState("");

    console.log("Chech prop>>>>", props)

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        console.log("Check dataUpdate props>>> ", dataUpdate)
        if (dataUpdate) {
            setFullName(dataUpdate.fullName)
            setId(dataUpdate._id)
            setPhone(dataUpdate.phone)
        }


    }, [dataUpdate])

    // const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(true)



    const handleSubmitBtn = async () => {

        // alert("click me");

        const res = await updateUserAPI(_id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Update user thanh cong Hiểu và Làm Chủ"

            })

            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error Update user",
                // description: "Taoj user khong thanh cong Hiểu và Làm Chủ"
                description: JSON.stringify(res.message)
            })
        }
    }


    const resetAndCloseModal = () => {

        setIsModalUpdateOpen(false);
        setFullName("");
        setId("");
        setPhone("");
        setDataUpdate(null);

    }


    return (
        <Modal title="Update User"
            open={isModalUpdateOpen}
            onOk={() => { handleSubmitBtn() }}
            onCancel={() => { resetAndCloseModal() }}
            maskClosable={false}
            okText={"Save"}
        >
            <div>
                <span> ID </span>
                <Input
                    value={_id}
                    disabled
                />
            </div>

            <div>
                <span> Full Name</span>
                <Input
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value) }}
                />
            </div>


            <div>
                <span> Phone number</span>
                <Input
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }}
                />
            </div>
        </Modal>


    )

}

export default UpdateUserModal