import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {AppContext} from "../context";
import {Empty} from "antd";

const SearchNotFound = () => {
    const {t} = useTranslation();
    const {selectFontBig, selectFontSmall} = useContext(AppContext);

    return (
        <section className="section-padding bg-light-white our-history">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blogsParent">
                                    {/*<h3 className="listing-detail-heading no-margin">{t("Search.notFound1")} <b>"{dataNot}"</b> {t("Search.notFound2")}</h3>*/}
                                    {/*<div*/}
                                    {/*    className={selectFontBig ? "fs-26 textDecorate flex-column mb-xl-20 p-4" : selectFontSmall ? "textDecorate flex-column mb-xl-20 p-4" : "fs-20 textDecorate flex-column mb-xl-20 p-4"}>*/}
                                    {/*    <p>{t("Search.notFound3")}</p>*/}
                                    {/*</div>*/}
                                    <Empty description={t("Search.noResultsFound")} className={selectFontBig ? "fs-26 textDecorate flex-column mb-xl-20 p-4" : selectFontSmall ? "textDecorate flex-column mb-xl-20 p-4" : "fs-20 textDecorate flex-column mb-xl-20 p-4"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchNotFound;