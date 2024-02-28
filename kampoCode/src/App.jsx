import Nav from './Component/Nav'
import './App.css'
import EduSystem from './Component/EduSystem'
import Courses from './Component/Courses'
import Events from './Component/Events'
import Footer from './Component/Footer'


function App() {


  return (
    <>
      <Nav/>
       {/* <h1>Welcome to Kampo Code</h1> */}
      <EduSystem/>
      <Courses/>
      <Events/>
      <Footer/>
    </>
  )
}

export default App
