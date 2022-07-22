import React from "react";
import {useTranslation} from 'react-i18next';

const StartService = () => {
    const { t } = useTranslation();
    return(
        <section className="section-padding our-services">
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        {/*<h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartService.ourService")}</h5>*/}
                        <h3 className="text-theme fw-700">
                            {t("StartService.ourService")}
                            {/*{t("StartService.title")}*/}
                        </h3>
                    </div>
                    <div className="section-description">
                        <p className="text-light-white">{t("StartService.text")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="filter-gallery custom-tabs mb-xl-40">
                            <ul className="custom">
                                <li className="active" data-filter="*">
                                    <a href="#" className="text-custom-black">{t("StartService.all")}</a>
                                </li>
                                <li data-filter=".h-main">
                                    <a href="#" className="text-custom-black">{t("StartService.serviceHome")}</a>
                                </li>
                                <li data-filter=".genrl-cons">
                                    <a href="#" className="text-custom-black">{t("StartService.wholeConstruction")}</a>
                                </li>
                                <li data-filter=".restructured">
                                    <a href="#" className="text-custom-black">{t("StartService.restructured")}</a>
                                </li>
                                <li data-filter=".pro-manage">
                                    <a href="#" className="text-custom-black">{t("StartService.manageProject")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row gallery-grid">
                            <div className="col-lg-3 col-md-6 filter-box h-main">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-1.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitle")}</h5>
                                            <p className="text-light-white no-margin">{t("StartService.cardText")}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box genrl-cons">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-2.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitleTwo")}</h5>
                                            <p className="text-light-white no-margin">{t("StartService.cardTextTwo")}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box restructured">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-3.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitleThree")}</h5>
                                            <p className="text-light-white no-margin">{t("StartService.cardTextThree")}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box pro-manage">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-4.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitleFour")}</h5>
                                            <p className="text-light-white no-margin">{t('StartService.cardTextFour')}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box h-main">
                                <div className="service-item animate-img mb-md-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-5.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitleFive")}</h5>
                                            <p className="text-light-white no-margin">{t("StartService.cardTextFive")}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box genrl-cons">
                                <div className="service-item animate-img mb-md-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-6.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitleSix")}</h5>
                                            <p className="text-light-white no-margin">{t("StartService.cardTextSix")}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box restructured">
                                <div className="service-item animate-img mb-sm-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-7.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitleSeven")}</h5>
                                            <p className="text-light-white no-margin">{t("StartService.cardTextSeven")}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box pro-manage">
                                <div className="service-item animate-img">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/gipi-8.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{t("StartService.cardTitleEight")}</h5>
                                            <p className="text-light-white no-margin">{t("StartService.cardTextEight")}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartService