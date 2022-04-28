import React from 'react';
import {Link} from "react-router-dom";
import NavChildChildChild from "./NavChildChildChild";

const NavbarChildChild = ({sub, getCookie}) => {
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
                {getCookie.i18next === 'en' ? sub.name_en :
                    getCookie.i18next === 'uz' ? sub.name_uz :
                        getCookie.i18next === 'oz' ? sub.name_oz : sub.name_ru }
            </Link>
            <ul className="custom sub-menu">
            {sub.children && sub.children.map((subChild, subNumber) =>
                    <NavChildChildChild subChild={subChild} key={subNumber} getCookie={getCookie}/>
            )}
            </ul>
        </li>
    )
}

export default NavbarChildChild