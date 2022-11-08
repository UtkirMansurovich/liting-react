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
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
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
                                                            <li className="fs-14 text-light-white">
                                                                <span className="text-light-white"> {t("StartHistory.2016-32")}</span>
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