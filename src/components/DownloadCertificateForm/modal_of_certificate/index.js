import React, {useRef, useEffect, useCallback, useState} from 'react';
import CertificatePdf from "../../CertificatePdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {BASE_URL} from "../../../utills/constant";
import AntDesingStyle from "../../AntDesingStyle";
import {Spin} from "antd";
import {useSearchParams} from "react-router-dom";

const ModalOfCertificate = ({openModal, setOpenModal, certificateNum}) => {

    const {t} = useTranslation();
    const modalRef = useRef();
    const pdRef = useRef();

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
            const canvas = await html2canvas(pdRef.current);
            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF();
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);

            pdf.addImage(imgData, "PNG", 0, 0, canvas.width * ratio, canvas.height * ratio);
            pdf.save("certificate.pdf");

            // const input = pdRef.current;
            // html2canvas(input).then((canvas) => {
            //     const imgData = canvas.toDataURL('image/png');
            //     const pdf = new jsPDF();
            //     const pdfWidth = pdf.internal.pageSize.getWidth();
            //     const pdfHeight = pdf.internal.pageSize.getHeight();
            //     const imgWidth = canvas.width;
            //     const imgHeight = canvas.height;
            //     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            //     // const imgX = (pdfWidth - imgWidth * ratio) * 2;
            //     // const imgY = 30;
            //     pdf.addImage(imgData, "PNG", 0, 0, imgWidth * ratio, imgHeight * ratio);
            //     // pdf.addImage(imgData, "PNG", 0, 0);
            //     pdf.save('certificate.pdf');
            // })
        } catch (e) {
            console.log("Pdf error")
        } finally {
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

    console.log(downloadBtnLoading)

    return (
        <div className={openModal ? 'popup' : 'popup-close'} ref={modalRef} onClick={closeModal}>
            <div className={openModal ? 'popup__content-pdf' : 'popup__content-close'}>
                <div className='popup__right'>
                    <div>
                        <i className="fas fa-times popup__icon" onClick={() => setOpenModal(prev => !prev)}></i>
                        <AntDesingStyle>
                            <Spin spinning={isLoading} tip={t("SearchCertificate.loading")} size="large">
                                <div style={{display: "flex", justifyContent: "end", alignItems: "center"}}>
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
                                <CertificatePdf pdRef={pdRef} data={data}/>
                            </Spin>
                        </AntDesingStyle>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOfCertificate;