import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import { AppContext } from "../context";

const StartFullWidth = () => {
    const { t } = useTranslation();
    const {selectFontBig, selectFontSmall} = useContext(AppContext);

    return(
        <section className="full-services-sec bg-light-white">
            <div className="container-fluid no-padding">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="left-side animate-img full-height wow fadeInLeftBig">
                            <img src="../assets/images/scientific.jpg" className="image-fit" alt="img"/>
                            {/*<div className="service-text-2 bg-custom-black text-center">*/}
                            {/*    <h5 className="text-custom-white mb-1">{t("StartFullWidth.believe")}</h5>*/}
                            {/*    <h2 className="no-margin text-custom-white"><span className="count">15090</span><span>+</span></h2>*/}
                            {/*</div>*/}
                            {/*<div className="video-play-btn bg-custom-blue padding-10">*/}
                            {/*    <h4 className="text-custom-white no-margin fw-400">{t("StartFullWidth.playVideo")}</h4>*/}
                            {/*    <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" className="popup-video">*/}
                            {/*        <i className="fas fa-play"></i>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-side custom-container wow fadeInRightBig">
                            <div className="text-wrapper">
                                <h2 className="text-custom-white fw-600 mb-4" style={{fontSize:'30px'}}>{t("StartFullWidth.title")}</h2>
                                <p className={selectFontBig ? "fs-26 text-custom-white mb-xl-20 fw-600 mb-5 text-justify" : selectFontSmall ? "fs-16 text-custom-white mb-xl-20 fw-600 mb-5 text-justify" : "fs-20 text-custom-white mb-xl-20 fw-600 mb-5 text-justify"}>{t("StartFullWidth.text")}</p>
                                {/*<div className="row">*/}
                                {/*    <div className="col-sm-6">*/}
                                {/*        <div className="right-side-box wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">*/}
                                {/*            <div className="icon">*/}
                                {/*                <i className="flaticon-architecture-and-city"></i>*/}
                                {/*            </div>*/}
                                {/*            <h5 className="text-custom-white">{t("StartFullWidth.cardTitleFirst")}</h5>*/}
                                {/*            <p className="text-custom-white">{t("StartFullWidth.cardTextFirst")}</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-sm-6">*/}
                                {/*        <div className="right-side-box wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">*/}
                                {/*            <div className="icon">*/}
                                {/*                <i className="flaticon-360-degrees"></i>*/}
                                {/*            </div>*/}
                                {/*            <h5 className="text-custom-white">{t("StartFullWidth.cardTitleSecond")}</h5>*/}
                                {/*            <p className="text-custom-white">{t("StartFullWidth.cardTextSecond")}</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartFullWidth