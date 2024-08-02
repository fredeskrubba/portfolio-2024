import "../styles/intro.css"
import IMAGES from "../assets/images/Images"

const Intro = () => {
  return (
    <header>
      <div className="intro-mobile">
        <img src={IMAGES.profilePicture} alt="Picture of me" className="intro-image"/>
        <h2>
            I am [Your Name], a web developer passionate about creating dynamic, user-friendly websites. I specialize in clean code and seamless user experiences, delivering high-quality solutions for your online presence.
        </h2>
      </div>
      <div className="intro-tablet">
        
      </div>
    </header>
  )
}

export default Intro