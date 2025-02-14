import { Outlet, useParams } from "react-router-dom"
import Popeye from "../Popeye/Popeye";
import Spinach from "../Spinach/Spinach";
import Default from "../Default/Default";

const Profile = () => {
    const {name} = useParams();
    return(
        <div>
            <h1>Hello there!</h1>
            <p>How are you?</p>
            <h2>The profile visited is here</h2>
            {
                name === 'popeye' ? (
                    <Popeye/>
                ) : name === 'spinach' ? (
                    <Spinach/>
                ) : (
                    <Default/>
                )
            }
        </div>
    )
}

export default Profile