import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../context";
import NavChildChildChild from "./NavChildChildChild";

const NavbarChildChild = ({sub}) => {
    const {findId} = useContext(AppContext);
    function setId(id, pageTitle){
        localStorage.setItem('id', id);
        localStorage.setItem('pageTitle', pageTitle);
        findId(id, pageTitle);
    }
    return(
        <li className="menu-item menu-item-has-children" >
            <Link to={sub.type === 'PAGE' ? "/page" : sub.type === 'BLOGS' ? "/blogs" : sub.type === "PARENT" ? "/" : "" }
                  onClick={()=>setId(sub.id, sub.name_oz)}
                  className="text-theme"
            >{sub.name_uz}</Link>
            <ul className="custom sub-menu">
            {sub.children && sub.children.map((subChild, subNumber) =>
                    <NavChildChildChild subChild={subChild} key={subNumber}/>
            )}
            </ul>
        </li>
    )
}

export default NavbarChildChild