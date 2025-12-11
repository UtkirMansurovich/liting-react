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

    const downloadPDF = () => {
        const input = pdRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            // const imgX = (pdfWidth - imgWidth * ratio) * 2;
            // const imgY = 30;
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth * ratio, imgHeight * ratio);
            // pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save('invoice.pdf');
        })
    }

    const pnfl = searchParams.get("pnfl");

    useEffect(() => {

        if (certificateNum && pnfl) {
            (async () => {
                setIsLoading(true);
                try {
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
                        <button style={{
                            backgroundColor: "#fd5d14",
                            padding: "5px 15px",
                            color: "#fff",
                            letterSpacing: ".5px",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginBottom: "10px",
                            float:"right",
                        }} onClick={downloadPDF}>{t("SearchCertificate.download")}</button>
                        <AntDesingStyle>
                            <Spin spinning={isLoading} tip={t("SearchCertificate.loading")} size="large">
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