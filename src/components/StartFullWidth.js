import React from "react";

const StartFullWidth = () => {
    return(
        <section className="full-services-sec bg-light-white">
            <div className="container-fluid no-padding">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="left-side animate-img full-height wow fadeInLeftBig">
                            <img src="../assets/images/video1.jpg" className="image-fit" alt="img"/>
                            <div className="service-text-2 bg-custom-black text-center">
                                <h5 className="text-custom-white mb-1">Доверяют</h5>
                                <h2 className="no-margin text-custom-white"><span className="count">15090</span><span>+</span></h2>
                            </div>
                            <div className="video-play-btn bg-custom-blue padding-10">
                                <h4 className="text-custom-white no-margin fw-400">Play video</h4>
                                <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" className="popup-video">
                                    <i className="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-side custom-container wow fadeInRightBig">
                            <div className="text-wrapper">
                                <h2 className="text-custom-white fw-600">Мы обеспечиваем строительство сложных проблем и все виды услуг. Свяжитесь с нами сегодня для получения лучших услуг.</h2>
                                <p className="text-custom-white mb-xl-20 fs-16 fw-600">Мы обеспечиваем строительство сложных проблем и все виды услуг. Свяжитесь с нами сегодня для получения лучших услуг.</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="right-side-box wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                            <div className="icon">
                                                <i className="flaticon-architecture-and-city"></i>
                                            </div>
                                            <h5 className="text-custom-white">Высококачественная конструкция</h5>
                                            <p className="text-custom-white">это просто фиктивный текст полиграфической и наборной промышленности. </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="right-side-box wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <div className="icon">
                                                <i className="flaticon-360-degrees"></i>
                                            </div>
                                            <h5 className="text-custom-white">Вы можете узнать что угодно</h5>
                                            <p className="text-custom-white">это просто фиктивный текст полиграфической и наборной промышленности. </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn-first btn-border">Запланировать встречу</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartFullWidth