import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";

function SampleNextArrow (props) {
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', right:'-60px'}}
            onClick={onClick}
        > </div>
    );
}
function SamplePrevArrow (props) {
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', left:'-60px'}}
            onClick={onClick}
        > </div>
    )
}

const StartClient = ({sliderClient}) => {
    const setting = {
        infinitive: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2500,
        pauseOnHover: false,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    }

    const {getCookie, selectFontBig, selectFontSmall} = useContext(AppContext);
    const { t } = useTranslation();

    return(
        <section className="client p-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="section-title wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                            <h2>{t("StartClient.title")}</h2>
                            {/* <p>{t("StartClient.text")}</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <Slider {...setting}>
                {sliderClient && sliderClient.map((slides, index)=>
                    <div key={index}>
                            <div className="col-lg-12">
                                <div className="slider-area position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="client-img-slider swiper-container wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1s">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="image">
                                                            <img src={slides?.image} alt="" className="image__client"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="client-slider swiper-container wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="1s">
                                                <div className="swiper-wrapper">
                                                    <div className="item swiper-slide">
                                                        <div className="content">
                                                            <div className="author d-flex justify-content-between align-items-center">
                                                                <div className="name">
                                                                    <h5 className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"} style={{textTransform: 'capitalize'}}>
                                                                        {getCookie.i18next === 'en' ? slides?.fullName_en :
                                                                            getCookie.i18next === "uz" ? slides?.fullName_uz :
                                                                                getCookie.i18next === "oz" ? slides?.fullName_oz : slides?.fullName_ru}
                                                                    </h5>
                                                                    <p className={selectFontBig ? "fs-26 designation" : selectFontSmall ? "designation" : "fs-20 designation"}>
                                                                        {getCookie.i18next === "en" ? slides?.position_en :
                                                                            getCookie.i18next === "uz" ? slides?.position_uz :
                                                                                getCookie.i18next === "oz" ? slides?.position_oz : slides?.position_ru}
                                                                    </p>
                                                                </div>
                                                                <ul className="rating d-flex">
                                                                    <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                                    <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                                    <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                                    <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                                    <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                                </ul>
                                                            </div>
                                                            <p className={selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"}>
                                                                {getCookie.i18next === "en" ? slides?.text_en :
                                                                    getCookie.i18next === "uz" ? slides?.text_uz :
                                                                        getCookie.i18next === "oz" ? slides?.text_oz : slides?.text_ru}
                                                            </p>
                                                            {/* <img src={slides.signature} alt="Signature"/> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default StartClient