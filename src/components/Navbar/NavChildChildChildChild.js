import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../context";

const NavChildChildChildChild = ({lastChild}) => {
    const {findId} = useContext(AppContext);
    function setId(id){
        localStorage.setItem('id', id);
        findId(id)
    }
    return(
        <li className="menu-item">
            <Link to={lastChild.type === 'PAGE' ? "/page" : lastChild.type === "BLOGS" ? "/blogs" : lastChild.type === "PARENT" ? "" : "" }
                  onClick={()=>setId(lastChild.id)}
                  className="text-theme"
            >{lastChild.name_uz}</Link>
        </li>
    )
}

export default NavChildChildChildChild