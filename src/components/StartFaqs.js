import React from "react";

const StartFaqs = () => {
    return(
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faqs-box mb-md-80">
                            <div className="section-header">
                                <div className="section-heading">
                                    <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">Часто задаваемые вопросы</h5>
                                    <h3 className="text-theme fw-700">Задайте несколько вопросов/ответов</h3>
                                </div>
                                <div className="section-description">
                                    <p className="text-light-white">Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.</p>
                                </div>
                            </div>
                            <div id="accordion" className="custom-accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <button className="collapsebtn" data-toggle="collapse" data-target="#collapseOne">
                                            Индивидуальный сервис.
                                        </button>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="text-theme no-margin">
                                                Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <button className="collapsebtn collapsed" data-toggle="collapse" data-target="#collapseTwo">
                                            Круглосуточная поддержка.
                                        </button>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="text-theme no-margin">
                                                Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <button className="collapsebtn collapsed" data-toggle="collapse" data-target="#collapseThree">
                                            Финансирование стало проще.
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="text-theme no-margin">
                                                Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <button className="collapsebtn collapsed" data-toggle="collapse" data-target="#collapseFour">
                                            Нам доверяют тысячи.
                                        </button>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="text-theme no-margin">
                                                Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <button className="collapsebtn collapsed" data-toggle="collapse" data-target="#collapseFive">
                                            Лучшая цена когда-либо
                                        </button>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="text-theme no-margin">
                                                Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingsix">
                                        <button className="collapsebtn collapsed" data-toggle="collapse" data-target="#collapsesix">
                                            Лучшая цена когда-либо
                                        </button>
                                    </div>
                                    <div id="collapsesix" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="text-theme no-margin">
                                                Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="schdule-box">
                            <div className="left-side">
                                <h6 className="text-custom-white">Запишитесь на бесплатную консультацию 24/7</h6>
                                <h4 className="text-custom-white no-margin">(+347) 123 456 7890</h4>
                            </div>
                            <div className="right-side">
                                <a href="#" className="btn-first btn-submit text-custom-white">Записаться на прием</a>
                            </div>
                        </div>
                        <div className="instagram-sec">
                            <h3><i className="fab fa-instagram"></i> Подписывайтесь на нас</h3>
                            <div className="row clearfix">
                                <div className="col-md-4 col-6">
                                    <div className="insta-img animate-img">
                                        <a href="#">
                                            <img src="../assets/images/insta/insta3.jpg" className="image-fit" alt="img"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="insta-img animate-img">
                                        <a href="#">
                                            <img src="../assets/images/insta/insta6.jpg" className="image-fit" alt="img"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="insta-img animate-img">
                                        <a href="#">
                                            <img src="../assets/images/insta/insta4.jpg" className="image-fit" alt="img"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="insta-img animate-img">
                                        <a href="#">
                                            <img src="../assets/images/insta/insta5.jpg" className="image-fit" alt="img"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="insta-img animate-img">
                                        <a href="#">
                                            <img src="../assets/images/insta/insta2.jpg" className="image-fit" alt="img"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="insta-img animate-img">
                                        <a href="#">
                                            <img src="../assets/images/insta/insta1.jpg" className="image-fit" alt="img"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartFaqs