import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import {AppContext} from "../context";
import { BASE_URL_PHOTO, BASE_URL } from '../utills/constant';
import axios from 'axios';

const PageCom = (props) => {
    const {page, pageTitle} = useContext(AppContext);
    const [blog,setBlog] = useState(null)
    // console.log(page[0]);
    const getBlog = () => {
        if (props.blogId){
            axios.get(BASE_URL+"/api/blog/one/"+props.blogId)
                .then(r=>{
                    console.log(r)
                    setBlog(r.data.object?r.data.object:null)
                })
                .catch(e=>{
                    setBlog(null)
                })
        }else {
            axios.get(BASE_URL+"/api/blog/all/"+props.catId)
                .then(r=>{
                    console.log(r)
                    setBlog(r.data.object?r.data.object[0]:null)
                })
                .catch(e=>{
                    setBlog(null)
                })
        }

    }
    useEffect(async () => {
        await getBlog()
    }, [props.catId,props.blogId]);
    return(
        <div>
            <div className="subheader section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-wrapper">
                                <div className="page-title">
                                    <h1 className="text-theme fw-500 text-capitalize">{pageTitle}</h1>
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
            <section className="section-padding bg-light-white" >
                <div className="container">
                    <div className="row " >
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    {blog?
                                        <div className="blogsParent">
                                            <div className="post-date">
                                                <a href="blog-single.html" className='post-data-blogs-a' id="date">2022-04-20T06:54:49.426+00:00</a>
                                            </div>
                                            <div className='pageImgPar'>
                                                <img src={BASE_URL_PHOTO + blog.mainImage.hashId} alt="imagePhoto" className="pageImg"/>
                                            </div>
                                            <h3 className="listing-detail-heading no-margin ">{blog.title_oz}</h3>
                                            <div dangerouslySetInnerHTML={{__html: blog.text_oz}} className="textDecorate flex-column mb-xl-20 p-4"/>
                                        </div>:""
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageCom