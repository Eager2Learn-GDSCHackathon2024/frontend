import styles from './EducationLevelButton.module.scss'
import { FaSchool } from "react-icons/fa";


function EducationLevelButton({icon, name}) {
    let Icon
    switch (icon) {
        case "primary":
            Icon = <FaSchool className={styles.icon}/>
            break;
        case "secondary":
            Icon = <FaSchool className={styles.icon}/>
            break;
        case "high":
            Icon = <FaSchool className={styles.icon}/>
            break;
        case "graduate":
            Icon = <FaSchool className={styles.icon}/>
            break;
        default:
            break;
    }
    return (
        <div className={styles.primary}>
            {Icon}
            <p className={styles.name}>{name}</p>
        </div>
    );
}

export default EducationLevelButton