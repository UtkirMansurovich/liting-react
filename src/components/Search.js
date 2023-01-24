import React, {useContext } from 'react';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";

const Search = () => {
  const {showSearch, setShowSearch, SearchRef, openSearch, closeSearch } = useContext(AppContext);
  const { t } = useTranslation();
  return(
    <div className="containerContrast menu-style" ref={SearchRef} onClick={closeSearch}>
      <div className="containerInside">
        <div className="boxSearch">
            <div class="input-group">
                <input type="search" class="form-control form-control-custom w-50" placeholder="Describe your issue"/>
                <div class="input-group-append">
                <button class="btn-first btn-submit" type="submit">Search</button>
                </div>
            </div>
        </div>
        <p onClick={openSearch} className="btn-close">
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  )
}

export default Search