import React from 'react';
import {Link} from "react-router-dom";
import NavChildChildChildChild from "./NavChildChildChildChild";

const NavChildChildChild = ({subChild, getCookie}) => {
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
                {getCookie.i18next === 'en' ? subChild.name_en :
                    getCookie.i18next === 'uz' ? subChild.name_uz :
                        getCookie.i18next === 'oz' ? subChild.name_oz : subChild.name_ru }
            </Link>
            <ul className='custom sub-menu'>
                {subChild.children && subChild.children.map((lastChild, lastChildNumber) =>
                    <NavChildChildChildChild lastChild={lastChild} key={lastChildNumber} getCookie={getCookie}/>
                )}
            </ul>

        </li>
    )
}

export default NavChildChildChild