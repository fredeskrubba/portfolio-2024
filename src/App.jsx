import '../src/styles/App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import TabletLandingPage from './components/tabletLandingPage/TabletLandingPage'
import IMAGES from './assets/images/Images'

function App() {
  const projectsArray = [
    {
        title: "Projekt 1",
        description: "Beskrivelse på dette første projekt som linker til en live demo og github",
        tags: [
            "#HTML",
            "#CSS",
            "#Javascript",
            "#C#"
        ],
        githubLink: "https://www.google.com/",
        demoLink: "https://www.dr.dk/drtv/",
        image: IMAGES.projectImage, 
        id: 1
    },
    {
      title: "Projekt 1",
      description: "Beskrivelse på dette første projekt som linker til en live demo og github",
      tags: [
          "#HTML",
          "#CSS",
          "Javascript",
          "#C#"
      ],
      githubLink: "https://www.google.com/",
      demoLink: "https://www.dr.dk/drtv/",
      image: IMAGES.projectImage, 
      id: 2
  },
  {
    title: "Projekt 1",
    description: "Beskrivelse på dette første projekt som linker til en live demo og github",
    tags: [
        "#HTML",
        "#CSS",
        "Javascript",
        "#C#"
    ],
    githubLink: "https://www.google.com/",
    demoLink: "https://www.dr.dk/drtv/",
    image: IMAGES.projectImage, 
    id: 3
}
]
  return (
    <main>
      <Navbar/>
      <div className="mobile-sections">
        <Intro/>
        <About/>
        <Projects projectsArray={projectsArray}/>
      </div>
      <div className="tablet-sections">
        <TabletLandingPage projectsArray={projectsArray}/>
      </div>
    </main>
  )
}

export default App