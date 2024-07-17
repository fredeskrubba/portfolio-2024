const Skill = ({Icon, title}) => {

    return ( 
        <div className="skill">
            <Icon/>
            <h3>{title}</h3>
        </div>
    );
}
 
export default Skill;