import { FaHome } from "react-icons/fa";
import styles from "./Item.module.scss"

function Item({icon, content}) {
    let IconComponent
    switch (icon) {
        case 'home':
            IconComponent = <FaHome className={styles.icon}/>
            break;
        default:
            IconComponent = null

    }

    return (
        <>
            {IconComponent}
            <p className={styles.content}>
                {content}
            </p>
        </>
    );
}

export default Item