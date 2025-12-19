import certificate from "../../images/certificate.jpg";
import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../context";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/ru";

const CertificatePdf = ({data, cfg, lang}) => {
    const {t} = useTranslation();
    const {getCookie} = useContext(AppContext);

    dayjs.locale(cfg.locale);

    return (
        <div className="pdf-container">
            <div className="certificate">
                <div className="blue-border">
                    <div className="blue-border-2">
                        {/*Emblem*/}
                        <div className="header-img">
                            <img src={certificate} alt="Emblem"/>
                        </div>

                        <h2 className="title">{t("SearchCertificate.republic")}</h2>

                        <h3 className="subtitle">{t("SearchCertificate.aboutTraining")}</h3>
                        <h1 className="red">{t("SearchCertificate.textCertificate")}</h1>

                        <p style={{fontWeight: "bold", color: "black"}}
                           className="center">{t("SearchCertificate.kmoNumber")} {data?.certificateNumber}</p>

                        {/*FISH*/}
                        <div className="line">
                            <p className="line-text">{data?.fullName}</p>
                        </div>

                        <div className="center">
                            <p className="center-text">
                                {cfg.from && `${cfg.from} `}
                                {dayjs(data?.startedAt).format(cfg.format).toLowerCase()}
                                {lang === "oz" && "dan"}
                                {lang === "uz" && "дан"}
                            </p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p className="center-text">
                                {cfg.to && `${cfg.to} `}
                                {dayjs(data?.endedAt).format(cfg.format).toLowerCase()}
                                {lang === "oz" && "gacha"}
                                {lang === "uz" && "гача"}
                            </p>
                        </div>

                        <h4 className="center">
                            {t("SearchCertificate.underAuspices")}
                        </h4>

                        <h4 className="center">
                            {t("SearchCertificate.trainingResearch")}
                        </h4>

                        <p className="center">
                            {getCookie.i18n !== "en" ? `${t("SearchCertificate.all")} ${data?.hour} ${t("SearchCertificate.hours")}` : `${data?.hour} ${t("SearchCertificate.hours")} ${t("SearchCertificate.all")}`}
                        </p>

                        <div className="line">
                            <p className="center-text">{data?.courseName}</p>
                        </div>

                        <p className="center">{t("SearchCertificate.trainingIn")}</p>

                        <div className="footer-certificate">
                            <p>{t("SearchCertificate.manager")}</p>
                            <div className="qr">
                                <img src={`data:image/png;base64, ${data?.qrCodeBase64}`} alt="QR Code"
                                     style={{width: 100, height: 100}}/>
                            </div>
                            <p className="signer">{t("SearchCertificate.signer")}</p>
                        </div>

                        <p className="date-block">
                            {dayjs(data?.date).format("DD.MM.YYYY")}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CertificatePdf;