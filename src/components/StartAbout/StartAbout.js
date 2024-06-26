import React, { useState, useContext } from "react";
import {useTranslation} from "react-i18next";
import StartAboutResearch from "./StartAboutResearch";
import StartAboutDesign from "./StartAboutDesign";
import { AppContext } from "../../context";

const StartAbout = () => {
    const [openResearchModal, setOpenResearchModal] = useState(false);
    const [openDesignModal, setOpenDesignModal] = useState(false);
    const { t } = useTranslation();
    const {selectFontBig, selectFontSmall} = useContext(AppContext);

    const openModalResearch = () => {
        setOpenResearchModal(prev => !prev);
    }
    const openModalDesign = () => {
        setOpenDesignModal(prev => !prev);
    }
    return(
        <section className="section-padding about-us">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-right-side p-relative mb-md-80">
                            <img src="../assets/images/homepage-1/about.jpeg" className="img-fluid full-width" alt="about" style={{height:'500px', objectFit:'cover'}}/>
                            <div className="about-meta">
                                <div className="meta-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <img src="../assets/images/banner-icon-01.png" className="full-width" alt="img"/>
                                </div>
                                <div className="meta-text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <h4 className={selectFontBig ? "fs-26 text-custom-white no-margin" : selectFontSmall ? "text-custom-white no-margin fs-20" : "fs-20 text-custom-white no-margin"}>{t("StartAbout.project")}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 align-self-center">
                        <div className="about-left-side p-relative">
                            <div className="section-header">
                                <div className="section-heading">
                                    {/*<h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartAbout.about")}</h5>*/}
                                    <h3 className="text-theme fw-700">
                                        {t("StartAbout.about")}
                                        {/*{t("StartAbout.history")}*/}
                                    </h3>
                                </div>
                            </div>
                            <div className="about-desc">
                                <p className={selectFontBig ? "fs-26 text-light-white mb-xl-20" : selectFontSmall ? "text-light-white mb-xl-20" : "fs-20 text-light-white mb-xl-20"}>{t("StartAbout.text")}</p>
                            </div>
                            <div className="company-progress">
                                <div className="progress-item">
                                    <label onClick={openModalResearch} className={selectFontBig ? "fs-26 text-custom-black fs-16 fw-600 about-link" : selectFontSmall ? "text-custom-black fs-16 fw-600 about-link" : 'fs-20 text-custom-black fs-16 fw-600 about-link'}>{t("StartAbout.development")} 
                                        {/* <span>1500</span> */}
                                    </label>
                                    {/* <div className="progress">
                                        <div className="progress-bar progress-bar-striped active">
                                        </div>
                                    </div> */}
                                </div>
                                <div className="progress-item">
                                    <label onClick={openModalDesign} className={selectFontBig ? "fs-26 text-custom-black fs-16 fw-600 about-link" : selectFontSmall ? "text-custom-black fs-16 fw-600 about-link" : 'fs-20 text-custom-black fs-16 fw-600 about-link'}>{t("StartAbout.design")} 
                                        {/* <span>2000</span> */}
                                    </label>
                                    {/* <div className="progress">
                                        <div className="progress-bar progress-bar-striped active">
                                        </div>
                                    </div> */}
                                </div>
                                <div className="progress-item">
                                    {/*<label className="text-custom-black fs-16 fw-600">{t("StartAbout.automation")} <span>75%</span></label>*/}
                                    {/*<div className="progress">*/}
                                        {/*<div className="progress-bar progress-bar-striped active">*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StartAboutResearch setOpenResearchModal={setOpenResearchModal} openResearchModal={openResearchModal} selectFontBig={selectFontBig} selectFontSmall={selectFontSmall}/>
            <StartAboutDesign setOpenDesignModal={setOpenDesignModal} openDesignModal={openDesignModal} selectFontBig={selectFontBig} selectFontSmall={selectFontSmall}/>
        </section>
    )
}

export default StartAbout