import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useNavigate, useSearchParams} from "react-router-dom";

const Search = ({openSearch, setOpenSearch}) => {

    const SearchRef = useRef();
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [_, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = useState("");

    const closeSearch = (e) => {
        if (SearchRef.current === e.target) {
            setOpenSearch(false);
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && openSearch) {
            setOpenSearch(false);
        }
    }, [setOpenSearch, openSearch])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.addEventListener('keydown', keyPress);
    }, [keyPress]);


    const handlerSubmit = async (e) => {
        e.preventDefault();
        if(keyword){
            setSearchParams({keyword});
            navigate(`/search?page=0&keyword=${keyword}`);
            setOpenSearch(false);
        }
    }

    return (
        <div className="containerContrast menu-style" ref={SearchRef} onClick={closeSearch}>
            <div className="containerInside">
                <div className="boxSearch">
                    <form onSubmit={handlerSubmit} className="input-group">
                        <input onChange={(e) => setKeyword(e?.target?.value)} value={keyword} type="search"
                               className="form-control form-control-custom w-50" placeholder={t("Search.placeholder")}
                               required/>
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
                </div>
                <p onClick={() => setOpenSearch(prev => !prev)} className="btn-close" style={{top: '-15px'}}>
                    <i className="fas fa-times"></i>
                </p>
            </div>
        </div>
    )
}

export default Search