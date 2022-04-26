import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {AppContext} from "../../context";
import NavbarChild from "./NavbarChild";

const Navbar = () => {
    const {navParent} = useContext(AppContext);
    // console.log(navParent);

    return(
        <header className="menu-style">
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <div className="logo">
                                <Link to="/" >
                                    <img src="../../assets/images/logo.png" className="logo" alt="Logo"/>
                                </Link>
                            </div>
                            <div className="right-side">
                                <div className="navigation">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="../../assets/images/logo.png" className="img-fluid image-fit" alt="Logo"/>
                                        </Link>
                                    </div>
                                    <nav>
                                        <ul className="custom main-menu" id="navbar-root">
                                            {navParent && navParent.map((navText, index) =>
                                                <NavbarChild navText={navText} key={index} />
                                            )}
                                        </ul>
                                    </nav>

                                   </div>
                                <div className="hamburger-menu">
                                    <div className="menu-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-side-2">
                                <div className="logon-parent">
                                    <div className="logon">
                                        <img src="../../assets/images/iqnet.png"
                                             className="logon-img" alt="Logo"/>
                                    </div>
                                    <div className="logon">
                                        <img src="../../assets/images/russian.png"
                                             className="logon-img" alt="Logo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar