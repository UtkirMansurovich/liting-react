import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../context";
import NavChildChildChildChild from "./NavChildChildChildChild";

const NavChildChildChild = ({subChild}) => {
    const {findId} = useContext(AppContext);
    function setId(id, pageTitle){
        localStorage.setItem('id', id);
        localStorage.setItem('pageTitle', pageTitle);
        findId(id, pageTitle);
    }

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
                onClick={()=>setId(subChild.id, subChild.name_oz)}
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