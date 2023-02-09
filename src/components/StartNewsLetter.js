import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import { AppContext } from "../context";

const StartNewsLetter = () => {
    const { t } = useTranslation();
    const {selectFontBig, selectFontSmall} = useContext(AppContext);

    return(
        <section className="section-padding bg-call-to-action">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        <h5 className={selectFontBig ? "fs-26 text-custom-blue wow fadeInUp" : selectFontSmall ? "text-custom-blue wow fadeInUp" : "fs-20 text-custom-blue wow fadeInUp"} data-wow-duration="1s" data-wow-delay="0.3s">{t("StartNewsLetter.freeConsultation")}</h5>
                        <h3 className="text-custom-white fw-700">{t("StartNewsLetter.title")}</h3>
                    </div>
                    <div className="section-description">
                        <p className={selectFontBig ? "fs-26 text-custom-white" : selectFontSmall ? "text-custom-white" : "fs-20 text-custom-white"}>{t("StartNewsLetter.text")}</p>
                    </div>
                </div>
                <div className="row consult-form">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <input type="text" name="#" className="form-control form-control-custom" placeholder={t("StartNewsLetter.yourName")}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <input type="email" name="#" className="form-control form-control-custom" placeholder={t("StartNewsLetter.yourEmail")}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <input type="text" name="#" className="form-control form-control-custom" placeholder={t("StartNewsLetter.yourNumber")}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <select className="form-control form-control-custom custom-select">
                                <option>{t("StartNewsLetter.select")}</option>
                                <option>{t("StartNewsLetter.selectOne")}</option>
                                <option>{t("StartNewsLetter.selectTwo")}</option>
                                <option>{t("StartNewsLetter.selectThree")}</option>
                                <option>{t("StartNewsLetter.selectFour")}</option>
                                <option>{t("StartNewsLetter.selectFive")}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <select className="form-control form-control-custom custom-select">
                                <option>{t("StartNewsLetter.task")}</option>
                                <option>{t("StartNewsLetter.taskOne")}</option>
                                <option>{t("StartNewsLetter.taskTwo")}</option>
                                <option>{t("StartNewsLetter.taskThree")}</option>
                                <option>{t("StartNewsLetter.taskFour")}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <button type="submit" className={selectFontBig ? "fs-26 btn-first btn-submit full-width btn-height" : selectFontSmall ? "btn-first btn-submit full-width btn-height" : "fs-20 btn-first btn-submit full-width btn-height"}>{t("StartNewsLetter.send")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartNewsLetter