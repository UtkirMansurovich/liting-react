import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

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
                            {slidesBlock.map((slides, index) =>
                               <div key={index} className="sliderBlockContainer">
                                   <div className="sliderBlockContainerChild">
                                       <a href="#">
                                           <img src={slides.image} className="slidesOurBlockImg" />
                                       </a>
                                       <div className="post-date">
                                           <a href="blog-single.html" className="post-data-a">09 Dec 2022</a>
                                       </div>
                                       <div>
                                           <div>
                                               <div className="cats">
                                                   <a href="#" className="cats-office">{slides.office}</a>
                                                   <a href="#" className="cats-rent">{slides.rent}</a>
                                               </div>
                                           </div>
                                           <div className="post-title-parent">
                                               <h2 className="post-title">
                                                   <a href="#" className="text-theme">{slides.title}</a>
                                               </h2>
                                               <p className="text-light-white no-margin">{slides.text}</p>
                                           </div>
                                           <div className="blog-footer-meta bg-custom-white padding-20">
                                               <div className="post-author">
                                                   <div className="author-img">
                                                       <a href="blog-single.html">
                                                           <img src="../assets/images/homepage-1/admin-1-40x40.jpg" className="rounded-circle" alt="#"/>
                                                       </a>
                                                   </div>
                                                   <span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>
                                               </div>
                                               <div className="post-link">
                                                   <a href="blog-single.html" className="link-btn text-custom-blue fw-600 fs-14">Читать далее</a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                            )}
                    </Slider>

                    {/*<div className="row">*/}
                    {/*    <div className="col-12">*/}
                    {/*        <div className="swiper-container blog-slider">*/}
                    {/*            <div className="swiper-wrapper" id="swiper-blog-main-page">*/}
                    {/*                <div className="swiper-slide">*/}
                    {/*                    /!*article *!/*/}
                    {/*                    {SliderOurCategory.map((slides, index) =>*/}
                    {/*                        <article className="post">*/}
                    {/*                            <div className="post-wrapper">*/}
                    {/*                                <div className="blog-img animate-img">*/}
                    {/*                                    <a href="blog-single.html">*/}
                    {/*                                        <img src="../assets/images/homepage-1/blog-1-350x300.jpg" className="img-fluid full-width" alt="blog"/>*/}
                    {/*                                    </a>*/}
                    {/*                                    <div className="post-video">*/}
                    {/*                                        <div className="video-btn-wrapper">*/}
                    {/*                                            <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" className="text-custom-blue popup-video">*/}
                    {/*                                                <i className="far fa-play-circle"></i>*/}
                    {/*                                            </a>*/}
                    {/*                                        </div>*/}
                    {/*                                    </div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="post-date">*/}
                    {/*                                    <a href="blog-single.html">09 Dec 2022</a>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="blog-meta bg-custom-white padding-20">*/}
                    {/*                                    <div className="cat-box">*/}
                    {/*                                        <div className="cats">*/}
                    {/*                                            <a href="#">Офис</a>*/}
                    {/*                                            <a href="#">Аренда</a>*/}
                    {/*                                        </div>*/}
                    {/*                                    </div>*/}
                    {/*                                    <h2 className="post-title">*/}
                    {/*                                        <a href="blog-single.html" className="text-theme">Цвета спальни, о которых вы никогда не пожалеете</a>*/}
                    {/*                                    </h2>*/}
                    {/*                                    <p className="text-light-white no-margin">Это просто текст-пустышка полиграфической и наборной индустрии.</p>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="blog-footer-meta bg-custom-white padding-20">*/}
                    {/*                                    <div className="post-author">*/}
                    {/*                                        <div className="author-img">*/}
                    {/*                                            <a href="blog-single.html">*/}
                    {/*                                                <img src="../assets/images/homepage-1/admin-1-40x40.jpg" className="rounded-circle" alt="#"/>*/}
                    {/*                                            </a>*/}
                    {/*                                        </div>*/}
                    {/*                                        <span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>*/}
                    {/*                                    </div>*/}
                    {/*                                    <div className="post-link">*/}
                    {/*                                        <a href="blog-single.html" className="link-btn text-custom-blue fw-600 fs-14">Читать далее</a>*/}
                    {/*                                    </div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                        </article>*/}
                    {/*                    )}*/}
                    {/*                    /!*article*!/*/}
                    {/*                </div>*/}


                                    {/*<div className="swiper-slide">*/}
                                    {/*    /!*article*!/*/}
                                    {/*    <article className="post">*/}
                                    {/*        <div className="post-wrapper">*/}
                                    {/*            <div className="blog-img animate-img">*/}
                                    {/*                <a href="blog-single.html">*/}
                                    {/*                    <img src="../assets/images/homepage-1/blog-2-350x300.jpg" className="img-fluid full-width" alt="blog"/>*/}
                                    {/*                </a>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="post-date">*/}
                                    {/*                <a href="blog-single.html">26 Oct 2022</a>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="blog-meta bg-custom-white padding-20">*/}
                                    {/*                <div className="cat-box">*/}
                                    {/*                    <div className="cats">*/}
                                    {/*                        <a href="#">Офис</a>*/}
                                    {/*                        <a href="#">Аренда</a>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <h2 className="post-title">*/}
                                    {/*                    <a href="blog-single.html" className="text-theme">Цвета спальни, о которых вы никогда не пожалеете</a></h2>*/}
                                    {/*                <p className="text-light-white no-margin">Это просто текст-пустышка полиграфической и наборной индустрии.</p>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="blog-footer-meta bg-custom-white padding-20">*/}
                                    {/*                <div className="post-author">*/}
                                    {/*                    <div className="author-img">*/}
                                    {/*                        <a href="blog-single.html">*/}
                                    {/*                            <img src="../assets/images/homepage-1/admin-2-40x40.jpg" className="rounded-circle" alt="#"/>*/}
                                    {/*                        </a>*/}
                                    {/*                    </div>*/}
                                    {/*                    <span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="post-link">*/}
                                    {/*                    <a href="blog-single.html" className="link-btn text-custom-blue fw-600 fs-14">Читать далее</a>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </article>*/}
                                    {/*    /!*article*!/*/}
                                    {/*</div>*/}
                                    {/*<div className="swiper-slide">*/}
                                    {/*    /!*article*!/*/}
                                    {/*    <article className="post">*/}
                                    {/*        <div className="post-wrapper">*/}
                                    {/*            <div className="blog-img animate-img">*/}
                                    {/*                <a href="blog-single.html">*/}
                                    {/*                    <img src="../assets/images/homepage-1/blog-2-350x300.jpg" className="img-fluid full-width" alt="blog"/>*/}
                                    {/*                </a>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="post-date">*/}
                                    {/*                <a href="blog-single.html">26 Oct 2022</a>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="blog-meta bg-custom-white padding-20">*/}
                                    {/*                <div className="cat-box">*/}
                                    {/*                    <div className="cats">*/}
                                    {/*                        <a href="#">Офис</a>*/}
                                    {/*                        <a href="#">Аренда</a>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <h2 className="post-title"><a href="blog-single.html" className="text-theme">Что делать за год до покупки квартиры</a></h2>*/}
                                    {/*                <p className="text-light-white no-margin">Это просто текст-пустышка полиграфической и наборной индустрии.</p>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="blog-footer-meta bg-custom-white padding-20">*/}
                                    {/*                <div className="post-author">*/}
                                    {/*                    <div className="author-img">*/}
                                    {/*                        <a href="blog-single.html">*/}
                                    {/*                            <img src="../assets/images/homepage-1/admin-3-40x40.jpg" className="rounded-circle" alt="#"/>*/}
                                    {/*                        </a>*/}
                                    {/*                    </div>*/}
                                    {/*                    <span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="post-link">*/}
                                    {/*                    <a href="blog-single.html" className="link-btn text-custom-blue fw-600 fs-14">Читать далее</a>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </article>*/}
                                    {/*    /!*article*!/*/}
                                    {/*</div>*/}
                    {/*            </div>*/}
                    {/*            <a href="/category" className="btn-first btn-submit text-custom-black mr-1 float-right">ЧИТАТЬ ДАЛЕЕ</a>*/}
                    {/*            /!*<a href="/category" style="background: #2596be;!important;" class="btn btn-success w-25 float-right">Read more</a>*!/*/}
                    {/*        </div>*/}
                    {/*        /!*Add Arrows*!/*/}
                    {/*        <div className="slider-btn">*/}
                    {/*            <div className="blog-button-next swiper-button-next">*/}
                    {/*                <span className="flaticon-arrow-1"></span>*/}
                    {/*            </div>*/}
                    {/*            <div className="blog-button-prev swiper-button-prev">*/}
                    {/*                <span className="flaticon-left"></span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        /!*Add Pagination*!/*/}
                    {/*        <div className="blog-pagination swiper-pagination"></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        )
}
export default StartBlock

