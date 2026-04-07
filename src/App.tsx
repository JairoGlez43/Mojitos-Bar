import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";


gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  
  return (
    <>
      <h1 className="text-4xl">App</h1>
    </>
  )
}

export default App
