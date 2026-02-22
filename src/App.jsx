import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import About from './components/About'
import Programs from './components/Programs'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Donate from './components/Donate'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Mission />
      <About />
      <Programs />
      <Blog />
      <Newsletter />
      <Donate />
      <Footer />
    </div>
  )
}
