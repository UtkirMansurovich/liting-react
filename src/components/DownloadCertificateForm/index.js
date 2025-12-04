import React from "react";
import {useTranslation} from "react-i18next";
import {ImWarning} from "react-icons/im";


const DownloadCertificateForm = () => {
    const {t} = useTranslation();
    // const {getCookie, selectFontBig, selectFontSmall} = useContext(AppContext);

    return (
        <div style={{padding:"25px"}} className="textDecorate">
            <form style={{display:"flex"}} className="mb-4">
                <input type="search" className="form-control form-control-custom w-50"
                       placeholder={t("SearchCertificate.placeholder")} required/>
                <div className="input-group-append">
                    <button className="btn-first btn-submit btn-word" type="submit">{t("Search.search")}</button>
                    <button className="btn-first btn-submit btn-icon" type="submit" style={{padding:"0 15px", display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <i className="fas fa-search" style={{fontSize:'20px'}}></i>
                    </button>
                </div>
            </form>
            <div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"5px", marginBottom:"15px"}}>
                    <h5 className="mb-0 mt-1 fs-22">{t("SearchCertificate.result")}</h5>
                    <ImWarning style={{color:"#fd5d14"}} className="fs-22"/>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td style={{width:"30%", paddingLeft:"20px"}}>{t("SearchCertificate.result")}</td>
                        <td style={{paddingLeft:"20px"}}></td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft:"20px"}}>{t("SearchCertificate.fullName")}</td>
                        <td style={{paddingLeft:"20px"}}></td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft:"20px"}}>{t("SearchCertificate.pinfi")}</td>
                        <td style={{padding:"0 0 0 20px"}}>
                            <button style={{backgroundColor:"#fd5d14", padding:"5px 15px", color:"#fff", letterSpacing:".5px", fontSize:"16px", fontWeight:"600"}}>{t("SearchCertificate.download")}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DownloadCertificateForm;