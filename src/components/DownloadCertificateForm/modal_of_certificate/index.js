import React, {useRef, useEffect, useCallback, useState, useContext} from 'react';
import CertificatePdf from "../../CertificatePdf";
import jsPDF from "jspdf";
import { loadFonts } from "../../../utills/loadFonts";

import {useTranslation} from "react-i18next";
import axios from "axios";
import {BASE_URL} from "../../../utills/constant";
import AntDesingStyle from "../../AntDesingStyle";
import {Spin} from "antd";
import {useSearchParams} from "react-router-dom";
import gerbImg from '../../../images/certificate.jpg';

import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/en";
import "dayjs/locale/ru";
import {AppContext} from "../../../context";

dayjs.extend(localeData);

// Uzbek Latin
dayjs.locale({
    name: "uz-latn",
    weekdays: "dushanba_seshanba_chorshanba_payshanba_juma_shanba_yakshanba".split("_"),
    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avgust_sentyabr_oktabr_noyabr_dekabr".split("_"),
    weekdaysShort: "du_se_ch_pa_ju_sh_ya".split("_"),
    monthsShort: "yan_fev_mar_apr_may_iyu_iyu_avg_sen_okt_noy_dek".split("_"),
    weekStart: 1
}, null, true);

// Uzbek Cyrillic
dayjs.locale({
    name: "uz-cyrl",
    weekdays: "душанба_сешанба_чоршанба_пайшанба_жума_шанба_якшанба".split("_"),
    months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
    weekdaysShort: "ду_се_чо_па_жу_ша_як".split("_"),
    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
    weekStart: 1
}, null, true);

const DAYJS_CONFIG = {
    en: {
        locale: "en",
        from: "from ",
        to: "until ",
        format: "MMMM D, YYYY"
    },
    ru: {
        locale: "ru",
        from: "с ",
        to: "до ",
        format: "D MMMM YYYY"
    },
    oz: {
        locale: "uz-latn",
        from: "",
        to: "",
        format: "YYYY [yil] D MMMM"
    },
    uz: {
        locale: "uz-cyrl",
        from: "",
        to: "",
        format: "YYYY [йил] D MMMM"
    }
};

