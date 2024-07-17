import '../src/styles/App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'

function App() {

  return (
    <main>
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
    </main>
  )
}

export default App
