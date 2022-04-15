import React from "react";

const StartClient = () => {
    return(
        <section className="client p-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="section-title wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                            <h2>our customers love</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua saidul</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="slider-area position-relative">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="client-img-slider swiper-container wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1s">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="image">
                                                    <img src="../assets/images/client1.png" alt="Client"/>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="image">
                                                    <img src="../assets/images/client2.png" alt="Client"/>
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
                                                            <h5>Zachary Farmer</h5>
                                                            <p className="designation">developer</p>
                                                        </div>
                                                        <ul className="rating d-flex">
                                                            <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                            <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                            <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                            <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                            <li style={{listStyle: 'none'}}><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris</p>
                                                    <img src="../assets/images/signature.png" alt="Signature"/>
                                                </div>
                                            </div>
                                            <div className="item swiper-slide">
                                                <div className="content">
                                                    <div className="author d-flex justify-content-between align-items-center">
                                                        <div className="name">
                                                            <h5>dolor dale</h5>
                                                            <p className="designation">developer</p>
                                                        </div>
                                                        <ul className="rating d-flex">
                                                            <li style={{listStyle: 'none'}} > < i className="fas fa-star" ></i></li>
                                                            <li style={{listStyle: 'none'}} > < i className="fas fa-star" ></i></li>
                                                            <li style={{listStyle: 'none'}} > < i className="fas fa-star" ></i></li>
                                                            <li style={{listStyle: 'none'}} > < i className="fas fa-star" ></i></li>
                                                            <li style={{listStyle: 'none'}} > <i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris</p>
                                                    <img src="../assets/images/signature.png" alt="Signature"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*slider navigatio*/}
                            <div className="client-nav">
                                <button className="client-button-prev">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button className="client-button-next">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartClient