import React from 'react';
import {Link} from "react-router-dom";
import NavChildChildChild from "./NavChildChildChild";

const NavbarChildChild = ({sub}) => {
    return(
        <li className="menu-item menu-item-has-children" >
            <Link to={
                sub.type === 'PAGE' 
                ? "/page/"+sub.id
                : sub.type === 'BLOGS' 
                ? "/blogs/"+sub.id
                : sub.type === "PARENT" 
                ? "#"
                : "" 
            }
                className="text-theme"
            >
                {sub.name_uz}
            </Link>
            <ul className="custom sub-menu">
            {sub.children && sub.children.map((subChild, subNumber) =>
                    <NavChildChildChild subChild={subChild} key={subNumber}/>
            )}
            </ul>
        </li>
    )
}

export default NavbarChildChild