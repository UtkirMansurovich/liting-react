import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../context";
import { BASE_URL_PHOTO } from '../utills/constant';

const PageCom = () => {
    const {page, pageTitle} = useContext(AppContext);
    // console.log(page[0]);
    return(
        <div>
            <div className="subheader section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {page && page.map((title, index) =>
                                <div key={index} className="breadcrumb-wrapper">
                                    <div className="page-title">
                                        <h1 className="text-theme fw-500 text-capitalize">{pageTitle}</h1>
                                    </div>
                                    <ul className="custom breadcrumb">
                                        <li>
                                            <Link to="/">Главная страница</Link>
                                        </li>
                                        <li className="active">
                                            {pageTitle}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-padding bg-light-white" >
                <div className="container">
                    <div className="row " >
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    {page && page.map((text, index) =>
                                        <div key={index}>
                                            <img src={BASE_URL_PHOTO + text.mainImage.hashId} alt="imagePhoto" className="pageImg"/>
                                            <h3 className="listing-detail-heading no-margin ">{text.title_oz}</h3>
                                            <div dangerouslySetInnerHTML={{__html: text.text_oz}} className="textDecorate flex-column mb-xl-20 p-4"/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageCom