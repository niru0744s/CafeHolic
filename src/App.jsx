import Blogs from './components/Blogs'
import Navbar from './components/boilerPlate/Navbar'
import Footer from './components/boilerPlate/Footer'
import Hero from './components/heroSection/Hero'
import Menu from './components/Menu'
import SectionGroup from './components/SectionGroup'
import OnlineOrderSection from './components/OnlineOrderSection'
import CoffeeVarietiesSection from './components/CoffeeVarietiesSection'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SectionGroup/>
      <Menu />
      <CoffeeVarietiesSection/>
      <OnlineOrderSection/>
      <ContactSection/>
      <Footer />
    </>
  )
}

export default App
