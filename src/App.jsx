import { useState } from 'react'
import Navbar from './component/navbar'
import Hero from './component/hero'
import About from './component/about'
import Spacer from './component/spacer'
import Gallery from './component/Gallery'
import Carousel from './component/carousel'
import ImageHouse from './component/imagehouse'
import Herov2 from './component/herov2'
import Offer from './component/offer'
import Contact from './component/contact'
import Spacer_contact from './component/contact-spacer';
import Footer from './component/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
   <Herov2 />
   <Gallery />
   <Spacer />
   <About />
   <Spacer_contact />
   <Contact />
   <Footer />
    </div>
  )
}

export default App
