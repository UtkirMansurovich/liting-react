import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {useTranslation} from "react-i18next";
import {AppContext} from "../context";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", right: "-50px", top: "65%"}}
            onClick={onClick}
        > </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', left: "-70px", top: "65%"}}
            onClick={onClick}
        > </div>
    );
}

const StartOurCategory = ({slidesOurCategory}) => {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            mobileFirst:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow:3,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow:2,
                        slidesToScroll:1,
                        initialSlide:1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow:1,
                        slidesToScroll:1,
                    }
                },
            ]
        }

        const { t } = useTranslation();
        const { getCookie, selectFontBig, selectFontSmall } = useContext(AppContext);
        const [ counterOn, setCounterOn ] = useState(false);

        return (
            <div>
                <section className="section-padding bg-light-white our-category">
                    <div className="container">
                        <div className="section-header">
                            <div className="section-heading">
                                {/*<h5 className="text-custom-blue wow fadeUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartOurCategory.ourCategory")}</h5>*/}
                                <h3 className="text-theme fw-700">
                                    {t("StartOurCategory.ourCategory")}
                                    {/*{t("StartOurCategory.ourLevel")}*/}
                                </h3>
                            </div>
                            <div className="section-description">
                                <p className={selectFontBig ? "fs-26 text-light-white" : selectFontSmall ? 'text-light-white' : 'fs-20 text-light-white'}>{t("StartOurCategory.text")}</p>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {slidesOurCategory && slidesOurCategory.map((slides, index) =>
                                <a href="#" key={index}>
                                    <div style={{overflow:'hidden', padding:'0 10px'}}>
                                        <div className="slidesTexts" style={{background: `url(${slides.image}) no-repeat center center/cover`}}>
                                            <div className="slidesTextsChild">
                                                <h5 className={selectFontBig ? "fs-26 text-custom-blue no-margin fw-600 fs-20 ourCategorySlideH5" : selectFontSmall ? 'text-custom-blue no-margin fw-600 fs-20 ourCategorySlideH5' : 'fs-20 text-custom-blue no-margin fw-600 fs-20 ourCategorySlideH5'}>
                                                    {getCookie.i18next === 'en' ? slides.title_en :
                                                        getCookie.i18next === 'uz' ? slides.title_uz :
                                                            getCookie.i18next === 'oz' ? slides.title_oz : slides.title_ru }
                                                </h5>
                                                <p className={selectFontBig ? "fs-26 text-light-white no-margin ourCategorySlideP" : selectFontSmall ? "text-light-white no-margin ourCategorySlideP" : "fs-20 text-light-white no-margin ourCategorySlideP"}>
                                                    {slides.text}
                                                    {getCookie.i18next === 'en' ? slides.text_en :
                                                        getCookie.i18next === 'uz' ? slides.text_uz :
                                                            getCookie.i18next === 'oz' ? slides.text_oz : slides.text_ru }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </Slider>
                        <div className="col-12 p-0" style={{marginTop:'70px'}}>
                            <div className="categories-tabs">
                                 <ul className="custom nav nav-tabs">
                                     <li className="nav-item">
                                         <p className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                             <span style={{display:'flex', justifyContent:'center', alignItems:'self-end'}}>
                                                 <img src="../assets/images/svg/1.png" className="image-fit" alt="svg"/>
                                                 <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    {counterOn && <CountUp duration={2.75} end={414} style={{margin:'0 0 0 5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}
                                                 </ScrollTrigger>
                                             </span>
                                             {t("StartOurCategory.service")}
                                         </p>
                                     </li>
                                     <li className="nav-item">
                                         <p className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                             <span style={{display:'flex', justifyContent:'center', alignItems:'self-end'}}>
                                                 <img src="../assets/images/svg/4.png" className="image-fit" alt="svg"/>
                                                 <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    {counterOn && <CountUp duration={2.75} end={57} style={{margin:'0 0 0 5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}
                                                 </ScrollTrigger>
                                             </span>
                                             {t("StartOurCategory.control")}
                                         </p>
                                     </li>
                                     <li className="nav-item">
                                         <p className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                             <span style={{display:'flex', justifyContent:'center', alignItems:'self-end', marginBottom:'-5px'}}>
                                                 <img src="../assets/images/svg/5.svg" className="image-fit" alt="svg" style={{marginTop:"-5px"}}/>
                                                 <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    {counterOn && <CountUp duration={2.75} end={357} style={{margin:'0 0 15px -5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}
                                                 </ScrollTrigger>
                                             </span>
                                             {t("StartOurCategory.construction")}
                                         </p>
                                     </li>
                                     <li className="nav-item">
                                         <p className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                             <span style={{display:'flex', justifyContent:'center', alignItems:'self-end'}}>
                                                 <img src="../assets/images/svg/3.png" className="image-fit" alt="svg"/>
                                                 <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} style={{display:"flex", alignItems:'end', position:'relative'}}>
                                                    {counterOn && <CountUp duration={2.75} end={2000} style={{margin:'0 0 0 5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}<span style={{fontSize:'28px', margin: '0', position:'absolute', left:'46px', bottom:'-1px', color:'#7c8a97'}}>+</span>
                                                 </ScrollTrigger>
                                             </span>
                                             {t("StartOurCategory.restructured")}
                                         </p>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                    </div>
                </section>

            </div>
        );
    }

export default StartOurCategory


