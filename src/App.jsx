import './App.css'
import Blogs from './components/Blogs'
import Navbar from './components/boilerPlate/Navbar'
import Footer from './components/Footer'
import Hero from './components/heroSection/Hero'
import Menu from './components/Menu'
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <WhyChooseUs/>
      <Menu/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App
