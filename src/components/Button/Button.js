import React from "react";
import { FaStar, FaMicrophone} from 'react-icons/fa'
import './Button.scss'
function Button({icon, onClick}) {
    let iconComponent;

    switch (icon) {
        case 'star':
            iconComponent = <FaStar/>
            break;
        case 'mic':
            iconComponent = <FaMicrophone/>
            break;
        default:
            iconComponent = null

    }
    return (
        <button className="round-button" onClick={onClick}>
            {iconComponent}
        </button>
    )
}
export default Button