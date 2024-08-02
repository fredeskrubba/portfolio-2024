import "../../styles/about.css"
import { useState } from "react";
import ArrowIcon from "../../assets/icons/arrow-icon.svg?react";
import htmlIcon from "../../assets/icons/html-icon.svg?react";
import cssIcon from "../../assets/icons/css-icon.svg?react";
import jsIcon from "../../assets/icons/js-icon.svg?react";
import Skill from "./Skill";

const About = () => {

    const skills = [
        {
            title: "HTML",
            icon: htmlIcon,
            id: 1
        },
        {
            title: "CSS",
            icon: cssIcon,
            id: 2,
        },
        {
            title: "Javascript",
            icon: jsIcon,
            id: 3
        },

    ]

    const [showSection, setShowSection] = useState(true)

    return (
            <section id="about-section-mobile">
                <div className="section-collapsable">
                    <h2>Om mig</h2>
                    <ArrowIcon className={showSection ? "" : "rotate-arrow"} onClick={()=> {
                        setShowSection(!showSection)
                    }}/>
                </div>
                {
                    showSection && 
                    <>
                        <article className="section-intro">
                            <p>I en tidsalder hvor få ting er så vigtige, som en stærk online tilstedeværelse, er dygtige og engagerede udviklere vigtigere end nogensinde før. Som uddannet webudvikler og datamatiker, med tre års erhvervserfaring har jeg kastet mig ind i kampen med hovedet først. I mit repetoir kan man blandt andet finde følgende:</p>
                        </article>
                        <article id="skills-container">
                            {
                                skills.map((skill)=><Skill title={skill.title} Icon={skill.icon} key={skill.id}/>)
                            }
                        </article>
                        <button type="button" className="see-more">
                            Se mere
                        </button>                
                    </>
                }
            </section>
    )
}

export default About