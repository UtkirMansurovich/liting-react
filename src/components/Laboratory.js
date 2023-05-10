import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom';
import {BASE_URL_PHOTO} from "../utills/constant";

function SampleNextArrow(props){
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', right:"-50px"}}
            onClick={onClick}
        > </div>
    );
}

function SamplePrevArrow(props){
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', left:"-70px"}}
            onClick={onClick}
        > </div>
    );
}

const Laboratory = () => {

    const {getCookie, labor, selectFontBig, selectFontSmall} = useContext(AppContext);

        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            initialSlide: 0,
            responsive:[
                {
                    breakpoint:1024,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll:1,
                        initialSlide: 2,
                    }
                },
                {
                    breakpoint:600,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    }
                },
            ]
        };
        const { t } = useTranslation();

    return (
        <section className="section-padding section-padding bg-light-white bg-light-white our_articles">
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        <h3 data-text={t("Laboratory.Title")} className="text-theme fw-700">
                            {t("Laboratory.Title")}
                        </h3>
                    </div>
                    <div className="section-description">
                        <p className={selectFontBig ? "fs-26 text-light-white" : selectFontSmall ? "text-light-white" : "fs-20 text-light-white"}>{t("Laboratory.Text")}</p>
                        <p className={selectFontBig ? "fs-26 text-light-white" : selectFontSmall ? "text-light-white" : "fs-20 text-light-white"}>{t("Laboratory.Text-2")}</p>
                    </div>
                </div>
                <Slider {...settings}>
                        {labor && labor?.map((slides, index) =>
                            <div key={index} className="sliderBlockContainer">
                                <div className="sliderBlockContainerChild">
                                    <div className="slidesOurBlockImgBox">
                                        <img src={BASE_URL_PHOTO + slides?.mainImage?.hashId} className="slidesOurBlockImg" />
                                    </div>
                                    <div className="post-date">
                                        <p className="post-data-a">2022.11.11</p>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="cats">
                                                <Link to={/blogs/+slides?.category?.id} className="cats-office">{
                                                       getCookie?.i18next === "en" ? slides?.category?.name_en.slice(0,20) :
                                                           getCookie?.i18next === "uz" ? slides?.category?.name_uz.slice(0, 20) :
                                                               getCookie?.i18next === "oz" ? slides?.category?.name_oz.slice(0, 20) : slides?.category?.name_ru.slice(0, 20)
                                                   }...</Link> 
                                                {/* <a href="#" className="cats-rent">{slides?.rent}</a> */}
                                            </div>
                                        </div>
                                        <div className="post-title-parent">
                                            <h2 className={selectFontBig ? "fs-26 post-title" : selectFontSmall ? "post-title" : "post-title fs-20"}>
                                                <Link to={/blogs/+slides?.category?.id+'/'+slides?.id} href="#" className="text-theme">{
                                                            getCookie?.i18next === "en" ? slides?.title_en :
                                                                getCookie?.i18next === "uz" ? slides?.title_uz :
                                                                    getCookie?.i18next === "oz" ? slides?.title_oz : slides?.title_ru
                                                    }</Link>
                                            </h2>
                                            <p className={selectFontBig ? "fs-26 text-light-white no-margin" : selectFontSmall ? "text-light-white no-margin" : "text-light-white no-margin fs-20"}>{
                                                    getCookie?.i18next === "en" ? slides?.anons_en :
                                                        getCookie?.i18next === "uz" ? slides?.anons_uz :
                                                            getCookie?.i18next === "oz" ? slides?.anons_oz : slides?.anons_ru
                                            }</p>
                                        </div>
                                        <div className="blog-footer-meta bg-custom-white padding-20">
                                            {/* <div className="post-author">
                                                <div className="author-img">
                                                   <a href="blog-single.html">
                                                       <img src="../assets/images/homepage-1/admin-1-40x40.jpg" className="rounded-circle" alt="#"/>
                                                   </a>
                                                </div>
                                                <span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>
                                            </div> */}
                                            <div className="post-link d-flex justify-content-between w-100">
                                                <Link to={/blogs/+slides?.category?.id+'/'+slides?.id} className={selectFontBig ? "fs-26 link-btn text-custom-blue fw-600" : selectFontSmall ? "link-btn text-custom-blue fw-600 fs-14" : "link-btn text-custom-blue fw-600 fs-20"}>{t("StartBlock.readMore")}</Link>
                                                   {/* <p className="text-light-white">
                                                    <i className="fas fa-eye"></i>
                                                    <span className="pl-1">{slides?.view_count}</span>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </Slider>
            </div>
        </section>
    )
}

export default Laboratory;