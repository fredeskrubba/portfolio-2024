import "../styles/navbar.css";
import LinkedInIcon from "../assets/icons/linkedin-icon.svg?react";
import  GithubIcon from "../assets/icons/github-icon.svg?react";

const Navbar = () => {
  return (
    <nav>
        <h1>Frederik Skrubbeltrang</h1>
        <div className="flex-container">
          <a href="https://www.linkedin.com/in/frederik-skrubbeltrang-698b4a1a3/" target="_blank"><LinkedInIcon/></a>
          <a href="https://github.com/fredeskrubba" target="_blank"><GithubIcon/> </a>
        </div>
    </nav>
  )
}

export default Navbar