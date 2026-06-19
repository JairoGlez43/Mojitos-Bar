import NavBar from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";


gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  
  return (
    <main>
      <NavBar />
      <Hero />
      <section style={{ height: "200vh" }} />
    </main>
  )
}

export default App
