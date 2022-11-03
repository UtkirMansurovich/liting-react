import React, {useEffect, useState, useContext} from 'react';
import {Link} from "react-router-dom";
import {BASE_URL, BASE_URL_PHOTO} from '../utills/constant';
import axios from "axios";
import {useTranslation} from "react-i18next";
import {AppContext} from "../context";
import ReactPaginate from 'react-paginate';
import lazyImage from '../images/training.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const BlogPagesCom = (props) => {

    const [total, setTotal] = useState('');
    const [blogs,setBlogs]=useState([]);
    const { t } = useTranslation();
    const {getCookie} = useContext(AppContext);

    let limit = 6;

    const getBlogs = async (page) => {
        await axios.get(BASE_URL+"/api/blog/all/"+props.catId+`?page=${page ? page : 0}&pageSize=${limit}`)
            .then(r=>{
                // console.log(r.data.totalElements);
                setTotal(Math.ceil(r.data.totalElements/limit));
                setBlogs(r.data.object?r.data.object:null);
                // console.log(total);
            })
    }
    useEffect(async () => {
        await getBlogs();
        
    }, [props.catId]);

    const handlerPageClick = async (data) => {
        let page = data.selected ? data.selected : 0;
        getBlogs(page);
        window.scrollTo({top: 100});
        localStorage.setItem('activ', data.selected);
    }

    console.log(localStorage.getItem('activ'))

    return (
      <>
          <div className="bg-light-white pb-5" id="up">
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
              <div className="container section-padding" >
                  <div className="row">
                      {blogs && blogs.map((texts, index) =>
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="card blogsCard">
                                <div className='blogsImagePar'>
                                    <LazyLoadImage 
                                        src={BASE_URL_PHOTO + texts.mainImage.hashId} 
                                        placeholderSrc={lazyImage} 
                                        className="card-img-top blogsImage" 
                                        alt="imagePhoto"
                                        effect='blur'
                                        width="100%"/>
                                </div>
                                <div className="post-date">
                                    <p className="post-data-a">{texts.publishDate.slice(0,10)}</p>
                                </div>
                                <div className="blogCats">
                                    <p className="cats-office m-0">
                                        {getCookie.i18next === "en" ? blogs[0].category.name_en :
                                          getCookie.i18next === "oz" ? blogs[0].category.name_oz :
                                            getCookie.i18next === "uz" ? blogs[0].category.name_uz : blogs[0].category.name_ru}
                                    </p>
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
                                <div className="post-link d-flex justify-content-between w-100" style={{padding:'1.25rem'}}>
                                    <Link to={`/blogs/${props.catId}/${texts.id}`}
                                          className="link-btn text-custom-blue fw-600 fs-14"
                                    >{t("BlogPageCom.readMore")}</Link>
                                    <p className="text-light-white">
                                        <i className="fas fa-eye"></i>
                                        <span className="pl-1">{texts.view_count}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                      )}
                  </div>
              </div>

              <ReactPaginate
                previousLabel={t("Pagination.previous")}
                nextLabel={t("Pagination.next")}
                breakLabel={'...'}
                pageCount={total}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlerPageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
             />

          </div>
      </>
    );
}
export default BlogPagesCom