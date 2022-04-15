import React from "react";

const StartService = () => {
    return(
        <section className="section-padding our-services">
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">Our Services</h5>
                        <h3 className="text-theme fw-700">Мы охватили почти все услуги</h3>
                    </div>
                    <div className="section-description">
                        <p className="text-light-white">Это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="filter-gallery custom-tabs mb-xl-40">
                            <ul className="custom">
                                <li className="active" data-filter="*">
                                    <a href="#" className="text-custom-black">Все</a>
                                </li>
                                <li data-filter=".h-main">
                                    <a href="#" className="text-custom-black">Обслуживание дома</a>
                                </li>
                                <li data-filter=".genrl-cons">
                                    <a href="#" className="text-custom-black">Общее строительство</a>
                                </li>
                                <li data-filter=".restructured">
                                    <a href="#" className="text-custom-black">Реструктурированный</a>
                                </li>
                                <li data-filter=".pro-manage">
                                    <a href="#" className="text-custom-black">Управление проектом</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row gallery-grid">
                            <div className="col-lg-3 col-md-6 filter-box h-main">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service1.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Плоский</h5>
                                            <p className="text-light-white no-margin">Обслуживание дома</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box genrl-cons">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service2.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Отели</h5>
                                            <p className="text-light-white no-margin">Общее строительство</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box restructured">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service3.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Здания</h5>
                                            <p className="text-light-white no-margin">Реструктурированный</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box pro-manage">
                                <div className="service-item animate-img mb-xl-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service4.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Апартаменты</h5>
                                            <p className="text-light-white no-margin">Управление проектом</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box h-main">
                                <div className="service-item animate-img mb-md-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service5.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Школы</h5>
                                            <p className="text-light-white no-margin">Обслуживание дома</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box genrl-cons">
                                <div className="service-item animate-img mb-md-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service6.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Правительственный</h5>
                                            <p className="text-light-white no-margin">Общее строительство</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box restructured">
                                <div className="service-item animate-img mb-sm-20">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service7.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Стадионы</h5>
                                            <p className="text-light-white no-margin">Реструктурированный</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 filter-box pro-manage">
                                <div className="service-item animate-img">
                                    <a href="service-detail.html" tabIndex="0">
                                        <img src="../assets/images/services/service8.jpg" className="image-fit" alt="img"/>
                                        <div className="text-wrapper">
                                            <h5 className="text-custom-blue no-margin fw-600 fs-20">Больницы</h5>
                                            <p className="text-light-white no-margin">Управление проектом</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartService