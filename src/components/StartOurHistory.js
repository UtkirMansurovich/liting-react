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
                        {/* <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartHistory.ourHistory")}</h5> */}
                        <h3 className="text-custom-white fw-700">
                            {t("StartHistory.ourHistory")}
                            {/* {t("StartHistory.title")} */}
                        </h3>
                    </div>
                    <div className="section-description">
                        <p className="text-custom-white">
                            {t("StartHistory.title")}
                            {/* {t("StartHistory.text")} */}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="video-box mb-xl-40">
                            <div className="video_wrapper">
                                <div className="videoPoster">
                                    {/* <img src="../assets/images/imageForVideo.jpg" className="image-fit" alt="#"/>
                                    <div className="video-inner video-btn-wrapper"> 
                                        <a href="https://www.youtube.com/watch?v=ZQN1USUggno&t=1s" className="text-custom-blue popup-video" target="_blank">
                                        <i className="far fa-play-circle"></i>
                                        </a>
                                    </div> */}
                                    <iframe width="560" height="415" src="https://www.youtube.com/embed/ZQN1USUggno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="custom-tabs">
                            <ul className="nav nav-tabs custom p-relative mb-xl-40">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#start">2008 - 2012</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#setup">2013 - 2017</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#medium">2018 - 2021</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#advance">2022 - {t("StartHistory.and")}</a>
                                </li> */}
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
                                            <div className="col-lg-6 align-self-center" style={{height: '480px', overflow:'hidden', overflowY:'auto'}}>
                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2008")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-18")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2008-22")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2009")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-18")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-22")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-25")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-26")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-27")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-28")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-29")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-30")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-31")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-32")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-33")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-34")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-35")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2009-36")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2010")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-18")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-22")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2010-25")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2011")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2011-17")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2012")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2012-15")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
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
                                            <div className="col-lg-6 align-self-center" style={{height: '480px', overflow:'hidden', overflowY:'auto'}}>
                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2013")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2013-15")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2014")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2014-16")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2015")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-18")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-22")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2015-25")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2016")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-18")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-22")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-25")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-26")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-27")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-28")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-29")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-30")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-31")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2017")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-3")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-10")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-14")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-18")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-22")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-25")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-26")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-27")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-28")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-29")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-30")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-31")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2017-32")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
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
                                            <div className="col-lg-6 align-self-center" style={{height: '480px', overflow:'hidden', overflowY:'auto'}}>
                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2018")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2018-3"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2018-10"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2018-14"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2018-18"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2018-22"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-25")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2018-26"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-27")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-28")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-29")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2018-30"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-31")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2018-32")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2019")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-3"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-10"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-14"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-18"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-22"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-25")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-26"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-27")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-28")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-29")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-30"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-31")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-32")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-33")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-34")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-35"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-36")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-37")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-38")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-39")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-40")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-41")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-42")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-43"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-44")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-45")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-46")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-47"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-48")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-49")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-50")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-51"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-52")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-53")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-54")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-55"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-56")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-57")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-58")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-59"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-60")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-61")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-62")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-63"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-64")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-65")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-66")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-67")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-68")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-69"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-70")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-71")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-72")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2019-73"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2019-74")}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2020")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-3"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-10"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-14"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-18"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-22"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-25")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-26"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-27")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-28")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-29")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-30"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-31")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-32")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-33")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-34")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-35"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-36")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-37")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-38")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-39")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-40")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-41")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-42")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-43"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-44")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-45")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-46")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-47"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-48")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-49")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-50")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-51"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-52")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-53")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-54")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-55"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-56")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-57")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-58")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-59"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-60")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-61")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-62")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-63"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-64")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-65")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-66")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-67")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-68")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-69"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-70")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-71")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-72")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-73"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-74")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-75")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-76")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-77"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-78")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-79")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-80")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-81"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-82")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-83")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-84")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-85"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-86")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-87")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-88")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-89"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-90")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-91")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-92")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-93"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-94")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-95")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-96")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-97")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-98")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-99"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-100")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-101")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2020-102")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2020-103"))}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className="text-custom-black fw-600 text-center mb-1">{t("StartHistory.2021")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className="list">
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-1")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-2")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-3"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-4")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-5")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-6")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-7")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-8")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-9")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-10"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-11")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-12")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-13")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-14"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-15")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-16")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-17")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-18"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-19")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-20")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-21")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-22"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-23")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-24")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-25")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-26"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-27")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-28")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-29")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-30"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-31")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-32")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-33")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-34")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-35"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-36")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-37")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-38")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-39")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-40")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-41")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-42")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-43"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-44")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-45")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-46")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-47"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-48")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-49")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-50")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-51"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-52")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-53")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-54")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-55"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-56")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-57")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-58")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-59"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-60")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-61")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-62")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-63"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-64")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-65")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-66")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-67")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-68")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-69"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-70")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-71")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-72")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-73"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-74")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-75")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-76")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-77"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-78")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-79")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-80")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-81"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-82")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-83")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-84")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-85"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-86")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-87")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-88")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-89"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-90")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-91")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-92")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-93"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-94")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-95")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-96")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-97")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-98")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-99"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-100")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-101")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-102")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-103"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-104")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-105")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-106"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-107")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-108")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-109")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-110"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-111")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-112")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-113")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-114"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-115")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-116")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-117")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-118")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-119")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-120"))}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-121")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-122")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2021-123")}</span>
                                                            </li>
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {(t("StartHistory.2021-124"))}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
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
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
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