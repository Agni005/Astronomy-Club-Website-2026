import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
function App() {

  return (
    <>
    
        <Router>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/projects" element = {<Projects/>}/>
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </Router>
       
    
    </>
  )
}

export default App;