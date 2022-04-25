import React from 'react';
import {Link} from "react-router-dom";
import NavChildChildChildChild from "./NavChildChildChildChild";

const NavChildChildChild = ({subChild}) => {
    return(
        <li className="menu-item menu-item-has-children">
            <Link to={
                subChild.type === 'PAGE' 
                ? "/page/"+subChild.id
                : subChild.type === 'BLOGS' 
                ? "/blogs/"+subChild.id
                : subChild.type === "PARENT" 
                ? "#"
                : "" 
            }
                className="text-theme"
            >
                {subChild.name_uz}
            </Link>
            <ul className='custom sub-menu'>
                {subChild.children && subChild.children.map((lastChild, lastChildNumber) =>
                    <NavChildChildChildChild lastChild={lastChild} key={lastChildNumber}/>
                )}
            </ul>

        </li>
    )
}

export default NavChildChildChild