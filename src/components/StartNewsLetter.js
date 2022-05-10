import React from "react";

const StartNewsLetter = () => {
    return(
        <section className="section-padding bg-call-to-action">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        <h5 className="text-custom-blue wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h5>
                        <h3 className="text-custom-white fw-700">Получите бесплатную поддержку</h3>
                    </div>
                    <div className="section-description">
                        <p className="text-custom-white">Это просто текст-пустышка полиграфической и наборной индустрии. Был стандартным фиктивным текстом в отрасли.</p>
                    </div>
                </div>
                <div className="row consult-form">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <input type="text" name="#" className="form-control form-control-custom" placeholder="Твое имя"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <input type="email" name="#" className="form-control form-control-custom" placeholder="Ваш адрес электронной почты"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <input type="text" name="#" className="form-control form-control-custom" placeholder="Твой номер телефона"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <select className="form-control form-control-custom custom-select">
                                <option>Выберите свой город</option>
                                <option>NewYork</option>
                                <option>Milan</option>
                                <option>Florida</option>
                                <option>Miami</option>
                                <option>Havana</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <select className="form-control form-control-custom custom-select">
                                <option>Здание</option>
                                <option>Hotel</option>
                                <option>Flyover</option>
                                <option>Society</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                            <button type="submit" className="btn-first btn-submit full-width btn-height">ОТПРАВИТ</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartNewsLetter