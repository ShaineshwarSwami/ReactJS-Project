import React from 'react'
import Navbar from './NavBar/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Router>
            <Routes>
                 <Route path="/" element={<Navbar/>}/>
            </Routes>
       </Router>
    </div>
  )
}

export default App
