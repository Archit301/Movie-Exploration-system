import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Route,Routes,  Navigate} from 'react-router-dom'
import { Home } from './component/Home/Home'
import MovieDetail from './component/Home/MovieDetail'
import Discover from './component/Discover/Discover'
import DiscoverPage from './component/Discover/DiscoverPage'
import Community from './component/Community/Community'
import Signup from './component/Auth/SignUp'
import Login from './component/Auth/Login'
import { Navbar } from './component/Home/Navbar'
import TopPicks from './component/Toppicks/TopPicks'
import MyCollection from './Mycollection/MyCollection'

function App() {
  const [count, setCount] = useState()
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setCurrentUser(user.username);
    }
  }, []);

  return (
    <>
    <Router>
      <div>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path='/top-picks' element={<TopPicks/>}  />
          <Route path='/my-collection' element={<MyCollection/>}  />
          <Route 
            path="/community" 
            element={currentUser ? <Community currentUser={currentUser} /> : <Navigate to="/login" />} 
          />
          {/* Add routes for other components like Discover, Genres, etc. */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
