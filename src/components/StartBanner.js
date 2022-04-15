import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Preloader from "./Preloader";

function SampleNextArrow (props) {
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', padding:'100px'}}
            onClick={onClick}
        > </div>
    );
}
function SamplePrevArrow (props) {
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', padding:'80px'}}
            onClick={onClick}
        > </div>
    )
}
const StartBanner = ({slideBanner}) => {
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    }

    return(
        <Slider {...setting}>
            {slideBanner.map((slide, index) =>
                <div key={index} >
                    <div style={{width:'100%', height:'85vh', overflow:'hidden', position:'relative'}}>
                        <div style={{
                            background:`url(${slide.image}) no-repeat center center/cover`,
                            width:'100%',
                            height:'100%',
                            animation: 'scale 20s linear infinite',
                            position:'absolute',
                            top:'0',
                            zIndex:'1'
                        }}> </div>
                        <div className="divOpacity">
                            <div className="divText">
                                <h1 className="slideH1">{slide.title}<span className="h1Span"> {slide.titleSpan}</span></h1>
                                <p className="slideP">{slide.text}</p>
                            </div>
                            <div>
                                <a href="#" className="btn-first btn-submit text-custom-white mr-3 mt-4">ЧИТАТЬ ДАЛЕЕ</a>
                                <a href="#" className="btn-first btn-border mt-4">ЗАПИСАТЬСЯ НА ПРИЕМ</a>
                            </div>
                        </div>
                    </div>

                </div>
            ) }
        </Slider>
    )
}

export default StartBanner