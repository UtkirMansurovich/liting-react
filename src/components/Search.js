import React, {useContext} from 'react';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";

const Search = () => {

  const {SearchRef, openSearch, closeSearch, handlerSubmit, handlerChange, searchItem } = useContext(AppContext);
  const { t } = useTranslation();

  return(
    <div className="containerContrast menu-style" ref={SearchRef} onClick={closeSearch}>
      <div className="containerInside">
        <div className="boxSearch">
            <form onSubmit={handlerSubmit} className="input-group">
                <input onChange={handlerChange} value={searchItem} type="search" className="form-control form-control-custom w-50" placeholder={t("Search.placeholder")} required/>
                <div className="input-group-append">
                  <button className="btn-first btn-submit btn-word" type="submit">{t("Search.search")}</button>
                  <button className="btn-first btn-submit btn-icon" type="submit" style={{padding:"0 15px", display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <i className="fas fa-search" style={{fontSize:'20px'}}></i>
                  </button>
                </div>
            </form>
        </div>
        <p onClick={openSearch} className="btn-close" style={{top:'-15px'}}>
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  )
}

export default Search