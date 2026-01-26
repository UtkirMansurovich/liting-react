import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { AppContext } from "../context";

const StartFooter = () => {
    const { t } = useTranslation();
    const {selectFontBig, selectFontSmall} = useContext(AppContext);
    return(
        <>
        <footer className="bg-custom-black section-padding footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-box mb-md-80">
                            <div className="footer-heading">
                                <h4 className="text-custom-white no-margin">{t("StartFooter.link")}</h4>
                            </div>
                            <ul className="custom links">
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="https://minenergy.uz/ru" target="_blank" className="text-custom-white">{t("StartFooter.linkOne")}</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="https://ung.uz/" target="_blank" className="text-custom-white">{t("StartFooter.linkTwo")}</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="https://www.gov.uz/ru/" target="_blank" className="text-custom-white">{t("StartFooter.linkThree")}</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="https://my.gov.uz/ru" target="_blank" className="text-custom-white">{t("StartFooter.linkFour")}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-box mb-md-80">
                            <div className="footer-heading">
                                <h4 className="text-custom-white no-margin">{t("StartFooter.map")}</h4>
                            </div>
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.086675071735!2d69.27166511566874!3d41.30697800893857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b279606b233%3A0xaeeeb424d7001633!2sAO%20%22O&#39;ZLITINEFTGAZ%22!5e0!3m2!1suz!2str!4v1648109225004!5m2!1suz!2str"
                                    width="400" height="250" style={{border: '0'}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"> </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-box mb-xs-80">
                            <div className="footer-heading">
                                <h4 className="text-custom-white no-margin">{t("StartFooter.contact")}</h4>
                            </div>
                            <ul className="custom links">
                                <li>
                                    <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartFooter.contactOne")}</p>
                                </li>
                                <li>
                                    <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartFooter.contactTwo")}</p>
                                </li>
                                <li>
                                    <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartFooter.contactThree")}</p>
                                </li>
                                <li>
                                    <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartFooter.contactFour")}</p>
                                </li>
                                <li>
                                    <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartFooter.contactFive")}</p>
                                </li>
                                <li>
                                    <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartFooter.contactSix")}</p>
                                </li>
                                <li>
                                    <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartFooter.contactSeven")}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-box mb-xs-80">
                            <div className="footer-heading">
                                <h4 className="text-custom-white no-margin ">{t("StartFooter.phone")}</h4>
                            </div>
                            <ul className="custom phoneContact">
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="tel:+998712806700" className="text-custom-white">(+998 71) 280-67-00</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="tel:+998712806705" className="text-custom-white">(+998 71) 280-67-26</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="tel:+998712806726" className="text-custom-white">(+998 71) 280-67-26</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="tel:+998712806711" className="text-custom-white">(+998 71) 280-67-11</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="tel:+998712806711" className="text-custom-white">(+998 71) 280-67-11</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="mailto:liting@liting.uz" className="text-custom-white" target="_blank">liting@liting.uz</a>
                                </li>
                                <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                    <a href="coming-soon.html" className="text-custom-white">{t("StartFooter.workTime")}: 8:00 - 17:00</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className={selectFontBig ? "fs-26 text-custom-white no-margin text-center" : selectFontSmall ? "text-custom-white no-margin text-center" : "fs-20 text-custom-white no-margin text-center"}>{t("StartFooter.footerBelowCopyRight")} © {new Date().getFullYear()} <Link to="/" target="_blank" className="text-custom-white">{t("StartFooter.footerBelowText")}</Link> {t("StartFooter.footerBelowTextOne")}</p>
                        <p className={selectFontBig ? "fs-26 text-custom-white no-margin text-center" : selectFontSmall ? "text-custom-white no-margin text-center" : "fs-20 text-custom-white no-margin text-center"}>{t("StartFooter.footerBelowTextTwo")}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default StartFooter