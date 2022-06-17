import React from "react";
import {useTranslation} from "react-i18next";

const StartAbout = () => {

    const { t } = useTranslation();
    return(
        <section className="section-padding about-us">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-right-side p-relative mb-md-80">
                            <img src="../assets/images/homepage-1/about-us-410x450.jpg" className="img-fluid full-width" alt="about"/>
                            <div className="about-meta">
                                <div className="meta-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <img src="../assets/images/banner-icon-01.png" className="full-width" alt="img"/>
                                </div>
                                <div className="meta-text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <h4 className="text-custom-white no-margin fs-20">{t("StartAbout.project")}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 align-self-center">
                        <div className="about-left-side p-relative">
                            <div className="section-header">
                                <div className="section-heading">
                                    <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartAbout.about")}</h5>
                                    <h3 className="text-theme fw-700">{t("StartAbout.history")}</h3>
                                </div>
                            </div>
                            <div className="about-desc">
                                <p className="text-light-white mb-xl-20">{t("StartAbout.text")}</p>
                            </div>
                            <div className="company-progress">
                                <div className="progress-item">
                                    <label className="text-custom-black fs-16 fw-600">{t("StartAbout.design")} <span>70%</span></label>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <label className="text-custom-black fs-16 fw-600">{t("StartAbout.development")} <span>80%</span></label>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <label className="text-custom-black fs-16 fw-600">{t("StartAbout.automation")} <span>75%</span></label>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartAbout