import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import { AppContext } from "../context";

const StartTeam = ({ourMentors}) => {
    
    const { t } = useTranslation();
    const {getCookie, selectFontBig, selectFontSmall} = useContext(AppContext);

    return(
        <section className="section-padding our-team arrow-shape-1">
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        {/*<h5 className="text-custom-blue wow fadeInUp pb-3" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartTeam.ourTeam")}</h5>*/}
                        <h3 className="text-custom-white fw-700">
                            {t("StartTeam.ourTeam")}
                            {/*{t("StartTeam.title")}*/}
                        </h3>
                    </div>
                    <div className="section-description">
                        <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartTeam.text")}</p>
                    </div>
                </div>
                <div className="row">
                    {ourMentors && ourMentors.map((card, index) => 
                        <div className="col-lg-3 col-sm-6" key={index}>
                            <div className="team-block p-relative mb-md-40 wow fadeInUp mb-3" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="inner-box bx-wrapper">
                                    <div className="image animate-img">
                                        <img src={card.image} 
                                             alt="img" 
                                             className="full-width" 
                                             style={{height:'255px', 
                                                     objectFit:'cover', 
                                                     objectPosition:'center', 
                                                     minHeight:'310px'
                                                    }}/>
                                        <div className="overlay-box">
                                            <div className="overlay-inner p-relative full-height">
                                                <ul className="team-social-box custom">
                                                    <li className="youtube"><a href="#" className="fab fa-youtube fs-16" tabIndex="0"></a><span className="social-name fs-12 text-custom-white">youtube</span></li>
                                                    <li className="linkedin"><a href="#" className="fab fa-linkedin fs-16" tabIndex="0"></a><span className="social-name fs-12 text-custom-white">linkedin</span></li>
                                                    <li className="facebook"><a href="#" className="fab fa-facebook-f fs-16" tabIndex="0"></a><span className="social-name fs-12 text-custom-white">facebook</span></li>
                                                    <li className="twitter"><a href="#" className="fab fa-twitter fs-16" tabIndex="0"></a><span className="social-name fs-12 text-custom-white">twitter</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lower-content p-relative text-center" style={{minHeight:'210px'}}>
                                        <div className="icon-box fs-18 text-custom-white">
                                            <span className="fas fa-cogs"></span>
                                        </div>
                                        <h4><a href="#" className={selectFontBig ? "fw-600 fs-26" : selectFontSmall ? "fw-600 fs-20" : "fw-600 fs-20"} tabIndex="0">
                                            {getCookie.i18next === 'en' ? card.fullName_en :
                                                getCookie.i18next === 'uz' ? card.fullName_uz :
                                                    getCookie.i18next === 'oz' ? card.fullName_oz : card.fullName_ru }
                                        </a></h4>
                                        <p className={selectFontBig ? "fs-26 designation text-custom-white mb-xl-20" : selectFontSmall ? "designation text-custom-white mb-xl-20" : "fs-20 designation text-custom-white mb-xl-20"}>
                                            {getCookie.i18next === 'en' ? card.position_en :
                                                getCookie.i18next === 'uz' ? card.position_uz :
                                                    getCookie.i18next === 'oz' ? card.position_oz : card.position_ru }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default StartTeam