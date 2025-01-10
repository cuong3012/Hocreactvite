import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";
const ViewUserDetail = (props) => {

    const { isDetailOpen, setIsDetailOpen, dataDetailOpen, setDataDetailOpen, loadUser } = props


    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnChangeFile = (event) => {



        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return

        }
        const file = event.target.files[0]

        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }


    }

    const handleUpdateUserAvatar = async () => {
        //step1: upload file

        const resUpload = await handleUploadFile(selectedFile, "avatar")
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            console.log("Check newAvatar", newAvatar)

            //step 2: update user

            const resUpdateAvatar = await updateUserAvatarAPI(newAvatar, dataDetailOpen._id, dataDetailOpen.fullName, dataDetailOpen.phone);
            if (resUpdateAvatar.data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();


                notification.success({
                    message: "Updated User Avatar",
                    description: "Cap nhap thanh cong"
                })
            } else {
                notification.error({
                    message: "Error updated avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
        }
        else {
            //failed
            notification.error({
                message: "Error upload file",
                description: JSON.stringify(resUpload.message)
            })
        }
    }
    return (
        <>
            <Drawer
                width={"40vw"}
                title="Chi Tiet User"
                onClose={() => {
                    setIsDetailOpen(false)
                    setDataDetailOpen(null)
                }}
                open={isDetailOpen}>

                {dataDetailOpen ? <>
                    <p>id: {dataDetailOpen._id} </p>
                    <p>Full name: {dataDetailOpen.fullName} </p>
                    <p>Email: {dataDetailOpen.email} </p>
                    <p>Phone number: {dataDetailOpen.phone} </p>
                    <p>avatar</p>
                    <div style={{
                        marginTop: "10px",
                        height: "100px", width: "150px",
                        border: "1px solid #ccc"
                    }}>
                        <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetailOpen.avatar}`} ></img>
                    </div>
                    <div>
                        <label htmlFor='btnUpload' style={{
                            display: "block",
                            width: "fit-content",
                            marginTop: "15px",
                            padding: "5px 10px",
                            background: "orange",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            Upload Avatar
                        </label>
                        <input type='file' hidden id='btnUpload'
                            // onChange={handleOnChangeFile}
                            onChange={(event) => handleOnChangeFile(event)}
                        />
                    </div>
                    {preview &&
                        <>


                            <div style={{
                                marginTop: "10px",
                                height: "100px", width: "150px",
                                border: "1px solid #ccc"
                            }}>
                                <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                    src={preview} ></img>
                            </div>
                            <Button type='primary'
                                onClick={() => { handleUpdateUserAvatar() }}
                            >Save</Button>
                        </>
                    }
                </>

                    :
                    <>
                        <div  >

                            Khoong co con me gi ca
                        </div>

                    </>





                }



            </Drawer>
        </>

    )
}
export default ViewUserDetail;