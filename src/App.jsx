import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Header from './components/Header';
import Test from './components/Test';
import Home from './components/Home';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import TiltCardTest from './components/TiltCardTest';
import WorkExperience from './components/WorkExperience';

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <>
      <Header/>
      <Home />
      <About />
      <WorkExperience/>
      {/* <TiltCardTest /> */}
      {/* <CustomCursor/> */}
      {/* <Test/> */}
    </>
  )
}

export default App