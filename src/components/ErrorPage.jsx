import { Link } from "react-router-dom"
const ErrorPage = () => {
    return (
        <>
        <div>
            <h1>Oopss..</h1>
            <p>the profile you are looking for does not exitst, yet</p>
            <Link to='/'>Go back to the main page</Link>
        </div>
        </>
    )
}

export default ErrorPage