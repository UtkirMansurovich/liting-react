import React, {useRef, useEffect, useCallback, useState} from 'react';
import CertificatePdf from "../../CertificatePdf";
import jsPDF from "jspdf";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {BASE_URL} from "../../../utills/constant";
import AntDesingStyle from "../../AntDesingStyle";
import {Spin} from "antd";
import {useSearchParams} from "react-router-dom";
import gerbImg from '../../../images/certificate.jpg';
import dayjs from "dayjs";

const ModalOfCertificate = ({openModal, setOpenModal, certificateNum}) => {

    const {t} = useTranslation();
    const modalRef = useRef();

    const [searchParams, _] = useSearchParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [downloadBtnLoading, setDownloadBtnLoading] = useState(false);

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

    const downloadPDF = async () => {
        try {
            setDownloadBtnLoading(true);
            const doc = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4"
            });

            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const centerX = pageWidth / 2;

            // ================== RAMKA ==================
            doc.setDrawColor(59, 130, 246);
            doc.setLineWidth(0.2);
            doc.rect(11, 11, pageWidth - 22, pageHeight - 22);

            doc.setLineWidth(0.2);
            doc.rect(12, 12, pageWidth - 24, pageHeight - 24);

            // ================== TEPASI ==================
            // (Gerb rasmi bo‘lsa shu yerga qo‘shasiz)
            doc.addImage(gerbImg, "PNG", centerX-50, 15, 100, 30, );

            doc.setFont("times", "bold");
            doc.setFontSize(24);
            doc.text("O‘ZBEKISTON RESPUBLIKASI", centerX, 57, {align: "center"});

            // ================== SERTIFIKAT ==================
            doc.setFont("times", "bold");
            doc.setFontSize(20);
            doc.text("Malaka oshirish haqida", centerX, 80, {align: "center"});

            doc.setFont("helvetica", "bold");
            doc.setFontSize(48);
            doc.setTextColor(239, 68, 68);
            doc.setCharSpace(1);
            doc.text("SERTIFIKAT", centerX-5, 107, {align: "center"});
            doc.setTextColor(0);
            doc.setCharSpace(0);

            // ================== RAQAM ==================
            doc.setFontSize(18);
            // doc.setCharSpace(-.5);
            doc.text(`KMO N${data?.certificateNumber}`, centerX, 125, {align: "center"});
            doc.setCharSpace(0);

            // ================== ISM ==================
            doc.setFont("times", "normal");
            doc.setFontSize(18);
            doc.text(data?.fullName, centerX, 143, {align: "center"});

            // ================== SANALAR ==================
            doc.setFont("times", "normal");
            doc.setFontSize(16);
            doc.text(`${dayjs(data?.startedAt).format("YYYY [yil] D MMMM")}dan`, centerX - 15, 155, {align: "right"});
            doc.text(`${dayjs(data?.endedAt).format("YYYY [yil] D MMMM")}gacha`, centerX + 15, 155, {align: "left"});

            // ================== TASHKILOT ==================
            doc.setFont("times", "normal");
            doc.text("“O‘ZLITINEFTGAZ” AJ qoshidagi", centerX, 167, {align: "center"});
            doc.text("“NEFTGAZ-MALAKA” o‘quv-tadqiqot markazi", centerX, 179, {
                align: "center"
            });

            // ================== SOAT ==================
            doc.setFont("times", "normal");
            doc.text(`jami ${data?.hour} soatli`, centerX, 191, {align: "center"});

            // ================== KURS ==================
            doc.setFont("times", "normal");
            doc.setFontSize(16);
            doc.text(data?.courseName, centerX, 203, {align: "center"});

            doc.setFont("times", "normal");
            doc.text("bo‘yicha malaka oshirdi", centerX, 215, {align: "center"});

            // ================== PASTKI QISM ==================

            // QR (agar bo‘lsa)
            doc.addImage(`data:image/png;base64, ${data?.qrCodeBase64}`, "PNG", centerX - 15, 235, 30, 30);

            doc.setFont("times", "bold");
            doc.text("Mudir", 35, 250);

            // doc.line(130, 235, 185, 235);
            doc.setFont("times", "bold");
            doc.text("Azimov S. X.", 145, 250);

            doc.setFontSize(14);
            doc.setFont("times", "normal");
            doc.text(dayjs(data?.date).format("DD.MM.YYYY"), 154, 260);

            // ================== SAQLASH ==================
            doc.save(`${data?.fullName} sertifikati.pdf`);
        }catch (error){
            console.error("PDF yaratishda xatolik:", error);
            alert("PDF yaratishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
        }finally {
            setDownloadBtnLoading(false);
        }
    }

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
                                <CertificatePdf data={data}/>
                            </Spin>
                        </AntDesingStyle>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOfCertificate;