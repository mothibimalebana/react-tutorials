import { Link } from "react-router-dom"

const Spinach = () => {
    return(
        <div>
            <h1>Hi, I am Spinach</h1>
            <p>Please hide me from popeye</p>
            <Link to='/'>Click here to go back</Link>
        </div>
    )
}

export default Spinach