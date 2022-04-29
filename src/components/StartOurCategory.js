import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {useTranslation} from "react-i18next";
import {AppContext} from "../context";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", }}
            onClick={onClick}
        > </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', }}
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
        const { getCookie } = useContext(AppContext);

        return (
            <div>
                <section className="section-padding bg-light-white our-category">
                    <div className="container">
                        <div className="section-header">
                            <div className="section-heading">
                                <h5 className="text-custom-blue wow fadeUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartOurCategory.ourCategory")}</h5>
                                <h3 className="text-theme fw-700">{t("StartOurCategory.ourLevel")}</h3>
                            </div>
                            <div className="section-description">
                                <p className="text-light-white">{t("StartOurCategory.text")}</p>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {slidesOurCategory.map((slides, index) =>
                                <a href="#" key={index}>
                                    <div style={{overflow:'hidden'}}>
                                        <div className="slidesTexts" style={{background: `url(${slides.image}) no-repeat center center/cover`}}>
                                            <div className="slidesTextsChild">
                                                <h5 className="text-custom-blue no-margin fw-600 fs-20 ourCategorySlideH5">
                                                    {getCookie.i18next === 'en' ? slides.title_en :
                                                        getCookie.i18next === 'uz' ? slides.title_uz :
                                                            getCookie.i18next === 'oz' ? slides.title_oz : slides.title_ru }
                                                </h5>
                                                <p className="text-light-white no-margin ourCategorySlideP">
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
                        <div className="col-12 p-0">
                            <div className="categories-tabs">
                                 <ul className="custom nav nav-tabs">
                                     <li className="nav-item">
                                         <a className="nav-link active text-custom-black" data-toggle="tab" href="#home-maintainance">
                                             <span><img src="../assets/images/svg/home-main.svg" className="image-fit" alt="svg"/></span>{t("StartOurCategory.service")}
                                         </a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link text-custom-black" data-toggle="tab" href="#gen-construction">
                                             <span><img src="../assets/images/svg/gen-const.svg" className="image-fit" alt="svg"/></span>{t("StartOurCategory.construction")}
                                         </a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link text-custom-black" data-toggle="tab" href="#restructured">
                                             <span><img src="../assets/images/svg/restructer.svg" className="image-fit" alt="svg"/></span>{t("StartOurCategory.restructured")}
                                         </a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link text-custom-black" data-toggle="tab" href="#project-management">
                                             <span><img src="../assets/images/svg/project-m.svg" className="image-fit" alt="svg"/></span>{t("StartOurCategory.control")}
                                         </a>
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


