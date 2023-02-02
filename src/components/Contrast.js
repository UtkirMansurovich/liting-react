import React, {useContext } from 'react';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";

const Contrast = () => {
  
  const {clickContrast, selectContrast, clickFontSmall, clickFontMedium, clickFontBig, selectFontSmall, selectFontBig, openContrast, contrastRef, closeContrast, clickStandard } = useContext(AppContext);
  
  const { t } = useTranslation();

  return(
    <div className="containerContrast menu-style" ref={contrastRef} onClick={closeContrast}>
      <div className="containerInside">
        <div className="boxContrast">
          <div className="box-contrast">
            <h5 className={selectFontBig ? 'fs-26' : selectFontSmall ? 'inherit' : 'fs-20'} style={{
              margin:'10px 0', 
              padding:'0', 
              color:'#555555'
            }}>{t("Contrast.contrast")}</h5>
            <div className="box-btn">
              <button onClick={clickStandard} className={ selectContrast ? 'btn-contrast btn-on' : 'btn-contrast'}>{t("Contrast.standard")}</button>
              <button  onClick={clickContrast} className={ selectContrast ? "btn-contrast" : 'btn-contrast btn-on'}>{t("Contrast.blackWhite")}</button>
            </div>
          </div>
          <div className="box-contrast">
            <h5 className={selectFontBig ? 'fs-26' : selectFontSmall ? 'inherit' : 'fs-20'} style={{
              margin:'10px 0', 
              padding:'0', 
              color:'#555555'
            }}>{t("Contrast.fontSize")}</h5>
            <div className="box-btn">
              <button onClick={clickFontSmall} type='button' className={ selectFontSmall ? "btn-font-size btn-font-on" : "btn-font-size"}>A</button>
              <button onClick={clickFontMedium} type='button' className={ selectFontSmall || selectFontBig ? "btn-font-size" : "btn-font-size btn-font-on"}>A</button>
              <button onClick={clickFontBig} type='button' className={ selectFontBig ? "btn-font-size btn-font-on" : "btn-font-size"}>A</button>
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