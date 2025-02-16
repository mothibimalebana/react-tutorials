import { Outlet } from "react-router-dom"

const Profile = () => {
    return(
        <>
        <div>
            <h1>Profile Page</h1>
            <p>So, how are you?</p>
        </div>
        <Outlet/>
        </>
    )
}

export default Profile