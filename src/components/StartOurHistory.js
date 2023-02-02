import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import { AppContext } from "../context";

const StartOurHistory = () => {
    const { t } = useTranslation();
    const {selectFontBig, selectFontSmall} = useContext(AppContext);

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
                        <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? 'text-custom-white' : "fs-20 text-custom-white"}>
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
                                    <a className={selectFontBig ? "fs-26 nav-link active" : selectFontSmall ? 'nav-link active' : 'fs-20 nav-link active'} data-toggle="tab" href="#start">2008 - 2012</a>
                                </li>
                                <li className="nav-item">
                                    <a className={selectFontBig ? "fs-26 nav-link" : selectFontSmall ? 'nav-link' : 'fs-20 nav-link'} data-toggle="tab" href="#setup">2013 - 2017</a>
                                </li>
                                <li className="nav-item">
                                    <a className={selectFontBig ? "fs-26 nav-link" : selectFontSmall ? 'nav-link' : 'fs-20 nav-link'} data-toggle="tab" href="#medium">2018 - 2021</a>
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
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "text-custom-black fw-600 text-center mb-1 fs-22" : "text-custom-black fw-600 text-center mb-1 fs-22"}>{t("StartHistory.2008")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2008-1")} </li>
                                                            <li>{t("StartHistory.2008-2")} </li>
                                                            <li>{t("StartHistory.2008-3")} </li>
                                                            <li>{t("StartHistory.2008-4")} </li>
                                                            <li>{t("StartHistory.2008-5")} </li>
                                                            <li>{t("StartHistory.2008-6")} </li>
                                                            <li>{t("StartHistory.2008-7")} </li>
                                                            <li>{t("StartHistory.2008-8")} </li>
                                                            <li>{t("StartHistory.2008-9")} </li>
                                                            <li>{t("StartHistory.2008-10")}</li>
                                                            <li>{t("StartHistory.2008-11")}</li>
                                                            <li>{t("StartHistory.2008-12")}</li>
                                                            <li>{t("StartHistory.2008-13")}</li>
                                                            <li>{t("StartHistory.2008-14")}</li>
                                                            <li>{t("StartHistory.2008-15")}</li>
                                                            <li>{t("StartHistory.2008-16")}</li>
                                                            <li>{t("StartHistory.2008-17")}</li>
                                                            <li>{t("StartHistory.2008-18")}</li>
                                                            <li>{t("StartHistory.2008-19")}</li>
                                                            <li>{t("StartHistory.2008-20")}</li>
                                                            <li>{t("StartHistory.2008-21")}</li>
                                                            <li>{t("StartHistory.2008-22")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "text-custom-black fw-600 text-center mb-1 fs-26" : selectFontSmall ? "text-custom-black fw-600 text-center mb-1 fs-22" : "text-custom-black fw-600 text-center mb-1 fs-22"}>{t("StartHistory.2009")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2009-1")} </li>
                                                            <li>{t("StartHistory.2009-2")} </li>
                                                            <li>{t("StartHistory.2009-3")} </li>
                                                            <li>{t("StartHistory.2009-4")} </li>
                                                            <li>{t("StartHistory.2009-5")} </li>
                                                            <li>{t("StartHistory.2009-6")} </li>
                                                            <li>{t("StartHistory.2009-7")} </li>
                                                            <li>{t("StartHistory.2009-8")} </li>
                                                            <li>{t("StartHistory.2009-9")} </li>
                                                            <li>{t("StartHistory.2009-10")}</li>
                                                            <li>{t("StartHistory.2009-11")}</li>
                                                            <li>{t("StartHistory.2009-12")}</li>
                                                            <li>{t("StartHistory.2009-13")}</li>
                                                            <li>{t("StartHistory.2009-14")}</li>
                                                            <li>{t("StartHistory.2009-15")}</li>
                                                            <li>{t("StartHistory.2009-16")}</li>
                                                            <li>{t("StartHistory.2009-17")}</li>
                                                            <li>{t("StartHistory.2009-18")}</li>
                                                            <li>{t("StartHistory.2009-19")}</li>
                                                            <li>{t("StartHistory.2009-20")}</li>
                                                            <li>{t("StartHistory.2009-21")}</li>
                                                            <li>{t("StartHistory.2009-22")}</li>
                                                            <li>{t("StartHistory.2009-23")}</li>
                                                            <li>{t("StartHistory.2009-24")}</li>
                                                            <li>{t("StartHistory.2009-25")}</li>
                                                            <li>{t("StartHistory.2009-26")}</li>
                                                            <li>{t("StartHistory.2009-27")}</li>
                                                            <li>{t("StartHistory.2009-28")}</li>
                                                            <li>{t("StartHistory.2009-29")}</li>
                                                            <li>{t("StartHistory.2009-30")}</li>
                                                            <li>{t("StartHistory.2009-31")}</li>
                                                            <li>{t("StartHistory.2009-32")}</li>
                                                            <li>{t("StartHistory.2009-33")}</li>
                                                            <li>{t("StartHistory.2009-34")}</li>
                                                            <li>{t("StartHistory.2009-35")}</li>
                                                            <li>{t("StartHistory.2009-36")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "text-custom-black fw-600 text-center mb-1 fs-26" : selectFontSmall ? "text-custom-black fw-600 text-center mb-1 fs-22" : "text-custom-black fw-600 text-center mb-1 fs-22"}>{t("StartHistory.2010")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2010-1")} </li>
                                                            <li>{t("StartHistory.2010-2")} </li>
                                                            <li>{t("StartHistory.2010-3")} </li>
                                                            <li>{t("StartHistory.2010-4")} </li>
                                                            <li>{t("StartHistory.2010-5")} </li>
                                                            <li>{t("StartHistory.2010-6")} </li>
                                                            <li>{t("StartHistory.2010-7")} </li>
                                                            <li>{t("StartHistory.2010-8")} </li>
                                                            <li>{t("StartHistory.2010-9")} </li>
                                                            <li>{t("StartHistory.2010-10")}</li>
                                                            <li>{t("StartHistory.2010-11")}</li>
                                                            <li>{t("StartHistory.2010-12")}</li>
                                                            <li>{t("StartHistory.2010-13")}</li>
                                                            <li>{t("StartHistory.2010-14")}</li>
                                                            <li>{t("StartHistory.2010-15")}</li>
                                                            <li>{t("StartHistory.2010-16")}</li>
                                                            <li>{t("StartHistory.2010-17")}</li>
                                                            <li>{t("StartHistory.2010-18")}</li>
                                                            <li>{t("StartHistory.2010-19")}</li>
                                                            <li>{t("StartHistory.2010-20")}</li>
                                                            <li>{t("StartHistory.2010-21")}</li>
                                                            <li>{t("StartHistory.2010-22")}</li>
                                                            <li>{t("StartHistory.2010-23")}</li>
                                                            <li>{t("StartHistory.2010-24")}</li>
                                                            <li>{t("StartHistory.2010-25")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "text-custom-black fw-600 text-center mb-1 fs-26" : selectFontSmall ? "text-custom-black fw-600 text-center mb-1 fs-22" : "text-custom-black fw-600 text-center mb-1 fs-22"}>{t("StartHistory.2011")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2011-1")} </li>
                                                            <li>{t("StartHistory.2011-2")} </li>
                                                            <li>{t("StartHistory.2011-3")} </li>
                                                            <li>{t("StartHistory.2011-4")} </li>
                                                            <li>{t("StartHistory.2011-5")} </li>
                                                            <li>{t("StartHistory.2011-6")} </li>
                                                            <li>{t("StartHistory.2011-7")} </li>
                                                            <li>{t("StartHistory.2011-8")} </li>
                                                            <li>{t("StartHistory.2011-9")} </li>
                                                            <li>{t("StartHistory.2011-10")}</li>
                                                            <li>{t("StartHistory.2011-11")}</li>
                                                            <li>{t("StartHistory.2011-12")}</li>
                                                            <li>{t("StartHistory.2011-13")}</li>
                                                            <li>{t("StartHistory.2011-14")}</li>
                                                            <li>{t("StartHistory.2011-15")}</li>
                                                            <li>{t("StartHistory.2011-16")}</li>
                                                            <li>{t("StartHistory.2011-17")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "text-custom-black fw-600 text-center mb-1 fs-26" : selectFontSmall ? "text-custom-black fw-600 text-center mb-1 fs-22" : "text-custom-black fw-600 text-center mb-1 fs-22"}>{t("StartHistory.2012")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.cardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.cardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2012-1")} </li>
                                                            <li>{t("StartHistory.2012-2")} </li>
                                                            <li>{t("StartHistory.2012-3")} </li>
                                                            <li>{t("StartHistory.2012-4")} </li>
                                                            <li>{t("StartHistory.2012-5")} </li>
                                                            <li>{t("StartHistory.2012-6")} </li>
                                                            <li>{t("StartHistory.2012-7")} </li>
                                                            <li>{t("StartHistory.2012-8")} </li>
                                                            <li>{t("StartHistory.2012-9")} </li>
                                                            <li>{t("StartHistory.2012-10")}</li>
                                                            <li>{t("StartHistory.2012-11")}</li>
                                                            <li>{t("StartHistory.2012-12")}</li>
                                                            <li>{t("StartHistory.2012-13")}</li>
                                                            <li>{t("StartHistory.2012-14")}</li>
                                                            <li>{t("StartHistory.2012-15")}</li>
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
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "text-custom-black fw-600 text-center mb-1 fs-22" : "text-custom-black fw-600 text-center mb-1 fs-22"}>{t("StartHistory.2013")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2013-1")} </li>
                                                            <li>{t("StartHistory.2013-2")} </li>
                                                            <li>{t("StartHistory.2013-3")} </li>
                                                            <li>{t("StartHistory.2013-4")} </li>
                                                            <li>{t("StartHistory.2013-5")} </li>
                                                            <li>{t("StartHistory.2013-6")} </li>
                                                            <li>{t("StartHistory.2013-7")} </li>
                                                            <li>{t("StartHistory.2013-8")} </li>
                                                            <li>{t("StartHistory.2013-9")} </li>
                                                            <li>{t("StartHistory.2013-10")}</li>
                                                            <li>{t("StartHistory.2013-11")}</li>
                                                            <li>{t("StartHistory.2013-12")}</li>
                                                            <li>{t("StartHistory.2013-13")}</li>
                                                            <li>{t("StartHistory.2013-14")}</li>
                                                            <li>{t("StartHistory.2013-15")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2014")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2014-1")} </li>
                                                            <li>{t("StartHistory.2014-2")} </li>
                                                            <li>{t("StartHistory.2014-3")} </li>
                                                            <li>{t("StartHistory.2014-4")} </li>
                                                            <li>{t("StartHistory.2014-5")} </li>
                                                            <li>{t("StartHistory.2014-6")} </li>
                                                            <li>{t("StartHistory.2014-7")} </li>
                                                            <li>{t("StartHistory.2014-8")} </li>
                                                            <li>{t("StartHistory.2014-9")} </li>
                                                            <li>{t("StartHistory.2014-10")}</li>
                                                            <li>{t("StartHistory.2014-11")}</li>
                                                            <li>{t("StartHistory.2014-12")}</li>
                                                            <li>{t("StartHistory.2014-13")}</li>
                                                            <li>{t("StartHistory.2014-14")}</li>
                                                            <li>{t("StartHistory.2014-15")}</li>
                                                            <li>{t("StartHistory.2014-16")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2015")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2015-1")} </li>
                                                            <li>{t("StartHistory.2015-2")} </li>
                                                            <li>{t("StartHistory.2015-3")} </li>
                                                            <li>{t("StartHistory.2015-4")} </li>
                                                            <li>{t("StartHistory.2015-5")} </li>
                                                            <li>{t("StartHistory.2015-6")} </li>
                                                            <li>{t("StartHistory.2015-7")} </li>
                                                            <li>{t("StartHistory.2015-8")} </li>
                                                            <li>{t("StartHistory.2015-9")} </li>
                                                            <li>{t("StartHistory.2015-10")}</li>
                                                            <li>{t("StartHistory.2015-11")}</li>
                                                            <li>{t("StartHistory.2015-12")}</li>
                                                            <li>{t("StartHistory.2015-13")}</li>
                                                            <li>{t("StartHistory.2015-14")}</li>
                                                            <li>{t("StartHistory.2015-15")}</li>
                                                            <li>{t("StartHistory.2015-16")}</li>
                                                            <li>{t("StartHistory.2015-17")}</li>
                                                            <li>{t("StartHistory.2015-18")}</li>
                                                            <li>{t("StartHistory.2015-19")}</li>
                                                            <li>{t("StartHistory.2015-20")}</li>
                                                            <li>{t("StartHistory.2015-21")}</li>
                                                            <li>{t("StartHistory.2015-22")}</li>
                                                            <li>{t("StartHistory.2015-23")}</li>
                                                            <li>{t("StartHistory.2015-24")}</li>
                                                            <li>{t("StartHistory.2015-25")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2016")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2016-1")} </li>
                                                            <li>{t("StartHistory.2016-2")} </li>
                                                            <li>{t("StartHistory.2016-3")} </li>
                                                            <li>{t("StartHistory.2016-4")} </li>
                                                            <li>{t("StartHistory.2016-5")} </li>
                                                            <li>{t("StartHistory.2016-6")} </li>
                                                            <li>{t("StartHistory.2016-7")} </li>
                                                            <li>{t("StartHistory.2016-8")} </li>
                                                            <li>{t("StartHistory.2016-9")} </li>
                                                            <li>{t("StartHistory.2016-10")}</li>
                                                            <li>{t("StartHistory.2016-11")}</li>
                                                            <li>{t("StartHistory.2016-12")}</li>
                                                            <li>{t("StartHistory.2016-13")}</li>
                                                            <li>{t("StartHistory.2016-14")}</li>
                                                            <li>{t("StartHistory.2016-15")}</li>
                                                            <li>{t("StartHistory.2016-16")}</li>
                                                            <li>{t("StartHistory.2016-17")}</li>
                                                            <li>{t("StartHistory.2016-18")}</li>
                                                            <li>{t("StartHistory.2016-19")}</li>
                                                            <li>{t("StartHistory.2016-20")}</li>
                                                            <li>{t("StartHistory.2016-21")}</li>
                                                            <li>{t("StartHistory.2016-22")}</li>
                                                            <li>{t("StartHistory.2016-23")}</li>
                                                            <li>{t("StartHistory.2016-24")}</li>
                                                            <li>{t("StartHistory.2016-25")}</li>
                                                            <li>{t("StartHistory.2016-26")}</li>
                                                            <li>{t("StartHistory.2016-27")}</li>
                                                            <li>{t("StartHistory.2016-28")}</li>
                                                            <li>{t("StartHistory.2016-29")}</li>
                                                            <li>{t("StartHistory.2016-30")}</li>
                                                            <li>{t("StartHistory.2016-31")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2017")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.secondCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.secondCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul  style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2017-1")} </li>
                                                            <li>{t("StartHistory.2017-2")} </li>
                                                            <li>{t("StartHistory.2017-3")} </li>
                                                            <li>{t("StartHistory.2017-4")} </li>
                                                            <li>{t("StartHistory.2017-5")} </li>
                                                            <li>{t("StartHistory.2017-6")} </li>
                                                            <li>{t("StartHistory.2017-7")} </li>
                                                            <li>{t("StartHistory.2017-8")} </li>
                                                            <li>{t("StartHistory.2017-9")} </li>
                                                            <li>{t("StartHistory.2017-10")}</li>
                                                            <li>{t("StartHistory.2017-11")}</li>
                                                            <li>{t("StartHistory.2017-12")}</li>
                                                            <li>{t("StartHistory.2017-13")}</li>
                                                            <li>{t("StartHistory.2017-14")}</li>
                                                            <li>{t("StartHistory.2017-15")}</li>
                                                            <li>{t("StartHistory.2017-16")}</li>
                                                            <li>{t("StartHistory.2017-17")}</li>
                                                            <li>{t("StartHistory.2017-18")}</li>
                                                            <li>{t("StartHistory.2017-19")}</li>
                                                            <li>{t("StartHistory.2017-20")}</li>
                                                            <li>{t("StartHistory.2017-21")}</li>
                                                            <li>{t("StartHistory.2017-22")}</li>
                                                            <li>{t("StartHistory.2017-23")}</li>
                                                            <li>{t("StartHistory.2017-24")}</li>
                                                            <li>{t("StartHistory.2017-25")}</li>
                                                            <li>{t("StartHistory.2017-26")}</li>
                                                            <li>{t("StartHistory.2017-27")}</li>
                                                            <li>{t("StartHistory.2017-28")}</li>
                                                            <li>{t("StartHistory.2017-29")}</li>
                                                            <li>{t("StartHistory.2017-30")}</li>
                                                            <li>{t("StartHistory.2017-31")}</li>
                                                            <li>{t("StartHistory.2017-32")}</li>
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
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2018")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2018-1")} </li>
                                                            <li>{t("StartHistory.2018-2")} </li>
                                                            <li>{t("StartHistory.2018-3")} </li>
                                                            <li>{t("StartHistory.2018-4")} </li>
                                                            <li>{t("StartHistory.2018-5")} </li>
                                                            <li>{t("StartHistory.2018-6")} </li>
                                                            <li>{t("StartHistory.2018-7")} </li>
                                                            <li>{t("StartHistory.2018-8")} </li>
                                                            <li>{t("StartHistory.2018-8")} </li>
                                                            <li>{t("StartHistory.2018-9")} </li>
                                                            <li>{t("StartHistory.2018-10")}</li>
                                                            <li>{t("StartHistory.2018-11")}</li>
                                                            <li>{t("StartHistory.2018-12")}</li>
                                                            <li>{t("StartHistory.2018-13")}</li>
                                                            <li>{t("StartHistory.2018-14")}</li>
                                                            <li>{t("StartHistory.2018-15")}</li>
                                                            <li>{t("StartHistory.2018-16")}</li>
                                                            <li>{t("StartHistory.2018-17")}</li>
                                                            <li>{t("StartHistory.2018-18")}</li>
                                                            <li>{t("StartHistory.2018-19")}</li>
                                                            <li>{t("StartHistory.2018-20")}</li>
                                                            <li>{t("StartHistory.2018-21")}</li>
                                                            <li>{t("StartHistory.2018-22")}</li>
                                                            <li>{t("StartHistory.2018-23")}</li>
                                                            <li>{t("StartHistory.2018-24")}</li>
                                                            <li>{t("StartHistory.2018-25")}</li>
                                                            <li>{t("StartHistory.2018-26")}</li>
                                                            <li>{t("StartHistory.2018-27")}</li>
                                                            <li>{t("StartHistory.2018-28")}</li>
                                                            <li>{t("StartHistory.2018-29")}</li>
                                                            <li>{t("StartHistory.2018-30")}</li>
                                                            <li>{t("StartHistory.2018-31")}</li>
                                                            <li>{t("StartHistory.2018-32")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2019")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2019-1")} </li>
                                                            <li>{t("StartHistory.2019-2")} </li>
                                                            <li>{t("StartHistory.2019-3")} </li>
                                                            <li>{t("StartHistory.2019-4")} </li>
                                                            <li>{t("StartHistory.2019-5")} </li>
                                                            <li>{t("StartHistory.2019-6")} </li>
                                                            <li>{t("StartHistory.2019-7")} </li>
                                                            <li>{t("StartHistory.2019-8")} </li>
                                                            <li>{t("StartHistory.2019-9")} </li>
                                                            <li>{t("StartHistory.2019-10")}</li>
                                                            <li>{t("StartHistory.2019-11")}</li>
                                                            <li>{t("StartHistory.2019-12")}</li>
                                                            <li>{t("StartHistory.2019-13")}</li>
                                                            <li>{t("StartHistory.2019-14")}</li>
                                                            <li>{t("StartHistory.2019-15")}</li>
                                                            <li>{t("StartHistory.2019-16")}</li>
                                                            <li>{t("StartHistory.2019-17")}</li>
                                                            <li>{t("StartHistory.2019-18")}</li>
                                                            <li>{t("StartHistory.2019-19")}</li>
                                                            <li>{t("StartHistory.2019-20")}</li>
                                                            <li>{t("StartHistory.2019-21")}</li>
                                                            <li>{t("StartHistory.2019-22")}</li>
                                                            <li>{t("StartHistory.2019-23")}</li>
                                                            <li>{t("StartHistory.2019-24")}</li>
                                                            <li>{t("StartHistory.2019-25")}</li>
                                                            <li>{t("StartHistory.2019-26")}</li>
                                                            <li>{t("StartHistory.2019-27")}</li>
                                                            <li>{t("StartHistory.2019-28")}</li>
                                                            <li>{t("StartHistory.2019-29")}</li>
                                                            <li>{t("StartHistory.2019-30")}</li>
                                                            <li>{t("StartHistory.2019-31")}</li>
                                                            <li>{t("StartHistory.2019-32")}</li>
                                                            <li>{t("StartHistory.2019-33")}</li>
                                                            <li>{t("StartHistory.2019-34")}</li>
                                                            <li>{t("StartHistory.2019-35")}</li>
                                                            <li>{t("StartHistory.2019-36")}</li>
                                                            <li>{t("StartHistory.2019-37")}</li>
                                                            <li>{t("StartHistory.2019-38")}</li>
                                                            <li>{t("StartHistory.2019-39")}</li>
                                                            <li>{t("StartHistory.2019-40")}</li>
                                                            <li>{t("StartHistory.2019-41")}</li>
                                                            <li>{t("StartHistory.2019-42")}</li>
                                                            <li>{t("StartHistory.2019-43")}</li>
                                                            <li>{t("StartHistory.2019-44")}</li>
                                                            <li>{t("StartHistory.2019-45")}</li>
                                                            <li>{t("StartHistory.2019-46")}</li>
                                                            <li>{t("StartHistory.2019-47")}</li>
                                                            <li>{t("StartHistory.2019-48")}</li>
                                                            <li>{t("StartHistory.2019-49")}</li>
                                                            <li>{t("StartHistory.2019-50")}</li>
                                                            <li>{t("StartHistory.2019-51")}</li>
                                                            <li>{t("StartHistory.2019-52")}</li>
                                                            <li>{t("StartHistory.2019-53")}</li>
                                                            <li>{t("StartHistory.2019-54")}</li>
                                                            <li>{t("StartHistory.2019-55")}</li>
                                                            <li>{t("StartHistory.2019-56")}</li>
                                                            <li>{t("StartHistory.2019-57")}</li>
                                                            <li>{t("StartHistory.2019-58")}</li>
                                                            <li>{t("StartHistory.2019-59")}</li>
                                                            <li>{t("StartHistory.2019-60")}</li>
                                                            <li>{t("StartHistory.2019-61")}</li>
                                                            <li>{t("StartHistory.2019-62")}</li>
                                                            <li>{t("StartHistory.2019-63")}</li>
                                                            <li>{t("StartHistory.2019-64")}</li>
                                                            <li>{t("StartHistory.2019-65")}</li>
                                                            <li>{t("StartHistory.2019-66")}</li>
                                                            <li>{t("StartHistory.2019-67")}</li>
                                                            <li>{t("StartHistory.2019-68")}</li>
                                                            <li>{t("StartHistory.2019-69")}</li>
                                                            <li>{t("StartHistory.2019-70")}</li>
                                                            <li>{t("StartHistory.2019-71")}</li>
                                                            <li>{t("StartHistory.2019-72")}</li>
                                                            <li>{t("StartHistory.2019-73")}</li>
                                                            <li>{t("StartHistory.2019-74")}</li>
                                                        </ul>                                                   
                                                    <div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2020")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2020-1")}  </li>
                                                            <li>{t("StartHistory.2020-2")}  </li>
                                                            <li>{t("StartHistory.2020-3")}  </li>
                                                            <li>{t("StartHistory.2020-4")}  </li>
                                                            <li>{t("StartHistory.2020-5")}  </li>
                                                            <li>{t("StartHistory.2020-6")}  </li>
                                                            <li>{t("StartHistory.2020-7")}  </li>
                                                            <li>{t("StartHistory.2020-8")}  </li>
                                                            <li>{t("StartHistory.2020-9")}  </li>
                                                            <li>{t("StartHistory.2020-10")} </li>
                                                            <li>{t("StartHistory.2020-11")} </li>
                                                            <li>{t("StartHistory.2020-12")} </li>
                                                            <li>{t("StartHistory.2020-13")} </li>
                                                            <li>{t("StartHistory.2020-14")} </li>
                                                            <li>{t("StartHistory.2020-15")} </li>
                                                            <li>{t("StartHistory.2020-16")} </li>
                                                            <li>{t("StartHistory.2020-17")} </li>
                                                            <li>{t("StartHistory.2020-18")} </li>
                                                            <li>{t("StartHistory.2020-19")} </li>
                                                            <li>{t("StartHistory.2020-20")} </li>
                                                            <li>{t("StartHistory.2020-21")} </li>
                                                            <li>{t("StartHistory.2020-22")} </li>
                                                            <li>{t("StartHistory.2020-23")} </li>
                                                            <li>{t("StartHistory.2020-24")} </li>
                                                            <li>{t("StartHistory.2020-25")} </li>
                                                            <li>{t("StartHistory.2020-26")} </li>
                                                            <li>{t("StartHistory.2020-27")} </li>
                                                            <li>{t("StartHistory.2020-28")} </li>
                                                            <li>{t("StartHistory.2020-29")} </li>
                                                            <li>{t("StartHistory.2020-30")} </li>
                                                            <li>{t("StartHistory.2020-31")} </li>
                                                            <li>{t("StartHistory.2020-32")} </li>
                                                            <li>{t("StartHistory.2020-33")} </li>
                                                            <li>{t("StartHistory.2020-34")} </li>
                                                            <li>{t("StartHistory.2020-35")} </li>
                                                            <li>{t("StartHistory.2020-36")} </li>
                                                            <li>{t("StartHistory.2020-37")} </li>
                                                            <li>{t("StartHistory.2020-38")} </li>
                                                            <li>{t("StartHistory.2020-39")} </li>
                                                            <li>{t("StartHistory.2020-40")} </li>
                                                            <li>{t("StartHistory.2020-41")} </li>
                                                            <li>{t("StartHistory.2020-42")} </li>
                                                            <li>{t("StartHistory.2020-43")} </li>
                                                            <li>{t("StartHistory.2020-44")} </li>
                                                            <li>{t("StartHistory.2020-45")} </li>
                                                            <li>{t("StartHistory.2020-46")} </li>
                                                            <li>{t("StartHistory.2020-47")} </li>
                                                            <li>{t("StartHistory.2020-48")} </li>
                                                            <li>{t("StartHistory.2020-49")} </li>
                                                            <li>{t("StartHistory.2020-50")} </li>
                                                            <li>{t("StartHistory.2020-51")} </li>
                                                            <li>{t("StartHistory.2020-52")} </li>
                                                            <li>{t("StartHistory.2020-53")} </li>
                                                            <li>{t("StartHistory.2020-54")} </li>
                                                            <li>{t("StartHistory.2020-55")} </li>
                                                            <li>{t("StartHistory.2020-56")} </li>
                                                            <li>{t("StartHistory.2020-57")} </li>
                                                            <li>{t("StartHistory.2020-58")} </li>
                                                            <li>{t("StartHistory.2020-59")} </li>
                                                            <li>{t("StartHistory.2020-60")} </li>
                                                            <li>{t("StartHistory.2020-61")} </li>
                                                            <li>{t("StartHistory.2020-62")} </li>
                                                            <li>{t("StartHistory.2020-63")} </li>
                                                            <li>{t("StartHistory.2020-64")} </li>
                                                            <li>{t("StartHistory.2020-65")} </li>
                                                            <li>{t("StartHistory.2020-66")} </li>
                                                            <li>{t("StartHistory.2020-67")} </li>
                                                            <li>{t("StartHistory.2020-68")} </li>
                                                            <li>{t("StartHistory.2020-69")} </li>
                                                            <li>{t("StartHistory.2020-70")} </li>
                                                            <li>{t("StartHistory.2020-71")} </li>
                                                            <li>{t("StartHistory.2020-72")} </li>
                                                            <li>{t("StartHistory.2020-73")} </li>
                                                            <li>{t("StartHistory.2020-74")} </li>
                                                            <li>{t("StartHistory.2020-75")} </li>
                                                            <li>{t("StartHistory.2020-76")} </li>
                                                            <li>{t("StartHistory.2020-77")} </li>
                                                            <li>{t("StartHistory.2020-78")} </li>
                                                            <li>{t("StartHistory.2020-79")} </li>
                                                            <li>{t("StartHistory.2020-80")} </li>
                                                            <li>{t("StartHistory.2020-81")} </li>
                                                            <li>{t("StartHistory.2020-82")} </li>
                                                            <li>{t("StartHistory.2020-83")} </li>
                                                            <li>{t("StartHistory.2020-84")} </li>
                                                            <li>{t("StartHistory.2020-85")} </li>
                                                            <li>{t("StartHistory.2020-86")} </li>
                                                            <li>{t("StartHistory.2020-87")} </li>
                                                            <li>{t("StartHistory.2020-88")} </li>
                                                            <li>{t("StartHistory.2020-89")} </li>
                                                            <li>{t("StartHistory.2020-90")} </li>
                                                            <li>{t("StartHistory.2020-91")} </li>
                                                            <li>{t("StartHistory.2020-92")} </li>
                                                            <li>{t("StartHistory.2020-93")} </li>
                                                            <li>{t("StartHistory.2020-94")} </li>
                                                            <li>{t("StartHistory.2020-95")} </li>
                                                            <li>{t("StartHistory.2020-96")} </li>
                                                            <li>{t("StartHistory.2020-97")} </li>
                                                            <li>{t("StartHistory.2020-98")} </li>
                                                            <li>{t("StartHistory.2020-99")} </li>
                                                            <li>{t("StartHistory.2020-100")}</li>
                                                            <li>{t("StartHistory.2020-101")}</li>
                                                            <li>{t("StartHistory.2020-102")}</li>
                                                            <li>{t("StartHistory.2020-103")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>

                                                <div className="content-box mb-2">
                                                    <h4 className={selectFontBig ? "fs-26 text-custom-black fw-600 text-center mb-1" : selectFontSmall ? "fs-22 text-custom-black fw-600 text-center mb-1" : "fs-22 text-custom-black fw-600 text-center mb-1"}>{t("StartHistory.2021")}</h4>
                                                    {/* <p className="text-custom-blue mb-xl-20">{t("StartHistory.thirdCardTextFirst")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextSecond")}</p>
                                                    <p className="text-light-white mb-xl-20">{t("StartHistory.thirdCardTextThird")}</p> */}
                                                    <div className={selectFontBig ? "list fs-26 text-light-white lh-15" : selectFontSmall ? "list fs-13 text-light-white lh-15" : "list fs-20 text-light-white lh-15"}>
                                                        <ul style={{listStyle: 'block', padding:'0 0 0 20px'}}>
                                                            <li>{t("StartHistory.2021-1")}  </li>
                                                            <li>{t("StartHistory.2021-2")}  </li>
                                                            <li>{t("StartHistory.2021-3")}  </li>
                                                            <li>{t("StartHistory.2021-4")}  </li>
                                                            <li>{t("StartHistory.2021-5")}  </li>
                                                            <li>{t("StartHistory.2021-6")}  </li>
                                                            <li>{t("StartHistory.2021-7")}  </li>
                                                            <li>{t("StartHistory.2021-8")}  </li>
                                                            <li>{t("StartHistory.2021-9")}  </li>
                                                            <li>{t("StartHistory.2021-10")} </li>
                                                            <li>{t("StartHistory.2021-11")} </li>
                                                            <li>{t("StartHistory.2021-12")} </li>
                                                            <li>{t("StartHistory.2021-13")} </li>
                                                            <li>{t("StartHistory.2021-14")} </li>
                                                            <li>{t("StartHistory.2021-15")} </li>
                                                            <li>{t("StartHistory.2021-16")} </li>
                                                            <li>{t("StartHistory.2021-17")} </li>
                                                            <li>{t("StartHistory.2021-18")} </li>
                                                            <li>{t("StartHistory.2021-19")} </li>
                                                            <li>{t("StartHistory.2021-20")} </li>
                                                            <li>{t("StartHistory.2021-21")} </li>
                                                            <li>{t("StartHistory.2021-22")} </li>
                                                            <li>{t("StartHistory.2021-23")} </li>
                                                            <li>{t("StartHistory.2021-24")} </li>
                                                            <li>{t("StartHistory.2021-25")} </li>
                                                            <li>{t("StartHistory.2021-26")} </li>
                                                            <li>{t("StartHistory.2021-27")} </li>
                                                            <li>{t("StartHistory.2021-28")} </li>
                                                            <li>{t("StartHistory.2021-29")} </li>
                                                            <li>{t("StartHistory.2021-30")} </li>
                                                            <li>{t("StartHistory.2021-31")} </li>
                                                            <li>{t("StartHistory.2021-32")} </li>
                                                            <li>{t("StartHistory.2021-33")} </li>
                                                            <li>{t("StartHistory.2021-34")} </li>
                                                            <li>{t("StartHistory.2021-35")} </li>
                                                            <li>{t("StartHistory.2021-36")} </li>
                                                            <li>{t("StartHistory.2021-37")} </li>
                                                            <li>{t("StartHistory.2021-38")} </li>
                                                            <li>{t("StartHistory.2021-39")} </li>
                                                            <li>{t("StartHistory.2021-40")} </li>
                                                            <li>{t("StartHistory.2021-41")} </li>
                                                            <li>{t("StartHistory.2021-42")} </li>
                                                            <li>{t("StartHistory.2021-43")} </li>
                                                            <li>{t("StartHistory.2021-44")} </li>
                                                            <li>{t("StartHistory.2021-45")} </li>
                                                            <li>{t("StartHistory.2021-46")} </li>
                                                            <li>{t("StartHistory.2021-47")} </li>
                                                            <li>{t("StartHistory.2021-48")} </li>
                                                            <li>{t("StartHistory.2021-49")} </li>
                                                            <li>{t("StartHistory.2021-50")} </li>
                                                            <li>{t("StartHistory.2021-51")} </li>
                                                            <li>{t("StartHistory.2021-52")} </li>
                                                            <li>{t("StartHistory.2021-53")} </li>
                                                            <li>{t("StartHistory.2021-54")} </li>
                                                            <li>{t("StartHistory.2021-55")} </li>
                                                            <li>{t("StartHistory.2021-56")} </li>
                                                            <li>{t("StartHistory.2021-57")} </li>
                                                            <li>{t("StartHistory.2021-58")} </li>
                                                            <li>{t("StartHistory.2021-59")} </li>
                                                            <li>{t("StartHistory.2021-60")} </li>
                                                            <li>{t("StartHistory.2021-61")} </li>
                                                            <li>{t("StartHistory.2021-62")} </li>
                                                            <li>{t("StartHistory.2021-63")} </li>
                                                            <li>{t("StartHistory.2021-64")} </li>
                                                            <li>{t("StartHistory.2021-65")} </li>
                                                            <li>{t("StartHistory.2021-66")} </li>
                                                            <li>{t("StartHistory.2021-67")} </li>
                                                            <li>{t("StartHistory.2021-68")} </li>
                                                            <li>{t("StartHistory.2021-69")} </li>
                                                            <li>{t("StartHistory.2021-70")} </li>
                                                            <li>{t("StartHistory.2021-71")} </li>
                                                            <li>{t("StartHistory.2021-72")} </li>
                                                            <li>{t("StartHistory.2021-73")} </li>
                                                            <li>{t("StartHistory.2021-74")} </li>
                                                            <li>{t("StartHistory.2021-75")} </li>
                                                            <li>{t("StartHistory.2021-76")} </li>
                                                            <li>{t("StartHistory.2021-77")} </li>
                                                            <li>{t("StartHistory.2021-78")} </li>
                                                            <li>{t("StartHistory.2021-79")} </li>
                                                            <li>{t("StartHistory.2021-80")} </li>
                                                            <li>{t("StartHistory.2021-81")} </li>
                                                            <li>{t("StartHistory.2021-82")} </li>
                                                            <li>{t("StartHistory.2021-83")} </li>
                                                            <li>{t("StartHistory.2021-84")} </li>
                                                            <li>{t("StartHistory.2021-85")} </li>
                                                            <li>{t("StartHistory.2021-86")} </li>
                                                            <li>{t("StartHistory.2021-87")} </li>
                                                            <li>{t("StartHistory.2021-88")} </li>
                                                            <li>{t("StartHistory.2021-89")} </li>
                                                            <li>{t("StartHistory.2021-90")} </li>
                                                            <li>{t("StartHistory.2021-91")} </li>
                                                            <li>{t("StartHistory.2021-92")} </li>
                                                            <li>{t("StartHistory.2021-93")} </li>
                                                            <li>{t("StartHistory.2021-94")} </li>
                                                            <li>{t("StartHistory.2021-95")} </li>
                                                            <li>{t("StartHistory.2021-96")} </li>
                                                            <li>{t("StartHistory.2021-97")} </li>
                                                            <li>{t("StartHistory.2021-98")} </li>
                                                            <li>{t("StartHistory.2021-99")} </li>
                                                            <li>{t("StartHistory.2021-100")}</li>
                                                            <li>{t("StartHistory.2021-101")}</li>
                                                            <li>{t("StartHistory.2021-102")}</li>
                                                            <li>{t("StartHistory.2021-103")}</li>
                                                            <li>{t("StartHistory.2021-104")}</li>
                                                            <li>{t("StartHistory.2021-105")}</li>
                                                            <li>{t("StartHistory.2021-106")}</li>
                                                            <li>{t("StartHistory.2021-107")}</li>
                                                            <li>{t("StartHistory.2021-108")}</li>
                                                            <li>{t("StartHistory.2021-109")}</li>
                                                            <li>{t("StartHistory.2021-110")}</li>
                                                            <li>{t("StartHistory.2021-111")}</li>
                                                            <li>{t("StartHistory.2021-112")}</li>
                                                            <li>{t("StartHistory.2021-113")}</li>
                                                            <li>{t("StartHistory.2021-114")}</li>
                                                            <li>{t("StartHistory.2021-115")}</li>
                                                            <li>{t("StartHistory.2021-116")}</li>
                                                            <li>{t("StartHistory.2021-117")}</li>
                                                            <li>{t("StartHistory.2021-118")}</li>
                                                            <li>{t("StartHistory.2021-119")}</li>
                                                            <li>{t("StartHistory.2021-120")}</li>
                                                            <li>{t("StartHistory.2021-121")}</li>
                                                            <li>{t("StartHistory.2021-122")}</li>
                                                            <li>{t("StartHistory.2021-123")}</li>
                                                            <li>{t("StartHistory.2021-124")}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <a href="#" className="btn-first btn-submit mt-3">{t("StartHistory.readMore")}</a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <div className="tab-pane fade" id="advance">
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
                                </div> */}
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