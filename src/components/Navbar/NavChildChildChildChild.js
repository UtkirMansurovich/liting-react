import React from 'react';
import {Link} from "react-router-dom";

const NavChildChildChildChild = ({lastChild}) => {
    return(
        <li className="menu-item">
            <Link to={
                lastChild.type === 'PAGE' 
                ? "/page/:id" 
                : lastChild.type === "BLOGS" 
                ? "/blogs" 
                : lastChild.type === "PARENT" 
                ? "#"
                : "" 
            }
                className="text-theme"
            >
                {lastChild.name_uz}
            </Link>
        </li>
    )
}

export default NavChildChildChildChild