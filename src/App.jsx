import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Header from './components/Header';
import Test from './components/Test';

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <>
      <Header />
      {/* Test/> */}
    </>
  )
}

export default App