import '../src/styles/App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import TabletLandingPage from './components/TabletLandingPage'

function App() {

  return (
    <main>
      <Navbar/>
      <div className="mobile-sections">
        <Intro/>
        <About/>
        <Projects/>
      </div>
      <div className="tablet-sections">
        <TabletLandingPage/>
      </div>
    </main>
  )
}

export default App