import React, {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {AppContext} from '../context';
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {BASE_URL, BASE_URL_PHOTO} from '../utills/constant';
import lazyImage from '../images/training.jpg';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPaginate from 'react-paginate';
import axios from "axios";
import AntDesingStyle from "./AntDesingStyle";
import {Spin} from "antd";
import SearchNotFound from "./SearchNotFound";

function SearchPageCom() {
    const {getCookie, selectFontBig, selectFontSmall} = useContext(AppContext);

    const {t} = useTranslation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchData, setSearchData] = useState([]);
    const [searchDataLoading, setSearchDataLoading] = useState(false);
    const keyword = searchParams.get('keyword');
    const currentPage = Number(searchParams.get("page")) || 0;

    let limitPage = 9;

    useEffect(() => {
        (async () => {
            try {
                setSearchDataLoading(true);
                const res = await axios.get(`${BASE_URL}/api/blog/search?page=${currentPage}&pageSize=${limitPage}&keyword=${keyword}`)
                if (res?.data?.success) {
                    console.log(res?.data);
                    setSearchData(res?.data);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setSearchDataLoading(false);
            }
        })()
    }, [currentPage, searchParams.get('keyword')]);

    const handlerPageClicked = async (data) => {
        let selectedPage = data.selected;
        setSearchParams({page: selectedPage});
        navigate(`/search?page=${selectedPage}&keyword=${keyword}`)

        window.scrollTo({top: 100});
    }

    return (
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
            <AntDesingStyle>
                <Spin spinning={searchDataLoading} tip={t("SearchCertificate.loading")} size="large">
                    {searchDataLoading && <div style={{minHeight:"calc(100vh - 229px)"}}></div>}
                    {!searchDataLoading && searchData?.object?.length && <>
                        <div className="container section-padding">
                            <div className="row">
                                {searchData?.object && searchData?.object?.map((texts, index) =>
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
                                                <p className="post-data-a">
                                                    {new Date(texts?.publishDate)?.toLocaleString("ru-Ru", {
                                                        day: 'numeric',
                                                        month: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </p>
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
                                                            getCookie?.i18next === "uz" ? texts?.anons_uz : texts?.anons_ru}
                                                </p>
                                            </div>
                                            <div className="post-link d-flex justify-content-between w-100"
                                                 style={{padding: '1.25rem'}}>
                                                <Link to={/blogs/ + texts?.category.id + '/' + texts?.id}
                                                      className={selectFontBig ? "link-btn text-custom-blue fw-600 fs-26" : selectFontSmall ? "link-btn text-custom-blue fw-600 fs-14" : "link-btn text-custom-blue fw-600 fs-20"}
                                                >{t("BlogPageCom.readMore")}</Link>
                                                <p className={selectFontBig ? "fs-26 text-light-white" : selectFontSmall ? "text-light-white" : "fs-20 text-light-white"}>
                                                    <i className="fas fa-street-view"></i>
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
                            pageCount={Math.ceil(searchData?.totalElements / limitPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlerPageClicked}
                            forcePage={currentPage}
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
                        /></>}
                    {!searchDataLoading && searchData?.object?.length === 0 && <SearchNotFound/>}
                </Spin>
            </AntDesingStyle>
        </div>
    )
}

export default SearchPageCom;