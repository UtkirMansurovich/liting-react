import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavChildChildChildChild = ({lastChild, getCookie, setToggle, handlerTop, selectFontBig, selectFontSmall}) => {

  const closeTogChildChildChild = () => {
    if (lastChild.type === "PAGE" || lastChild.type === "BLOGS") setToggle(false);
  }

    return(
        <li onClick={closeTogChildChildChild} className="menu-item">
            <Link to={lastChild.type === 'PAGE' 
                        ? "/page/:id" 
                        : lastChild.type === "BLOGS" 
                        ? "/blogs" 
                        : lastChild.type === "PARENT" 
                        ? "#"
                        : "" }
                        className={selectFontBig ? "fs-26 text-theme" : selectFontSmall ? 'text-theme' : 'fs-20 text-theme'} onClick={handlerTop}>
                {getCookie.i18next === 'en' ? lastChild.name_en :
                    getCookie.i18next === 'uz' ? lastChild.name_uz :
                        getCookie.i18next === 'oz' ? lastChild.name_oz : lastChild.name_ru }
            </Link>
        </li>
    )
}

export default NavChildChildChildChild