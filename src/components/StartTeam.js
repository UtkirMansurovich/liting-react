import React from "react";
import {useTranslation} from "react-i18next";

const StartTeam = () => {
    const { t } = useTranslation();
    return(
        <section className="section-padding our-team arrow-shape-1">
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartTeam.ourTeam")}</h5>
                        <h3 className="text-custom-white fw-700">{t("StartTeam.title")}</h3>
                    </div>
                    <div className="section-description">
                        <p className="text-custom-white">{t("StartTeam.text")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-block p-relative mb-md-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="inner-box bx-wrapper">
                                <div className="image animate-img">
                                    <img src="../assets/images/homepage-1/agent-1.jpg" alt="img" className="full-width"/>
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
                                <div className="lower-content p-relative text-center">
                                    <div className="icon-box fs-18 text-custom-white">
                                        <span className="fas fa-cogs"></span>
                                    </div>
                                    <h4><a href="#" className="fw-600 fs-20" tabIndex="0">{t("StartTeam.cardNameOne")}</a></h4>
                                    <p className="designation text-custom-white mb-xl-20">{t("StartTeam.cardPositionOne")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-block p-relative mb-md-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">
                            <div className="inner-box bx-wrapper">
                                <div className="image animate-img">
                                    <img src="../assets/images/homepage-1/agent-2.jpg" alt="img" className="full-width"/>
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
                                <div className="lower-content p-relative text-center">
                                    <div className="icon-box fs-18 text-custom-white">
                                        <span className="fas fa-cogs"></span>
                                    </div>
                                    <h4><a href="#" className="fw-600 fs-20" tabIndex="0">{t("StartTeam.cardNameTwo")}</a></h4>
                                    <p className="designation text-custom-white mb-xl-20">{t("StartTeam.cardPositionTwo")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-block p-relative mb-sm-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                            <div className="inner-box bx-wrapper">
                                <div className="image animate-img">
                                    <img src="../assets/images/homepage-1/agent-3.jpg" alt="img" className="full-width"/>
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
                                <div className="lower-content p-relative text-center">
                                    <div className="icon-box fs-18 text-custom-white">
                                        <span className="fas fa-cogs"></span>
                                    </div>
                                    <h4><a href="#" className="fw-600 fs-20" tabIndex="0">{t("StartTeam.cardNameThree")}</a></h4>
                                    <p className="designation text-custom-white mb-xl-20">{t("StartTeam.cardPositionThree")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-block p-relative wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="1.3s">
                            <div className="inner-box bx-wrapper">
                                <div className="image animate-img">
                                    <img src="../assets/images/homepage-1/agent-4.jpg" alt="img" className="full-width"/>
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
                                <div className="lower-content p-relative text-center">
                                    <div className="icon-box fs-18 text-custom-white">
                                        <span className="fas fa-cogs"></span>
                                    </div>
                                    <h4><a href="#" className="fw-600 fs-20" tabIndex="0">{t("StartTeam.cardNameFour")}</a></h4>
                                    <p className="designation text-custom-white mb-xl-20">{t("StartTeam.cardPositionFour")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartTeam