import React from "react";
import {useTranslation} from "react-i18next";

const StartOurHistory = () => {
    const { t } = useTranslation();
    return(
        <section className="section-padding bg-light-white bg-call-to-action">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartHistory.ourHistory")}</h5>
                        <h3 className="text-custom-white fw-700">{t("StartHistory.title")}</h3>
                    </div>
                    <div className="section-description">
                        <p className="text-custom-white">{t("StartHistory.text")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="video-box mb-xl-40">
                            <div className="video_wrapper">
                                <div className="videoPoster">
                                    <img src="../assets/images/img.jpg" className="image-fit" alt="#"/>
                                    <div className="video-inner video-btn-wrapper"> <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" className="text-custom-blue popup-video"><i className="far fa-play-circle"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-tabs">
                            <ul className="nav nav-tabs custom p-relative mb-xl-40">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#start">1990 - 1999</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#setup">2000 - 2009</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#medium">2010 - 2022</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#advance">2022 - {t("StartHistory.and")}</a>
                                </li>
                            </ul>
                            <div className="tab-content padding-20 bg-custom-white bx-wrapper">
                                <div className="tab-pane fade show active" id="start">
                                    <div className="tab-inner">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="img-sec mb-md-40">
                                                    <img src="../assets/images/about-us/history3.jpg" className="full-width" alt="img"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 align-self-center">
                                                <div className="content-box">
                                                    <h4 className="text-custom-black fw-600">{t("StartHistory.cardTitle")}</h4>
                                                    <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p>
                                                    <div className="list">
                                                        <ul className="custom">
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.employees")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.project")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.work")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.year")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="setup">
                                    <div className="tab-inner">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="img-sec mb-md-40">
                                                    <img src="../assets/images/about-us/history2.jpg" className="full-width" alt="img"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 align-self-center">
                                                <div className="content-box">
                                                    <h4 className="text-custom-black fw-600">{t("StartHistory.secondCardTitle")}</h4>
                                                    <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p>
                                                    <div className="list">
                                                        <ul className="custom">
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.secondEmployees")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.secondProject")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.secondWork")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.secondYear")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="medium">
                                    <div className="tab-inner">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="img-sec mb-md-40">
                                                    <img src="../assets/images/about-us/history4.jpg" className="full-width" alt="img"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 align-self-center">
                                                <div className="content-box">
                                                    <h4 className="text-custom-black fw-600">{t("StartHistory.thirdCardTitle")}</h4>
                                                    <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p>
                                                    <div className="list">
                                                        <ul className="custom">
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.thirdEmployees")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.thirdProject")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {(t("StartHistory.thirdWork"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.thirdYear")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="advance">
                                    <div className="tab-inner">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="img-sec mb-md-40">
                                                    <img src="../assets/images/about-us/history1.jpg" className="full-width" alt="img"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 align-self-center">
                                                <div className="content-box">
                                                    <h4 className="text-custom-black fw-600">{t("StartHistory.fourthCardTitle")}</h4>
                                                    <p className="text-custom-blue mb-xl-20">{t("StartHistory.fourthCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.fourthCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.fourthCardTextThird")}</p>
                                                    <div className="list">
                                                        <ul className="custom">
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t('StartHistory.fourthEmployees')}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.fourthProject")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.fourthWork")}</span>
                                                            </li>
                                                            <li className="fs-14 text-custom-blue">
                                                                <i className="fas fa-check"></i>
                                                                <span className="text-light-white"> {t("StartHistory.fourthYear")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a>
                                                </div>
                                            </div>
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

export default StartOurHistory