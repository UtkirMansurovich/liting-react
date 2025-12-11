import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {ImWarning} from "react-icons/im";
import {useSearchParams} from "react-router-dom";
import {FaRegFilePdf} from "react-icons/fa6";
import ModalOfCertificate from "./modal_of_certificate/index";
import axios from "axios";
import {BASE_URL} from "../../utills/constant";
import {Empty, Spin} from "antd";
import AntDesingStyle from "../AntDesingStyle";


const DownloadCertificateForm = () => {
    const {t} = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [pnfl, setPnfl] = useState(searchParams.get('pnfl') || "");
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [certificateNum, setCertificateNum] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        if (e?.preventDefault()) {
            e.preventDefault();
        }

        // Update URL like ?pin=12345
        setSearchParams({pnfl});
        if (pnfl) {
            setIsLoading(true);
            try {
                const res = await axios.get(`${BASE_URL}/api/certificate/pnfl/${pnfl}`);
                if (res?.data?.success) {
                    setData(res?.data?.object);
                    setPnfl("");
                }
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        // const pnfl = searchParams.get("pnfl");

        handleSubmit().then(r => r);
    }, [searchParams]);

    const openPdfModal = (certificateNumber) => {
        setOpenModal(prev => !prev);
        setCertificateNum(certificateNumber);
    }

    return (
        <AntDesingStyle>
            <Spin spinning={isLoading} tip={t("SearchCertificate.loading")} size="large">
                <div style={{padding: "25px"}} className="textDecorate">
                    <form style={{display: "flex"}} className="mb-4" onSubmit={handleSubmit}>
                        <input type="search" className="form-control form-control-custom w-50"
                               placeholder={t("SearchCertificate.placeholder")} value={pnfl}
                               onChange={(e) => setPnfl(e.target.value)} required/>
                        <div className="input-group-append">
                            <button className="btn-first btn-submit btn-word"
                                    type="submit">{t("Search.search")}</button>
                            <button className="btn-first btn-submit btn-icon" type="submit" style={{
                                padding: "0 15px",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <i className="fas fa-search" style={{fontSize: '20px'}}></i>
                            </button>
                        </div>
                    </form>
                    <div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            marginBottom: "15px"
                        }}>
                            <h5 className="mb-0 mt-1 fs-22">{t("SearchCertificate.result")}</h5>
                            <ImWarning style={{color: "#fd5d14"}} className="fs-22"/>
                        </div>
                        <div style={{overflow: "auto"}}>
                            <table>
                                <thead>
                                <tr>
                                    <th style={{textAlign: "center", fontSize: "16px"}}>№</th>
                                    <th style={{
                                        textAlign: "center",
                                        fontSize: "16px"
                                    }}>{t("SearchCertificate.fullName")}</th>
                                    <th style={{
                                        textAlign: "center",
                                        fontSize: "16px"
                                    }}>{t("SearchCertificate.pinfi")}</th>
                                    <th style={{
                                        textAlign: "center",
                                        fontSize: "16px"
                                    }}>{t("SearchCertificate.certificate")}</th>
                                    <th style={{
                                        textAlign: "center",
                                        fontSize: "16px"
                                    }}>{t("SearchCertificate.course")}</th>
                                    <th style={{
                                        textAlign: "center",
                                        fontSize: "16px"
                                    }}>{t("SearchCertificate.action")}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data?.map((item, index) =>
                                    <tr key={index}>
                                        <td style={{textAlign: 'center'}}>{index + 1}</td>
                                        <td style={{textAlign: 'center'}}>{item?.fullName}</td>
                                        <td style={{textAlign: 'center'}}>{item?.pnfl}</td>
                                        <td style={{textAlign: 'center'}}>{item?.certificateNumber}</td>
                                        <td style={{textAlign: 'center'}}>{item?.courseName}</td>
                                        <td style={{textAlign: "center"}}>
                                            <FaRegFilePdf onClick={() => openPdfModal(item?.certificateNumber)} style={{
                                                color: "oklch(63.7% 0.237 25.331)",
                                                fontSize: "21px",
                                                cursor: "pointer"
                                            }}/>
                                        </td>
                                    </tr>
                                )}
                                {data?.length === 0 && <tr>
                                    <td colSpan={6}><Empty description={t("SearchCertificate.notCertificate")}/></td>
                                </tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <ModalOfCertificate openModal={openModal} setOpenModal={setOpenModal}
                                        certificateNum={certificateNum}/>
                </div>
            </Spin>
        </AntDesingStyle>
    )
}

export default DownloadCertificateForm;