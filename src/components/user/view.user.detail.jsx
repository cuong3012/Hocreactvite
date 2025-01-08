import { Drawer } from 'antd';

const ViewUserDetail = (props) => {

    const { isDetailOpen, setIsDetailOpen, dataDetailOpen, setDataDetailOpen } = props


    console.log("Show props ShowData >>>", dataDetailOpen)
    return (
        <>
            <Drawer title="Chi Tiet User"
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