import React, {useContext, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context';
import {Link} from "react-router-dom";
import {BASE_URL_PHOTO} from '../utills/constant';
import lazyImage from '../images/training.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPaginate from 'react-paginate';

function SearchPageCom() {
    const {getCookie, selectFontBig, selectFontSmall, handlerPageClicked} = useContext(AppContext);
    
    const { t } = useTranslation();
    const [searchedItem, setSearchedItem] = useState([]);

    useEffect(() => {
        const data = window.localStorage.getItem('arr');
        setSearchedItem(JSON.parse(data));
    }, [])
    // console.log(searchedItem);
    const dataNot = window.localStorage.getItem('arrNot');
    const pageNumber = window.localStorage.getItem('pageNumber');
    // console.log(dataNot);
    const activNumber = window.localStorage.getItem('activNumber');
  

  if(searchedItem.length > 0) {

  return (
    <>
        <div className="bg-light-white pb-5" id="up">
              <div className="subheader section-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="breadcrumb-wrapper">
                                  <div className="page-title">
                                      <h1 className="text-theme fw-500">{t("Search.search")}</h1>
                                  </div>
                                  <ul className="custom breadcrumb">
                                      <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                          <Link to="/">{t("BlogPageCom.home")}</Link>
                                      </li>
                                      <li className={selectFontBig ? "fs-26 active" : selectFontSmall ? "active" : "fs-20 active"}>{t("Search.search")}</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container section-padding">
                  <div className="row">
                      {searchedItem && searchedItem.map((texts, index) =>
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="card blogsCard">
                                <div className='blogsImagePar'>
                                    <LazyLoadImage 
                                        src={BASE_URL_PHOTO + texts?.mainImage?.hashId}
                                        placeholderSrc={lazyImage} 
                                        className="card-img-top blogsImage" 
                                        alt="imagePhoto"
                                        effect='blur'
                                        width="100%"/>
                                </div>
                                <div className="post-date">
                                    <p className="post-data-a">{texts.publishDate.slice(0,10)}</p>
                                </div>
                                <div className="blogCats">
                                    <p className="cats-office m-0">
                                        {getCookie?.i18next === "en" ? texts.category?.name_en :
                                          getCookie?.i18next === "oz" ? texts.category?.name_oz :
                                            getCookie?.i18next === "uz" ? texts.category?.name_uz : texts.category?.name_ru}
                                    </p>
                                </div>
                                <div className="card-body blogsBody">
                                    <h5 className={selectFontBig ? "fs-26 card-title" : selectFontSmall ? "card-title" : "fs-20 card-title"}>
                                        {getCookie?.i18next === "en" ? texts?.title_en :
                                          getCookie?.i18next === "oz" ? texts?.title_oz :
                                            getCookie?.i18next === "uz" ? texts?.title_uz : texts?.title_ru}
                                    </h5>
                                    <p className={selectFontBig ? "fs-26 card-text" : selectFontSmall ? "card-text" : "fs-20 card-text"}>
                                        {getCookie?.i18next === "en" ? texts?.anons_en :
                                          getCookie?.i18next === "oz" ? texts?.anons_oz :
                                            getCookie?.i18next === "uz" ? texts?.anons_uz :texts?.anons_ru}
                                    </p>
                                </div>
                                <div className="post-link d-flex justify-content-between w-100" style={{padding:'1.25rem'}}>
                                    <Link to={/blogs/+texts?.category.id+'/'+texts?.id}
                                          className={selectFontBig ? "link-btn text-custom-blue fw-600 fs-26" : selectFontSmall ? "link-btn text-custom-blue fw-600 fs-14" : "link-btn text-custom-blue fw-600 fs-20"}
                                    >{t("BlogPageCom.readMore")}</Link>
                                    <p className={selectFontBig ? "fs-26 text-light-white" : selectFontSmall ? "text-light-white" : "fs-20 text-light-white"}>
                                        <i class="fas fa-street-view"></i>
                                        <span className="pl-1">{texts?.view_count}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                      )}
                  </div>
              </div>
              <ReactPaginate
                previousLabel={t("Pagination.previous")}
                nextLabel={t("Pagination.next")}
                breakLabel={'...'}
                pageCount={pageNumber}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlerPageClicked}
                forcePage={activNumber}
                renderOnZeroPageCount={null}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={selectFontBig ? 'fs-26 page-link' : selectFontSmall ? 'page-link' : 'fs-20 page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={selectFontBig ? 'fs-26 page-link' : selectFontSmall ? 'page-link' : 'fs-20 page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={selectFontBig ? 'fs-26 page-link' : selectFontSmall ? 'page-link' : 'fs-20 page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
             />
          </div>
    </>
  )
}else {
    return (
        <>
        <div className="bg-light-white pb-5" id="up">
              <div className="subheader section-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="breadcrumb-wrapper">
                                  <div className="page-title">
                                      <h1 className="text-theme fw-500">{t("Search.search")}</h1>
                                  </div>
                                  <ul className="custom breadcrumb">
                                      <li className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                          <Link to="/">{t("BlogPageCom.home")}</Link>
                                      </li>
                                      <li className={selectFontBig ? "fs-26 active" : selectFontSmall ? "active" : "fs-20 active"}>{t("Search.search")}</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <section className="section-padding bg-light-white our-history">
                <div className="container">
                    <div className="row " >
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12">
                                        <div className="blogsParent">
                                            <h3 className="listing-detail-heading no-margin">{t("Search.notFound1")} <b>"{dataNot}"</b> {t("Search.notFound2")}</h3>
                                            <div className={selectFontBig ? "fs-26 textDecorate flex-column mb-xl-20 p-4" : selectFontSmall ? "textDecorate flex-column mb-xl-20 p-4" : "fs-20 textDecorate flex-column mb-xl-20 p-4"}>
                                                <p>{t("Search.notFound3")}</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
          </div>
        </>
    )
}
 
}

export default SearchPageCom