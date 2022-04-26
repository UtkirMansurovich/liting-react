import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {AppContext} from "../context";
import {BASE_URL_PHOTO} from "../utills/constant";
import {Link} from 'react-router-dom';

function SampleNextArrow(props){
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block',}}
            onClick={onClick}
        > </div>
    );
}

function SamplePrevArrow(props){
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block'}}
            onClick={onClick}
        > </div>
    );
}

const StartBlock = ({slidesBlock}) => {
    const {allBlogs} = useContext(AppContext);
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
        return(
            <section className="section-padding section-padding bg-light-white our-history bg-light-white our_articles">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">Наш блог</h5>
                            <h3 className="text-theme fw-700">Наш еженедельный строительный блог</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-light-white">Это просто текст-пустышка полиграфической и наборной индустрии был стандартным фиктивным текстом в отрасли.</p>
                        </div>
                    </div>
                    <Slider {...settings}>
                            {allBlogs && allBlogs.map((slides, index) =>
                               <div key={index} className="sliderBlockContainer">
                                   <div className="sliderBlockContainerChild">
                                       <div className="slidesOurBlockImgBox">
                                           <img src={BASE_URL_PHOTO + slides.mainImage.hashId} className="slidesOurBlockImg" />
                                       </div>
                                       <div className="post-date">
                                           <a href="#" className="post-data-a">{slides.createdAt.slice(0,10)}</a>
                                       </div>
                                       <div>
                                           <div>
                                               <div className="cats">
                                                   <a href="#" className="cats-office">{slides.category.name_oz.slice(0,20)}...</a>
                                                   {/*<a href="#" className="cats-rent">{slides.rent}</a>*/}
                                               </div>
                                           </div>
                                           <div className="post-title-parent">
                                               <h2 className="post-title">
                                                   <a href="#" className="text-theme">{slides.title_oz}</a>
                                               </h2>
                                               <p className="text-light-white no-margin">{slides.anons_oz}</p>
                                           </div>
                                           <div className="blog-footer-meta bg-custom-white padding-20">
                                               {/*<div className="post-author">*/}
                                                   {/*<div className="author-img">*/}
                                                   {/*    <a href="blog-single.html">*/}
                                                   {/*        <img src="../assets/images/homepage-1/admin-1-40x40.jpg" className="rounded-circle" alt="#"/>*/}
                                                   {/*    </a>*/}
                                                   {/*</div>*/}
                                                   {/*<span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>*/}
                                               {/*</div>*/}
                                               <div className="post-link">
                                                   <Link to={/blogs/+slides.category.id+'/'+slides.id} className="link-btn text-custom-blue fw-600 fs-14">Читать далее</Link>
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
export default StartBlock

