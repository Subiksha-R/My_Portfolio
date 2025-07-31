import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Header from './components/Header';
import Test from './components/Test';
import Home from './components/Home';

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <>
      <Header/>
      <Home/>
      {/* Test/> */}
    </>
  )
}

export default App