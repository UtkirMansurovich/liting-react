import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { AppContext } from '../context';
import { BASE_URL_PHOTO } from '../utills/constant';

const BlogPagesCom = () => {
    const {page, pageTitle} = useContext(AppContext);
    console.log(page)
    return(
        <div className="bg-light-white">
            <div className="subheader section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-wrapper">
                                <div className="page-title">
                                    <h1 className="text-theme fw-500">{pageTitle}</h1>
                                </div>
                                <ul className="custom breadcrumb">
                                    <li>
                                        <Link to="/">Главная страница</Link>
                                    </li>
                                    <li className="active">
                                        {pageTitle}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                        <img src="" class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default BlogPagesCom