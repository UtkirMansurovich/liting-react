import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";
import {AppContext} from "../context";

const TopBar = () => {
    const {handlerSelect, getCookie, openContrast} = useContext(AppContext);
    const { t } = useTranslation();

    return(
        <div className="topbar bg-custom-black">
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="left-side ">
                            <ul className="custom">
                                <li>
                                    <a href="tel:+998712806726" className="text-custom-white">
                                        <i className="fas fa-phone-alt text-custom-blue"></i>
                                        (+998 71) 280-67-26
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:devonxona@liting.uz" className="text-custom-white" target="_blank">
                                        <i className="fas fa-envelope text-custom-blue"></i>
                                        devonxona@liting.uz
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/place/2+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0+%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100029,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3070099,69.2718756,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b27be08195b:0x22e39ddd8fab137e!8m2!3d41.3070059!4d69.2740643"
                                       className="text-custom-white" target="_blank"
                                    >
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
                                    <select defaultValue={getCookie.i18next} onChange={(e)=>handlerSelect(e)} >
                                        <option value="ru" >Русский</option>
                                        <option value="oz" >O'zbek</option>
                                        <option value="uz" >Ўзбек</option>
                                        <option value="en" >English</option>
                                    </select>
                                </li>
                                <li>
                                    <a onClick={openContrast} href="#" className="text-custom-white">
                                        <i className="fas fa-binoculars"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/litinguz" target="_blank" className="text-custom-white">
                                        <i className="fab fa-telegram-plane"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/uzliti.neftgaz?igshid=YmMyMTA2M2Y=" target="_blank" className="text-custom-white">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/uzlitineftgaz/" target="_blank" className="text-custom-white">

                                        <i className="fab fa-facebook-f"></i>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar