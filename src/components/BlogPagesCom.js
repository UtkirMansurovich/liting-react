import React from 'react';
import {Link} from "react-router-dom";

const BlogPagesCom = () => {
    return(
        <div className="bg-light-white">
            <div className="subheader section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-wrapper">
                                <div className="page-title">
                                    <h1 className="text-theme fw-500">Руководство</h1>
                                </div>
                                <ul className="custom breadcrumb">
                                    <li>
                                        <Link to="/">Главная страница</Link>
                                    </li>
                                    <li className="active">
                                        Руководство
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="mt-5 p-4 bg-custom-white headStaffCard">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <img src='../assets/images/boshliq.png'/>
                            </div>
                            <div className="col-lg-4 contCardText mb-2">
                                <span className="text-custom-blue nameOfHead">Председатель Правления АО "O'ZLITINEFTGAZ"</span>
                                <div className="cardLine">
                                    <div className="cardDetail">
                                        <p className="cardParagh">Фамилия:</p>
                                        <span className="cardSpan">Назаров</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Имя:</p>
                                        <span className="cardSpan">Улугбек</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Отчество:</p>
                                        <span className="cardSpan">Султанович</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 280-67-00</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 256-74-18</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-4 bg-custom-white headStaffCard">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <img src='../assets/images/ismoilov.jpg'/>
                            </div>
                            <div className="col-lg-4 contCardText mb-2">
                                <span className="text-custom-blue nameOfHead">Первый заместитель Председателя Правления АО "O'ZLITINEFTGAZ" - руководитель департамента проектирования объектов</span>
                                <div className="cardLine">
                                    <div className="cardDetail">
                                        <p className="cardParagh">Фамилия:</p>
                                        <span className="cardSpan">Исмаилов</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Имя:</p>
                                        <span className="cardSpan">Лазиз</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Отчество:</p>
                                        <span className="cardSpan">Азизович</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 280-67-00</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 280-67-01</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-4 bg-custom-white headStaffCard">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <img src='../assets/images/sunnatov.jpg'/>
                            </div>
                            <div className="col-lg-4 contCardText mb-2">
                                <span className="text-custom-blue nameOfHead">Заместитель Председателя Правления  АО "O'ZLITINEFTGAZ" - руководитель департамента геологии и разработки месторождений</span>
                                <div className="cardLine">
                                    <div className="cardDetail">
                                        <p className="cardParagh">Фамилия:</p>
                                        <span className="cardSpan">Суннатов</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Имя:</p>
                                        <span className="cardSpan">Мухиддин</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Отчество:</p>
                                        <span className="cardSpan">Салохиддинович</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 280-67-35</span>
                                    </div>
                                    {/*<div className="cardDetail">*/}
                                    {/*    <p className="cardParagh">Тел:</p>*/}
                                    {/*    <span className="cardSpan">(+99871) 280-67-01</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-4 bg-custom-white headStaffCard">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <img src='../assets/images/foto4.jpg'/>
                            </div>
                            <div className="col-lg-4 contCardText mb-2">
                                <span className="text-custom-blue nameOfHead">Заместитель Председателя Правления АО "O'ZLITINEFTGAZ" - руководитель департамента подготовки и углубленной переработки нефти и газа</span>
                                <div className="cardLine">
                                    <div className="cardDetail">
                                        <p className="cardParagh">Фамилия:</p>
                                        <span className="cardSpan">Сайдахмедов</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Имя:</p>
                                        <span className="cardSpan">Элёрбек</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Отчество:</p>
                                        <span className="cardSpan">Эгамбердиевич</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 280-67-02</span>
                                    </div>
                                    {/*<div className="cardDetail">*/}
                                    {/*    <p className="cardParagh">Тел:</p>*/}
                                    {/*    <span className="cardSpan">(+99871) 280-67-01</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-4 bg-custom-white headStaffCard">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <img src='../assets/images/nashvandov.jpg'/>
                            </div>
                            <div className="col-lg-4 contCardText mb-2">
                                <span className="text-custom-blue nameOfHead">Первый заместитель Председателя Правления АО "O'ZLITINEFTGAZ" - руководитель департамента проектирования объектов</span>
                                <div className="cardLine">
                                    <div className="cardDetail">
                                        <p className="cardParagh">Фамилия:</p>
                                        <span className="cardSpan">Нашвандов</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Имя:</p>
                                        <span className="cardSpan">Шохрух</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Отчество:</p>
                                        <span className="cardSpan">Муротович</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 280-67-03</span>
                                    </div>
                                    {/*<div className="cardDetail">*/}
                                    {/*    <p className="cardParagh">Тел:</p>*/}
                                    {/*    <span className="cardSpan">(+99871) 280-67-01</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-4 bg-custom-white headStaffCard">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <img src='../assets/images/dddd.jpg'/>
                            </div>
                            <div className="col-lg-4 contCardText mb-2">
                                <span className="text-custom-blue nameOfHead">Заместитель Председателя Правления по общим вопросам АО "O'ZLITINEFTGAZ"</span>
                                <div className="cardLine">
                                    <div className="cardDetail">
                                        <p className="cardParagh">Фамилия:</p>
                                        <span className="cardSpan">Камалитдинов</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Имя:</p>
                                        <span className="cardSpan">Хамидулла</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Отчество:</p>
                                        <span className="cardSpan"> Хайруллаевич</span>
                                    </div>
                                    <div className="cardDetail">
                                        <p className="cardParagh">Тел:</p>
                                        <span className="cardSpan">(+99871) 280-67-04</span>
                                    </div>
                                    {/*<div className="cardDetail">*/}
                                    {/*    <p className="cardParagh">Тел:</p>*/}
                                    {/*    <span className="cardSpan">(+99871) 280-67-01</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogPagesCom