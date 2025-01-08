import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';
const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);
    useEffect(() => {
        console.log("RUN RENDER >>>>>>>>>>> 11111...");
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }


    return (
        <div>User  Pages

            <div style={{ padding: "20px" }}>
                <UserForm loadUser={loadUser} />
                <UserTable
                    dataUsers={dataUsers}
                    loadUser={loadUser}
                />
            </div>
        </div>
    )
}

export default UserPage;