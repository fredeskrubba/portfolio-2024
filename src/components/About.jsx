import "../styles/about.css"

import ArrowIcon from "../assets/icons/arrow-icon.svg?react";

const About = () => {
    return (
        <main id="about-section">
            <div className="section-collapsable">
                <h2>Om mig</h2>
                <ArrowIcon/>
            </div>
            <article>
                <p>I en tidsalder hvor få ting er så vigtige, som en stærk online tilstedeværelse, er dygtige og engagerede udviklere vigtigere end nogensinde før. Som uddannet webudvikler og datamatiker, med tre års erhvervserfaring har jeg kastet mig ind i kampen med hovedet først. I mit repetoir kan man blandt andet finde følgende:</p>
            </article>
        </main>
    )
}

export default About