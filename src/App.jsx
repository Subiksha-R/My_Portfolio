import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Header from './components/Header';

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <Header/>
  )
}

export default App