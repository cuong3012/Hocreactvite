import { Button, Drawer } from 'antd';

const ViewUserDetail = (props) => {

    const { isDetailOpen, setIsDetailOpen, dataDetailOpen, setDataDetailOpen } = props


    console.log("Show props ShowData >>>", dataDetailOpen)
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
                    <div>
                        <img height={100}
                            width={150}
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
                        <input type='file' hidden id='btnUpload' />
                    </div>
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