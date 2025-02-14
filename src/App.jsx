import { Link } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <>
    <div>
      <h1>Hello there from the main page of the app</h1>
      <p>Here is a list of the pages available</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default App
