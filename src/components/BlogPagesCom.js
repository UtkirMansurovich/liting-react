import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { AppContext } from '../context';
import {BASE_URL, BASE_URL_PHOTO} from '../utills/constant';
import axios from "axios";

const BlogPagesCom = (props) => {
    const {page, pageTitle, findId} = useContext(AppContext);
    const [blogs,setBlogs]=useState([])
    console.log(page);
    function sendId(id){
        localStorage.setItem('id', id);
        findId(id);
    }

    const getBlogs = () => {
        axios.get(BASE_URL+"/api/blog/all/"+props.catId)
            .then(r=>{
                console.log("AAAAAAAA")
                console.log(r)
                setBlogs(r.data.object?r.data.object:null)
            })
    }
    useEffect(async () => {
        await getBlogs()
    }, [props.catId]);
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
            <div className="container section-padding">
                <div className="row">
                    {blogs && blogs.map((texts, index) =>
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="card blogsCard">
                                <div className='blogsImagePar'>
                                    <img src={BASE_URL_PHOTO + texts.mainImage.hashId} className="card-img-top blogsImage" alt="imagePhoto"/>
                                </div>
                                <div className="post-date">
                                    <a href="blog-single.html" className="post-data-a">09 Dec 2022</a>
                                </div>
                                <div className="blogCats">
                                    <a href="#" className="cats-office">Office</a>
                                    <a href="#" className="cats-rent">News</a>
                                </div>
                                <div className="card-body blogsBody">
                                    <h5 className="card-title">{texts.title_oz}</h5>
                                    <p className="card-text">{texts.anons_oz}</p>
                                </div>
                                <div className="post-link" style={{padding:'1.25rem'}}>
                                    <Link to={`/blogs/${props.catId}/${texts.id}`}
                                          className="link-btn text-custom-blue fw-600 fs-14"
                                          // onClick={() => sendId(texts.id)}
                                    >Читать далее</Link>                   
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