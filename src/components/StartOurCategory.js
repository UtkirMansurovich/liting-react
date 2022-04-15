import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

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
        return (
            <div>
                <section className="section-padding bg-light-white our-category">
                    <div className="container">
                        <div className="section-header">
                            <div className="section-heading">
                                <h5 className="text-custom-blue wow fadeUp" data-wow-duration="1s" data-wow-delay="0.3s">НАШИ КАТЕГОРИИ</h5>
                                <h3 className="text-theme fw-700">Наша инженерная категория мирового уровня</h3>
                            </div>
                            <div className="section-description">
                                <p className="text-light-white">Проектные работы по полному циклу с разработкой и реализацией высокотехнологичной, качественной проектной документации.</p>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {slidesOurCategory.map((slides, index) =>
                                <a href="#" key={index}>
                                    <div style={{overflow:'hidden'}}>
                                        <div className="slidesTexts" style={{background: `url(${slides.image}) no-repeat center center/cover`}}>
                                            <div className="slidesTextsChild">
                                                <h5 className="text-custom-blue no-margin fw-600 fs-20 ourCategorySlideH5">{slides.title}</h5>
                                                <p className="text-light-white no-margin ourCategorySlideP">{slides.text}</p>
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
                                             <span><img src="../assets/images/svg/home-main.svg" className="image-fit" alt="svg"/></span>Обслуживание дома
                                         </a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link text-custom-black" data-toggle="tab" href="#gen-construction">
                                             <span><img src="../assets/images/svg/gen-const.svg" className="image-fit" alt="svg"/></span>Общее строительство
                                         </a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link text-custom-black" data-toggle="tab" href="#restructured">
                                             <span><img src="../assets/images/svg/restructer.svg" className="image-fit" alt="svg"/></span>Реструктурированный
                                         </a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link text-custom-black" data-toggle="tab" href="#project-management">
                                             <span><img src="../assets/images/svg/project-m.svg" className="image-fit" alt="svg"/></span>Управление проектом
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


