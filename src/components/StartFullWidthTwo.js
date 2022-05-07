import React from "react";
import {useTranslation} from 'react-i18next'

const StartFullWidthTwo = () => {
    const { t } = useTranslation();
    return(
        <section className="full-services-sec bg-light-white">
            <div className="container-fluid no-padding">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="right-side custom-container wow fadeInLeftBig">
                            <div className="text-wrapper">
                                <h2 className="text-custom-white fw-600">{t('StartFullWidthTwo.title')} </h2>
                                <p className="text-custom-white mb-xl-20 fs-16 fw-600">{t('StartFullWidthTwo.text')} </p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="right-side-box wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                            <div className="icon">
                                                <i className="flaticon-reuse"></i>
                                            </div>
                                            <h5 className="text-custom-white">{t('StartFullWidthTwo.cardTitle')}</h5>
                                            <p className="text-custom-white">{t('StartFullWidthTwo.cardText')} </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="right-side-box wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <div className="icon">
                                                <i className="flaticon-employee"></i>
                                            </div>
                                            <h5 className="text-custom-white">{t('StartFullWidthTwo.cardTitleTwo')}</h5>
                                            <p className="text-custom-white">{t('StartFullWidthTwo.cardTextTwo')} </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn-first btn-border">{t('StartFullWidthTwo.buttonMeet')}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="left-side animate-img full-height wow fadeInRightBig">
                            <img src="../assets/images/video.jpg" className="image-fit" alt="img"/>
                            <div className="service-text bg-custom-black">
                                <div className="transform-center text-wrapper">
                                    <h5 className="text-custom-white">{t('StartFullWidthTwo.cardTitleThree')}</h5>
                                    <p className="text-custom-white mb-xl-20">{t('StartFullWidthTwo.cardTextThree')}</p>
                                    <div className="btns">
                                        <a href="#" className="small-btn">
                                            <i className="flaticon-arrow-1"></i>
                                        </a>
                                        <a href="#" className="text-custom-white fs-14 fw-500 ml-2">{t('StartFullWidthTwo.buttonWatch')}</a>
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

export default StartFullWidthTwo