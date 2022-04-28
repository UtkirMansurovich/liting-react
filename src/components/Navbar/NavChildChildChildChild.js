import React from 'react';
import {Link} from "react-router-dom";

const NavChildChildChildChild = ({lastChild, getCookie}) => {
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
                {getCookie.i18next === 'en' ? lastChild.name_en :
                    getCookie.i18next === 'uz' ? lastChild.name_uz :
                        getCookie.i18next === 'oz' ? lastChild.name_oz : lastChild.name_ru }
            </Link>
        </li>
    )
}

export default NavChildChildChildChild