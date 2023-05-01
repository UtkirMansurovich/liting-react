import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {AppContext} from "../context";
import {BASE_URL_PHOTO} from "../utills/constant";
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";

function SampleNextArrow (props) {
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', right:'80px'}}
            onClick={onClick}
        > </div>
    );
}
function SamplePrevArrow (props) {
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', left:'80px'}}
            onClick={onClick}
        > </div>
    )
}
const StartBanner = () => {
    const setting = {
        infinitive: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 2000,
        pauseOnHover: false,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1462,
                settings: {
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    }

    const {slider, getCookie, closeContrast, contrastRef, openSearch, selectFontSmall, selectFontBig} = useContext(AppContext);
    const { t } = useTranslation();
    
    if(slider.length > 0 ){
    return(
      <Slider {...setting} ref={contrastRef} onClick={closeContrast}>
          {slider && slider.map((slide, index) =>
            <div key={index} >
                <div style={{
                    width:'100%',
                    height:'85vh',
                    overflow:'hidden',
                    position:'relative'
                }} >
                    <div style={{
                            background:`url(${BASE_URL_PHOTO + slide.mainImage.hashId}) no-repeat center center/cover`,
                            width:'100%',
                            height:'100%',
                            animation: 'scale 20s linear infinite',
                            position:'absolute',
                            top:'0',
                            zIndex:'1' }}>
                    </div>

                    <div className="divOpacity" >
                        <h1 className="titleLogo">АО «O‘ZLITINEFTGAZ»</h1>
                        <div className="divText" >
                            <h1 className="slideH1">
                                {getCookie.i18next === 'en' ? slide.title_en 
                                    : getCookie.i18next === 'uz' ? slide.title_uz
                                    : getCookie.i18next === 'oz' ? slide.title_oz : slide.title_ru}
                            </h1>
                            <p className={selectFontBig ? "fs-26 slideP" : selectFontSmall ? 'slideP' : 'fs-20 slideP'}>
                                {getCookie.i18next === 'en' ? slide.anons_en :
                                  getCookie.i18next === 'uz' ? slide.anons_uz :
                                    getCookie.i18next === 'oz' ? slide.anons_oz : slide.anons_ru }
                            </p>
                        </div>
                        <div>
                            <Link to={/blogs/+slide.category.id+'/'+slide.id} className={selectFontBig ? "fs-26 btn-first btn-submit text-custom-white mr-3 mt-4" : selectFontSmall ? 'btn-first btn-submit text-custom-white mr-3 mt-4' : 'fs-20 btn-first btn-submit text-custom-white mr-3 mt-4'}>{t("StartBanner.readMore")}</Link>
                            <Link to={/blogs/+slide.category.id} className={selectFontBig ? "fs-26 btn-first btn-border mt-4" : selectFontSmall ? 'btn-first btn-border mt-4' : "fs-20 btn-first btn-border mt-4"}>
                                {getCookie.i18next === 'en' ? slide.category.name_en :
                                  getCookie.i18next === 'uz' ? slide.category.name_uz :
                                    getCookie.i18next === 'oz' ? slide.category.name_oz : slide.category.name_ru }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
          ) }
      </Slider>
    )}else { 
        return (
            <div className="preloader">
                <img src="../assets/images/pre-loader-1.svg" alt="img"/>
            </div>
        )}
}

export default StartBanner