const ModalOfCertificate = ({openModal, setOpenModal, certificateNum}) => {

    const {t} = useTranslation();
    const {getCookie} = useContext(AppContext);
    const modalRef = useRef();

    const [searchParams, _] = useSearchParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [downloadBtnLoading, setDownloadBtnLoading] = useState(false);

    const lang = getCookie?.i18next || "en";
    const cfg = DAYJS_CONFIG[lang] || DAYJS_CONFIG.en;

    dayjs.locale(cfg.locale);

    const formatDate =  (date, lang, cfg) => {
        let result = "";

        // prefix (from / c / etc.)
        if(cfg.from){
            result += `${cfg.from}`
        }

        // formatted date
        let formattedDate = dayjs(date).format(cfg.format);

        // English needs lowercase
        if(lang === "en"){
            formattedDate = formattedDate.toLowerCase();
        }

        result += formattedDate;

        // suffix (dan / дан)
        if(lang === "uz"){
            result += "дан"
        }
        if(lang === "oz"){
            result += "dan"
        }

        return result;
    }

    const formatEndDate = (date, lang, cfg) => {
        let result = "";

        if(cfg.to){
            result += `${cfg.to}`;
        }

        let formattedDate = dayjs(date).format(cfg.format);
        if(lang === "en"){
            formattedDate = formattedDate.toLowerCase();
        }

        result += formattedDate;

        if(lang === "oz"){
            result += "gacha"
        }
        if(lang === "uz"){
            result += "гача"
        }

        return result;
    }

    const getAllHours = (hour) => {
        if(getCookie.i18n !== "en"){
            return `${t("SearchCertificate.all")} ${hour} ${t("SearchCertificate.hours")}`
        }else {
            return `${hour} ${t("SearchCertificate.hours")} ${t("SearchCertificate.all")}`
        }
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setOpenModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && openModal) {
            setOpenModal(false);
        }
    }, [setOpenModal, openModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.addEventListener('keydown', keyPress);
    }, [keyPress]);


    // const downloadPDF = async () => {
    //     try {
    //         setDownloadBtnLoading(true);
    //         const doc = new jsPDF({
    //             orientation: "portrait",
    //             unit: "mm",
    //             format: "a4"
    //         });
    //
    //         const pageWidth = doc.internal.pageSize.getWidth();
    //         const pageHeight = doc.internal.pageSize.getHeight();
    //         const centerX = pageWidth / 2;
    //
    //         // ================== RAMKA ==================
    //         doc.setDrawColor(59, 130, 246);
    //         doc.setLineWidth(0.2);
    //         doc.rect(11, 11, pageWidth - 22, pageHeight - 22);
    //
    //         doc.setLineWidth(0.2);
    //         doc.rect(12, 12, pageWidth - 24, pageHeight - 24);
    //
    //         // ================== TEPASI ==================
    //         // (Gerb rasmi bo‘lsa shu yerga qo‘shasiz)
    //         doc.addImage(gerbImg, "PNG", centerX-50, 15, 100, 30, );
    //
    //         // doc.setFont("times", "bold");
    //         doc.setFontSize(24);
    //
    //         doc.addFileToVFS("DejaVuSans.ttf", dejavuFont);
    //         doc.addFont("DejaVuSans.ttf", "DejaVu", "normal");
    //         doc.setFont("DejaVu", "normal");
    //
    //         doc.text(`${t("SearchCertificate.republic")}`, centerX, 57, {align: "center"});
    //
    //         // ================== SERTIFIKAT ==================
    //         // doc.setFont("times", "bold");
    //         doc.setFontSize(20);
    //         doc.text(t("SearchCertificate.aboutTraining"), centerX, 80, {align: "center"});
    //
    //         // doc.setFont("helvetica", "bold");
    //         doc.setFontSize(48);
    //         doc.setTextColor(239, 68, 68);
    //         doc.setCharSpace(1);
    //         doc.text(t("SearchCertificate.textCertificate"), centerX-5, 107, {align: "center"});
    //         doc.setTextColor(0);
    //         doc.setCharSpace(0);
    //
    //         // ================== RAQAM ==================
    //         doc.setFontSize(18);
    //         // doc.setCharSpace(-.5);
    //         doc.text(`${t("SearchCertificate.kmoNumber")}${data?.certificateNumber}`, centerX, 125, {align: "center"});
    //         doc.setCharSpace(0);
    //
    //         // ================== ISM ==================
    //         // doc.setFont("times", "normal");
    //         doc.setFontSize(18);
    //         doc.text(data?.fullName, centerX, 143, {align: "center"});
    //
    //         // ================== SANALAR ==================
    //         // doc.setFont("times", "normal");
    //         doc.setFontSize(16);
    //         doc.text(formatDate(data?.startedAt, lang, cfg), centerX - 15, 155, {align: "right"});
    //         doc.text(formatEndDate(data?.endedAt, lang, cfg), centerX + 15, 155, {align: "left"});
    //
    //         // ================== TASHKILOT ==================
    //         // doc.setFont("times", "normal");
    //         doc.text(t("SearchCertificate.underAuspices"), centerX, 167, {align: "center"});
    //         doc.text(t("SearchCertificate.trainingResearch"), centerX, 179, {
    //             align: "center"
    //         });
    //
    //         // ================== SOAT ==================
    //         // doc.setFont("times", "normal");
    //         doc.text(getAllHours(data?.hour), centerX, 191, {align: "center"});
    //
    //         // ================== KURS ==================
    //         // doc.setFont("times", "normal");
    //         doc.setFontSize(16);
    //         doc.text(data?.courseName, centerX, 203, {align: "center"});
    //
    //         // doc.setFont("times", "normal");
    //         doc.text(t("SearchCertificate.trainingIn"), centerX, 215, {align: "center"});
    //
    //         // ================== PASTKI QISM ==================
    //
    //         // QR (agar bo‘lsa)
    //         doc.addImage(`data:image/png;base64, ${data?.qrCodeBase64}`, "PNG", centerX - 15, 235, 30, 30);
    //
    //         // doc.setFont("times", "bold");
    //         doc.text(t("SearchCertificate.manager"), 35, 250);
    //
    //         // doc.line(130, 235, 185, 235);
    //         // doc.setFont("times", "bold");
    //         doc.text(t("SearchCertificate.signer"), 145, 250);
    //
    //         doc.setFontSize(14);
    //         // doc.setFont("times", "normal");
    //         doc.text(dayjs(data?.date).format("DD.MM.YYYY"), 154, 260);
    //
    //         // ================== SAQLASH ==================
    //         console.log("saved 3")
    //         doc.save(`${data?.fullName} ${t("SearchCertificate.saveCertificate")}.pdf`);
    //         console.log("saved 4")
    //     }catch (error){
    //         console.error(t("SearchCertificate.errorPDF"), error);
    //         alert(t("SearchCertificate.errorOccurred"));
    //     }finally {
    //         setDownloadBtnLoading(false);
    //     }
    // }

    const downloadPDF = async () => {
        try {
            setDownloadBtnLoading(true);

            const { dejavuFont, dejavuFontBold } = await loadFonts();

            const doc = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });

            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const centerX = pageWidth / 2;

            // ===== FONTS =====
            if (!dejavuFont || !dejavuFontBold) throw new Error("Font files are missing");

            doc.addFileToVFS("DejaVuSerif.ttf", dejavuFont);
            doc.addFont("DejaVuSerif.ttf", "DejaVu", "normal");

            doc.addFileToVFS("DejaVuSerif-Bold.ttf", dejavuFontBold);
            doc.addFont("DejaVuSerif-Bold.ttf", "DejaVu", "bold");

            // Default font
            doc.setFont("DejaVuSerif", "normal");

            // Set font
            doc.setFont("DejaVuSerif", "normal");
            doc.setFont("DejaVuSerif", "bold"); // zarur bo‘lsa

            // ===== RAMKA =====
            doc.setDrawColor(59, 130, 246);
            doc.setLineWidth(0.2);
            doc.rect(11, 11, pageWidth - 22, pageHeight - 22);
            doc.rect(12, 12, pageWidth - 24, pageHeight - 24);

            // ===== LOGO =====
            if (gerbImg) {
                doc.addImage(gerbImg, "PNG", centerX - 50, 15, 100, 30);
            }

            // ===== TEKST =====
            doc.setFontSize(24);
            doc.setCharSpace(-.2)
            doc.setFont("DejaVu", "bold");
            doc.text(t("SearchCertificate.republic"), centerX, 57, { align: "center" });

            doc.setFontSize(20);
            doc.setFont("DejaVu", "bold");
            doc.text(t("SearchCertificate.aboutTraining"), centerX, 80, { align: "center" });

            // ===== CERTIFICATE =====
            doc.setFont("DejaVu", "bold");
            doc.setFontSize(48);
            doc.setTextColor(239, 68, 68);
            doc.text(t("SearchCertificate.textCertificate"), centerX, 107, { align: "center" });

            doc.setTextColor(0);
            // ===== RAQAM =====
            doc.setFontSize(16);
            doc.setFont("DejaVu", "bold");
            doc.text(`${t("SearchCertificate.kmoNumber")} ${data?.certificateNumber}`, centerX, 125, { align: "center" });

            doc.setFont("DejaVu", "normal");

            // ===== ISM =====
            doc.text(data?.fullName, centerX, 143, { align: "center" });

            // ===== SANALAR =====
            doc.setFontSize(14);
            doc.text(formatDate(data?.startedAt, lang, cfg), centerX - 15, 155, { align: "right" });
            doc.text(formatEndDate(data?.endedAt, lang, cfg), centerX + 15, 155, { align: "left" });

            // ===== TASHKILOT =====
            doc.text(t("SearchCertificate.underAuspices"), centerX, 167, { align: "center" });
            doc.text(t("SearchCertificate.trainingResearch"), centerX, 179, { align: "center" });

            // ===== SOAT =====
            doc.text(getAllHours(data?.hour), centerX, 191, { align: "center" });

            // ===== KURS =====
            doc.text(data?.courseName, centerX, 203, { align: "center" });
            doc.text(t("SearchCertificate.trainingIn"), centerX, 215, { align: "center" });

            // ===== QR =====
            if (data?.qrCodeBase64) {
                doc.addImage(`data:image/png;base64,${data.qrCodeBase64}`, "PNG", centerX - 15, 235, 30, 30);
            }

            // ===== IMZO =====
            doc.text(t("SearchCertificate.manager"), 35, 250);
            doc.text(t("SearchCertificate.signer"), 145, 250);

            doc.setFontSize(12);
            doc.text(dayjs(data?.date).format("DD.MM.YYYY"), 150, 260);

            // ===== SAVE =====
            doc.save(`${data?.fullName} ${t("SearchCertificate.saveCertificate")}.pdf`);

            console.log("PDF generated successfully ✅");
        } catch (e) {
            console.error("PDF generation error:", e);
            alert(t("SearchCertificate.errorOccurred"));
        } finally {
            setDownloadBtnLoading(false);
        }
    };


    const pnfl = searchParams.get("pnfl");

    useEffect(() => {

        if (certificateNum && pnfl) {
            (async () => {
                try {
                    setIsLoading(true);
                    const res = await axios.get(`${BASE_URL}/api/certificate/detail?certificateNumber=${certificateNum}&pnfl=${pnfl}`);
                    if (res?.data?.success) {
                        console.log(res?.data?.object)
                        setData(res?.data?.object);
                    }
                } catch (e) {
                    console.log(e)
                } finally {
                    setIsLoading(false);
                }
            })()
        }
    }, [certificateNum, pnfl]);

    return (
        <div className={openModal ? 'popup' : 'popup-close'} ref={modalRef} onClick={closeModal}>
            <div className={openModal ? 'popup__content-pdf' : 'popup__content-close'}>
                <div className='popup__right'>
                    <div>
                        <i className="fas fa-times popup__icon" onClick={() => setOpenModal(prev => !prev)}></i>
                        <AntDesingStyle>
                            <Spin spinning={isLoading} tip={t("SearchCertificate.loading")} size="large">
                                <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                                    <button style={{
                                        backgroundColor: "#fd5d14",
                                        padding: "5px 15px",
                                        color: "#fff",
                                        letterSpacing: ".5px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        marginBottom: "10px",
                                        textAlign: "right",
                                    }} disabled={downloadBtnLoading}
                                            className={downloadBtnLoading ? "cursor-not-allowed" : ""}
                                            onClick={downloadPDF}>
                                        {downloadBtnLoading ? t("SearchCertificate.loading") : t("SearchCertificate.download")}
                                    </button>
                                </div>
                                <CertificatePdf data={data} lang={lang} cfg={cfg}/>
                            </Spin>
                        </AntDesingStyle>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOfCertificate;