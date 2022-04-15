import React from 'react';
import {Link} from "react-router-dom";

const ObserveAdviceCom = () => {
    return(
        <div>
            <div>
                <div className="subheader section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="breadcrumb-wrapper">
                                    <div className="page-title">
                                        <h1 className="text-theme fw-500">Наблюдательный Совет</h1>
                                    </div>
                                    <ul className="custom breadcrumb">
                                        <li>
                                            <Link to="/">Главная страница</Link>
                                        </li>
                                        <li className="active">
                                            Наблюдательный Совет
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-padding bg-light-white" >
                    <div className="container">
                        <div className="row " >
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/*<div className="listing-top-heading mb-xl-20 p-4 d-flex flex-column justify-content-start">*/}
                                        {/*    <div className="observeTitle">*/}
                                        {/*        <h5 className="text-custom-blue"><span className="mr-4">№</span> Ф.И.О члена наблюдательного совета</h5>*/}
                                        {/*        <h5 className="text-custom-blue">Сведения о членах наблюдательного совета</h5>*/}
                                        {/*    </div>*/}
                                        {/*    <div>*/}

                                        {/*    </div>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>Акционерное общество «O‘ZLITINEFTGAZ» - отраслевой головной научно-исследовательский и проектный институт Узбекистана, обеспечивающий комплексное научно-проектное сопровождение разработки и обустройства месторождений углеводородного сырья и строительство объектов нефтегазовой отрасли Узбекистана.</p>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>Сегодня АО «O‘ZLITINEFTGAZ» - крупный центр, объединяющий высокий научно-технический потенциал и богатый опыт ученых и специалистов по решению научно-проектных задач нефтегазовой отрасли республики. В АО «O‘ZLITINEFTGAZ» трудятся 447 инженерно-технических работников, из них 4 доктора наук, 8 кандидатов наук и 15 молодых соискателей, претендующих на ученую степень.  За период 1991-2020 обществом получены 29 патентов, а также 22 свидетельств за разработку программ для ЭВМ.</p>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>Специалисты Общества ежегодно публикуют результаты научных и технологических исследований в престижных журналах до 70 статей, а также участвуют с докладами на международных и республиканских конференциях.  </p>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>В работе используются современные средства математического моделирования с использованием программных продуктов компаний «Techlog», «Petrel», «Eclipse», а также «tNavigator», «PipeSim», «WellPlan», «Эколог» вер.4.0, «AutoDesk AutoCad 2020», «Plant 3D», «AutoDesk Revit», «NanoCad», «IndorCAD», «Lira-САПР», «Fugaz-h», «Старт-Проф», «Гидросистема», «Model Studio «Кабельное хозяйство»», «Model Studio «ЭХЗ»», «Model Studio «Электрические схемы»», «Изоляция», «ПОТОК», «Предклапан», «ABC-UZ».</p>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>Благодаря высокой квалификации и профессионализму специалистов АО «O‘ZLITINEFTGAZ» реализованы крупные нефтегазовые проекты по обустройству месторождений, строительству производственных объектов Бухарский НПЗ, Шуртанский ГХК, Устюртский и Мубарекский газохимические комплексы, производство синтетического жидкого топлива, построены магистральные газопроводы Бухара-Урал; Шуртан-Шерабад, Газли-Нукус, «Узбекистан-Китай» и др.    </p>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>За более чем 55 летний период своей деятельности АО «O‘ZLITINEFTGAZ» достойно выполняет возложенные на него задачи.</p>*/}
                                        {/*    <h5 className="mb-1 text-dark-grey">МИССИЯ</h5>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>Проектные работы по полному циклу с разработкой и реализацией высокотехнологичной, качественной проектной документации. Создание и совершенствование научно-технологического цикла с выполнением инжиниринговых исследований, научно-технологических решений и обеспечение выпуска продукции, востребованной на внутренних и внешних рынках.</p>*/}
                                        {/*    <h5 className="mb-1 text-dark-grey">НАША СТРАТЕГИЧЕСКАЯ ЦЕЛЬ</h5>*/}
                                        {/*    <p className="text-light-white text-justify" style={{textIndent: '5ch'}}>Становление лидером среди научных и проектных организаций, достижение конкурентоспособности и авторитета на отечественном и зарубежных рынках путем создания уникальной рыночной позиции, основанной на повышении качества выполняемых работ и максимальном использовании своего научно-технического потенциала.</p>*/}
                                        {/*    <h5 className="mb-1 text-dark-grey">ЗАДАЧИ</h5>*/}
                                        {/*    <ul className="text-light-white text-justify fs-14">*/}
                                        {/*        <li>Достижение максимальной эффективности существующих активов;</li>*/}
                                        {/*        <li>Увеличение рыночной стоимости компании и обеспечение высокого процента возврата на инвестиции;</li>*/}
                                        {/*        <li>Создание системы, обеспечивающей экономически заинтересованное проведение научно-исследовательских, проектно-изыскательских работ;</li>*/}
                                        {/*        <li>Постоянное совершенствование работы с кадрами, включая содействие росту научного и интеллектуального потенциала.</li>*/}
                                        {/*        <li>Привлечение и удержание высокопрофессиональных специалистов;</li>*/}
                                        {/*        <li>Взаимоотношения с партнерами на принципах доверия и долгосрочного сотрудничества;</li>*/}
                                        {/*        <li>Соблюдение кодекса корпоративного управления;</li>*/}
                                        {/*        <li>Ответственность и инициатива в области охраны окружающей среды, охраны труда и промышленной безопасности.</li>*/}
                                        {/*    </ul>*/}
                                        {/*</div>*/}
                                        <table className="tableObserve">
                                            <thead>
                                                <tr className="theadObserve">
                                                    <th className="theadObserveChild">№</th>
                                                    <th className="theadObserveChild">Ф.И.О члена наблюдательного совета</th>
                                                    <th className="theadObserveChild">Сведения о членах наблюдательного совета</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">1</td>
                                                    <td className="tbodyObserveChild">Темиров Мухтор Мустафаевич</td>
                                                    <td className="tbodyObserveChild">Заместитель председателя правления АО «Узбекнефтегаз»</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">2</td>
                                                    <td className="tbodyObserveChild">Абдурахимов Амин Найимович</td>
                                                    <td className="tbodyObserveChild">Начальник департамента АО «Узбекнефтегаз»</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">3</td>
                                                    <td className="tbodyObserveChild">Авезов Анвар Хабибуллаевич</td>
                                                    <td className="tbodyObserveChild">Начальник департамента АО «Узбекнефтегаз»</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">4</td>
                                                    <td className="tbodyObserveChild">Обидов Икбол Аскаралиевич</td>
                                                    <td className="tbodyObserveChild">Начальник департамента АО «Узбекнефтегаз»</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">5</td>
                                                    <td className="tbodyObserveChild">Омаров Муратжан Юлчибаевич</td>
                                                    <td className="tbodyObserveChild">Начальник департамента АО «Узбекнефтегаз»</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">6</td>
                                                    <td className="tbodyObserveChild">Миркабилов Искандар Анварович</td>
                                                    <td className="tbodyObserveChild">Начальник департамента АО «Узбекнефтегаз»</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">7</td>
                                                    <td className="tbodyObserveChild">Заречнева Клавдия Викторовна</td>
                                                    <td className="tbodyObserveChild">Заместитель директора по подрядной деятельности и ценообразованию «Газпром ЭП Интернэшнл Б.В.».</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">8</td>
                                                    <td className="tbodyObserveChild">Смирнова Елена Георгиевна</td>
                                                    <td className="tbodyObserveChild">Директор Представительства «Газпром ЭП Интернэшнл» в Республике Узбекистан</td>
                                                </tr>
                                                <tr className="tbodyObserve">
                                                    <td className="tbodyObserveChild">9</td>
                                                    <td className="tbodyObserveChild">Закиров Алимджан Абдурахимович</td>
                                                    <td className="tbodyObserveChild">Представитель Компании «Steinert Industries GmbH &Co.KG»</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ObserveAdviceCom