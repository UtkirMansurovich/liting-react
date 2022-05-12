import React, {useEffect, useState, useContext} from 'react';
import {Link} from "react-router-dom";
import {BASE_URL, BASE_URL_PHOTO} from '../utills/constant';
import axios from "axios";
import {useTranslation} from "react-i18next";
import {AppContext} from "../context";

const BlogPagesCom = (props) => {
    const [blogs,setBlogs]=useState([]);
    const { t } = useTranslation();
    const {getCookie} = useContext(AppContext);

    const getBlogs = () => {
        axios.get(BASE_URL+"/api/blog/all/"+props.catId)
            .then(r=>{
                // console.log("AAAAAAAA")
                console.log(r.data.object)
                setBlogs(r.data.object?r.data.object:null)
            })
    }
    useEffect(async () => {
        await getBlogs();
    }, [props.catId]);
    return(
        <div className="bg-light-white">
            <div className="subheader section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-wrapper">
                                <div className="page-title">
                                    <h1 className="text-theme fw-500">
                                        {blogs[0] && getCookie.i18next === "en" ? blogs[0].category.name_en :
                                            blogs[0] && getCookie.i18next === "oz" ? blogs[0].category.name_oz :
                                                blogs[0] && getCookie.i18next === "uz" ? blogs[0].category.name_uz :
                                                    blogs[0] && getCookie.i18next === "ru" ? blogs[0].category.name_ru : ""}
                                    </h1>
                                </div>
                                <ul className="custom breadcrumb">
                                    <li>
                                        <Link to="/">{t("BlogPageCom.home")}</Link>
                                    </li>
                                    <li className="active">
                                        {blogs[0] && getCookie.i18next === "en" ? blogs[0].category.name_en :
                                            blogs[0] && getCookie.i18next === "oz" ? blogs[0].category.name_oz :
                                                blogs[0] && getCookie.i18next === "uz" ? blogs[0].category.name_uz :
                                                    blogs[0] && getCookie.i18next === "ru" ? blogs[0].category.name_ru : ""}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container section-padding">
                <div className="row">
                    {blogs && blogs.map((texts, index) =>
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="card blogsCard">
                                <div className='blogsImagePar'>
                                    <img src={BASE_URL_PHOTO + texts.mainImage.hashId} className="card-img-top blogsImage" alt="imagePhoto"/>
                                </div>
                                <div className="post-date">
                                    <a href="#" className="post-data-a">{texts.createdAt.slice(0,10)}</a>
                                </div>
                                <div className="blogCats">
                                    <a href="#" className="cats-office">
                                        {getCookie.i18next === "en" ? blogs[0].category.name_en :
                                            getCookie.i18next === "oz" ? blogs[0].category.name_oz :
                                                getCookie.i18next === "uz" ? blogs[0].category.name_uz : blogs[0].category.name_ru}
                                    </a>
                                    {/*<a href="#" className="cats-rent">News</a>*/}
                                </div>
                                <div className="card-body blogsBody">
                                    <h5 className="card-title">
                                        {getCookie.i18next === "en" ? texts.title_en :
                                            getCookie.i18next === "oz" ? texts.title_oz :
                                                getCookie.i18next === "uz" ? texts.title_uz : texts.title_ru}
                                    </h5>
                                    <p className="card-text">
                                        {getCookie.i18next === "en" ? texts.anons_en :
                                            getCookie.i18next === "oz" ? texts.anons_oz :
                                                getCookie.i18next === "uz" ? texts.anons_uz :texts.anons_ru}
                                    </p>
                                </div>
                                <div className="post-link" style={{padding:'1.25rem'}}>
                                    <Link to={`/blogs/${props.catId}/${texts.id}`}
                                          className="link-btn text-custom-blue fw-600 fs-14"
                                    >{t("BlogPageCom.readMore")}</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default BlogPagesCom