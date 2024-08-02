import React from 'react';
import {useTranslation} from "react-i18next";
import '../index.css';

const Preloader = () => {
    const { t } = useTranslation();

    return(
        <div
            // className="preloader"
            className="preloader-container"
        >
            {/*<img src="../assets/images/pre-loader-1.svg" alt="img"/>*/}
            <h3 className="preloader-container-title">{t("LoadingText.title")}</h3>
            <p className="preloader-container-text">{t("LoadingText.text")}</p>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Preloader