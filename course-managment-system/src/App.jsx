import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import Navbar from './commons/Navbar'

function App() {

  return (
    <>
      <div className='container-fluid'>
        <Navbar/>
        <Router>
          <Route path='/' Component={HomePage}/>
          <Route path='/about' Component={AboutPage}/>
        </Router>
      </div>
    </>
  )
}

export default App
