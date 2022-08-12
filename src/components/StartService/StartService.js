import React, {useState, useContext} from "react";
import {useTranslation} from 'react-i18next';
import { AppContext } from "../../context";
import StartServiceModal from "./StartServiceModal";

const StartService = ({cheifEngineers}) => {
    
    const [openGip, setOpenGip] = useState(false);
    const [id, setId] = useState('');
    const { t } = useTranslation();
    const {getCookie} = useContext(AppContext);

    const openModal = (id) => {
        setOpenGip(prev => !prev);
        setId(id);
    }

    return(
        <section className="section-padding our-services" style={{position: "relative"}}>
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        {/*<h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartService.ourService")}</h5>*/}
                        <h3 className="text-theme fw-700">
                            {t("StartService.ourService")}
                            {/*{t("StartService.title")}*/}
                        </h3>
                    </div>
                    <div className="section-description">
                        <p className="text-light-white">{t("StartService.text")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* <div className="filter-gallery custom-tabs mb-xl-40">
                            <ul className="custom">
                                <li className="active" data-filter="*">
                                    <a href="#" className="text-custom-black">{t("StartService.all")}</a>
                                </li>
                                <li data-filter=".h-main">
                                    <a href="#" className="text-custom-black">{t("StartService.serviceHome")}</a>
                                </li>
                                <li data-filter=".genrl-cons">
                                    <a href="#" className="text-custom-black">{t("StartService.wholeConstruction")}</a>
                                </li>
                                <li data-filter=".restructured">
                                    <a href="#" className="text-custom-black">{t("StartService.restructured")}</a>
                                </li>
                                <li data-filter=".pro-manage">
                                    <a href="#" className="text-custom-black">{t("StartService.manageProject")}</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="row gallery-grid">
                            {cheifEngineers && cheifEngineers.map((engineer, index) =>
                                <div className="col-lg-3 col-md-6 filter-box h-main" key={index}>
                                    <div className="service-item animate-img mb-xl-20" onClick={()=>openModal(engineer.id)} style={{cursor: "pointer"}}>
                                        <img src={engineer.image} className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">
                                                {getCookie.i18next === 'en' ? engineer.fullName_en :
                                                            getCookie.i18next === 'uz' ? engineer.fullName_uz :
                                                                getCookie.i18next === 'oz' ? engineer.fullName_oz : engineer.fullName_ru }    
                                            </h5>
                                            <p className="text-light-white no-margin">
                                                {getCookie.i18next === 'en' ? engineer.position_en :
                                                            getCookie.i18next === 'uz' ? engineer.position_uz :
                                                                getCookie.i18next === 'oz' ? engineer.position_oz : engineer.position_ru }
                                            </p>
                                        </div>
                                    </div>
                                </div>                                                                  
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <StartServiceModal openGip={openGip} setOpenGip={setOpenGip} cheifEngineers={cheifEngineers} id={id}/>
        </section>
    )
}

export default StartService