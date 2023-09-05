import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import Navbar from './commons/Navbar'
import PageNotFound from './PageNotFound'
import CoursePage from './courses/CoursePage'

function App() {

  return (
    <>
      <div className='container-fluid'>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' Component={HomePage}/>
            <Route path='/about' Component={AboutPage}/>
            <Route path='/courses' Component={CoursePage}/>
            <Route Component={PageNotFound} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
