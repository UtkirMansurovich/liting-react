import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import Preloader from "./Preloader";
import {AppContext} from "../context";
import {BASE_URL_PHOTO} from "../utills/constant";
import {Link} from 'react-router-dom';

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

    const {slider} = useContext(AppContext);

    return(
        <Slider {...setting}>
            {slider.map((slide, index) =>
                <div key={index} >
                    <div style={{width:'100%', height:'85vh', overflow:'hidden', position:'relative'}}>
                        <div style={{
                            background:`url(${BASE_URL_PHOTO + slide.mainImage.hashId}) no-repeat center center/cover`,
                            width:'100%',
                            height:'100%',
                            animation: 'scale 20s linear infinite',
                            position:'absolute',
                            top:'0',
                            zIndex:'1'
                        }}> </div>
                        <div className="divOpacity">
                            <div className="divText">
                                <h1 className="slideH1">{slide.title_oz.slice(0,20)}<span className="h1Span">{slide.title_oz.slice(20, 40)}</span></h1>
                                <div className="slideP" dangerouslySetInnerHTML={{__html: slide.text_oz}}/>
                            </div>
                            <div>
                                <Link to={/blogs/+slide.category.id+'/'+slide.id} className="btn-first btn-submit text-custom-white mr-3 mt-4">ЧИТАТЬ ДАЛЕЕ</Link>
                                <Link to={/blogs/+slide.category.id} className="btn-first btn-border mt-4">{slide.category.name_oz}</Link>
                            </div>
                        </div>
                    </div>

                </div>
            ) }
        </Slider>
    )
}

export default StartBanner