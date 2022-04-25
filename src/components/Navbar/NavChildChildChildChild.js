import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../context";

const NavChildChildChildChild = ({lastChild}) => {
    const {findId} = useContext(AppContext);
    function setId(id, pageTitle){
        localStorage.setItem('id', id);
        localStorage.setItem('pageTitle', pageTitle)
        findId(id, pageTitle)
    }
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
                onClick={()=>setId(lastChild.id, lastChild.name_oz)}
                className="text-theme"
            >
                {lastChild.name_uz}
            </Link>
        </li>
    )
}

export default NavChildChildChildChild