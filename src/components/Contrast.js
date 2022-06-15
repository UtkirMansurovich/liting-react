import React, {useContext } from 'react';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";

const Contrast = () => {
  const {clickContrast, selectContrast, clickFontSmall, clickFontMedium, clickFontBig, selectFontSmall, selectFontBig, openContrast, contrastRef, getCookie } = useContext(AppContext);
  const { t } = useTranslation();
  return(
    <div className="containerContrast" ref={contrastRef}>
      <div className="containerInside">
        <div className="boxContrast">
          <div className="box-contrast">
            <h5 style={{margin:'10px 0', padding:'0', color:'#555555'}}>{t("Contrast.contrast")}</h5>
            <div className="box-btn">
              <button onClick={clickContrast} className={ selectContrast ? 'btn-contrast btn-on' : 'btn-contrast'}>{t("Contrast.standard")}</button>
              <button  onClick={clickContrast} className={ selectContrast ? "btn-contrast" : 'btn-contrast btn-on'}>{t("Contrast.blackWhite")}</button>
            </div>
          </div>
          <div className="box-contrast">
            <h5 style={{margin:'10px 0', padding:'0', color:'#555555'}}>{t("Contrast.fontSize")}</h5>
            <div className="box-btn">
              <button onClick={clickFontSmall} className={ selectFontSmall ? "btn-font-size btn-font-on" : "btn-font-size"}>A</button>
              <button onClick={clickFontMedium} className={ selectFontSmall || selectFontBig ? "btn-font-size" : "btn-font-size btn-font-on"}>A</button>
              <button onClick={clickFontBig} className={ selectFontBig ? "btn-font-size btn-font-on" : "btn-font-size"}>A</button>
            </div>
          </div>
        </div>
        <p onClick={openContrast} className="btn-close">
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  )
}

export default Contrast