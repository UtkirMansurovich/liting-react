import React, {useContext } from 'react';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";

const Search = () => {
  const {SearchRef, openSearch, closeSearch } = useContext(AppContext);
  const { t } = useTranslation();
  return(
    <div className="containerContrast menu-style" ref={SearchRef} onClick={closeSearch}>
      <div className="containerInside">
        <div className="boxSearch">
            <div class="input-group">
                <input type="search" class="form-control form-control-custom w-50" placeholder={t("Search.placeholder")}/>
                <div class="input-group-append">
                  <button class="btn-first btn-submit btn-word" type="submit">{t("Search.search")}</button>
                  <button class="btn-first btn-submit btn-icon" type="submit" style={{padding:"0 15px", display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <i class="fas fa-search" style={{fontSize:'20px'}}></i>
                  </button>
                </div>
            </div>
        </div>
        <p onClick={openSearch} className="btn-close" style={{top:'-15px'}}>
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  )
}

export default Search