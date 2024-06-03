import React, {useContext} from 'react'
import { AppContext } from '../context'
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {BASE_URL_PHOTO} from "../utills/constant";
import lazyImage from "../images/training.jpg";
import {Link} from "react-router-dom";
import Slider from "react-slick";

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

function UsefulResources({UsefulResourcesData}) {
    const {getCookie, selectFontBig, selectFontSmall} = useContext(AppContext);
    const { t } = useTranslation();

    const settings = {
        infinite: true,
        slidesToShow: 5,
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

    return (
        <div>
            <section style={{paddingTop:'35px', height: "350px"}} className="bg-light-white">
                <div className="useful-resources-container">
                    <div className="section-header">
                        <div className="section-heading">
                            {/* <h5 className="text-custom-blue wow fadeUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartOurCategory.ourCategory")}</h5> */}
                            <h3 className="text-theme fw-700">
                                {/* {t("StartOurCategory.ourCategory")} */}
                                {t("UsefulResources.title")}
                            </h3>
                        </div>
                        <div className="section-description">
                            {/* <p className={selectFontBig ? "fs-26 text-light-white" : selectFontSmall ? 'text-light-white' : 'fs-20 text-light-white'}>{t("StartOurCategory.text")}</p> */}
                        </div>
                    </div>
                    <Slider {...settings} >
                        {UsefulResourcesData && UsefulResourcesData.map((slides, index) =>
                            <div className="useful-resources-container__card" key={index}>
                                <a href={
                                    getCookie.i18next === "en" ? slides?.link_en :
                                        getCookie.i18next === "uz" ? slides?.link_uz :
                                            getCookie.i18next === "oz" ? slides?.link_oz : slides?.link_ru}
                                   target="_blank">
                                    <img className="useful-resources-container__img" src={slides?.logo} alt="logo"
                                        style={slides?.id === 2 ? {width: "150px"} : {}}
                                    />
                                    <p className="useful-resources-container__name">
                                        {getCookie.i18next === "en" ? slides?.name_en :
                                            getCookie.i18next === "uz" ? slides?.name_uz :
                                                getCookie.i18next === "oz" ? slides?.name_oz : slides?.name_ru}
                                    </p>
                                </a>
                            </div>
                        )}
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default UsefulResources