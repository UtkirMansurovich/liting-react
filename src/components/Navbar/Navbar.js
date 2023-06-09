import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import {AppContext} from "../../context";
import NavbarChild from "./NavbarChild";
import Contrast from "../Contrast";
import Search from '../Search';
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const {navParent, showContrast, handlerSelect, getCookie, openContrast, showSearch, openSearch, selectFontSmall, selectFontBig} = useContext(AppContext);
    // console.log(navParent);
    const [toggle, setToggle] = useState(false);
    const { t } = useTranslation();

    const handlerTop = () => {
        window.scrollTo({top: 0});
      }

    if(showContrast) {
        return(
          <Contrast/>
        )
    }else if(showSearch) {
        return <Search/>
    }else {
        return(
          <header className="menu-style">
              <div className="topbar bg-custom-black">
                  <div className="container-fluid custom-container">
                      <div className="row">
                          <div className="col-md-8">
                              <div className="left-side">
                                  <ul className="custom">
                                      <li>
                                          <a href="tel:+998712806705" className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : 'fs-20 text-custom-white'}>
                                              <i className="fas fa-phone-alt text-custom-blue"></i>
                                              (+998 71) 280-67-05
                                          </a>
                                      </li>
                                      <li>
                                          <a href="mailto:liting@liting.com" className={selectFontBig ?"fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"} target="_blank">
                                              <i className="fas fa-envelope text-custom-blue"></i>
                                              liting@liting.uz
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://www.google.com/maps/place/2+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0+%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100029,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3070099,69.2718756,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b27be08195b:0x22e39ddd8fab137e!8m2!3d41.3070059!4d69.2740643" className={selectFontBig ?"fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"} target="_blank">
                                              <i className="fas fa-map-marker-alt text-custom-blue"></i>
                                              {t("TopBar.address")}
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="right-side">
                                  <ul className="custom">
                                      <li className="language">
                                          <select className={selectFontBig ? 'fs-26' : selectFontSmall ? '' : 'fs-20'} defaultValue={getCookie.i18next} onChange={(e)=>handlerSelect(e)} >
                                              <option value="ru" >Русский</option>
                                              <option value="oz" >O'zbek</option>
                                              <option value="uz" >Ўзбек</option>
                                              <option value="en" >English</option>
                                          </select>
                                      </li>
                                      <li>
                                          <a onClick={openContrast} href="#" className={selectFontBig ?"fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>
                                              <i className="fas fa-eye"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a onClick={openSearch} href="#" className={selectFontBig ?"fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>
                                              <i class="fas fa-search"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://t.me/litinguz" target="_blank" className={selectFontBig ?"fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>
                                              <i className="fab fa-telegram-plane"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://instagram.com/uzliti.neftgaz?igshid=YmMyMTA2M2Y=" target="_blank" className={selectFontBig ?"fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>
                                              <i className="fab fa-instagram"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://www.facebook.com/uzlitineftgaz/" target="_blank" className={selectFontBig ?"fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>
                                              <i className="fab fa-facebook-f"></i>
                                          </a>
                                      </li>
                                
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="container-fluid custom-container up-navbar">
                  <div className="row">
                      <div className="col-12">
                          <div className="header">
                              <div className="logo">
                                  <Link to="/" onClick={handlerTop}>
                                      <img src="../../assets/images/login-logo1.png" className="logo" alt="Logo"/>
                                  </Link>
                              </div>
                              <div className="right-side">

                                  <div className={toggle ? 'navigation active' : 'navigation'}>

                                      <div className="logo">
                                          <Link to="/" onClick={handlerTop}>
                                              <img src="../../assets/images/login-logo1.png" className="img-fluid image-fit" alt="Logo"/>
                                          </Link>
                                      </div>
                                      <nav>
                                          <ul className="custom main-menu" id="navbar-root">
                                              {navParent && navParent.map((navText, index) =>
                                                <NavbarChild navText={navText} key={index} setToggle={setToggle} handlerTop={handlerTop}/>
                                              )}
                                          </ul>
                                      </nav>

                                  </div>
                                  <div className="hamburger-menu">
                                      <div className={toggle ? 'menu-btn active' : 'menu-btn'} onClick={() => setToggle(prev => !prev)}>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </div>
                                  </div>
                              </div>
                              <div className="right-side-2">
                                  <div className="logon-parent">
                                      <div className="logon">
                                          <img src="../../assets/images/iqnet.png" className="logon-img" alt="Logo"/>
                                      </div>
                                      <div className="logon">
                                          <img src="../../assets/images/stz.png" className="logon-img" alt="Logo"/>
                                      </div>
                                      <div className="logon">
                                          <img src="../../assets/images/russian.png" className="logon-img" alt="Logo"/>
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
}

export default Navbar