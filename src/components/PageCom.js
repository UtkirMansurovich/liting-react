import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BASE_URL_PHOTO, BASE_URL } from "../utills/constant";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context";
import lazyImage from "../images/training.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import BlogPagesCom from './BlogPagesCom';

const PageCom = (props) => {
  const [blog, setBlog] = useState(null);
  const { t } = useTranslation();
  const { getCookie, selectFontBig, selectFontSmall } = useContext(AppContext);
  // console.log(page[0]);
  const getBlog = () => {
    if (props.blogId) {
      axios
        .get(BASE_URL + "/api/blog/one/" + props.blogId)
        .then((r) => {
          // console.log(r)
          setBlog(r.data.object ? r.data.object : null);
        })
        .catch((e) => {
          setBlog(null);
        });
    } else {
      axios
        .get(BASE_URL + "/api/blog/all/" + props.catId + "?isText=true")
        .then((r) => {
          // console.log(r)
          setBlog(r.data.object ? r.data.object[0] : null);
        })
        .catch((e) => {
          setBlog(null);
        });
    }
  };

  useEffect(async () => {
    getBlog();
  }, [props.catId, props.blogId]);

  if (blog) {
    return (
      <div style={{ display: "block!important" }}>
        <div className="subheader section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="breadcrumb-wrapper">
                  <div className="page-title">
                    <h1 className="text-theme fw-500 text-capitalize">
                      {blog && getCookie.i18next === "en"
                        ? blog.category.name_en
                        : blog && getCookie.i18next === "oz"
                        ? blog.category.name_oz
                        : blog && getCookie.i18next === "uz"
                        ? blog.category.name_uz
                        : blog && getCookie.i18next === "ru"
                        ? blog.category.name_ru
                        : ""}
                    </h1>
                  </div>
                  <ul className="custom breadcrumb">
                    <li
                      className={
                        selectFontBig ? "fs-26" : selectFontSmall ? "" : "fs-20"
                      }
                    >
                      <Link to="/">{t("BlogPageCom.home")}</Link>
                    </li>
                    <li
                      className={
                        selectFontBig
                          ? "fs-26 active"
                          : selectFontSmall
                          ? "active"
                          : "fs-20 active"
                      }
                    >
                      {blog && getCookie.i18next === "en"
                        ? blog.category.name_en
                        : blog && getCookie.i18next === "oz"
                        ? blog.category.name_oz
                        : blog && getCookie.i18next === "uz"
                        ? blog.category.name_uz
                        : blog && getCookie.i18next === "ru"
                        ? blog.category.name_ru
                        : ""}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-padding bg-light-white our-history">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    {blog ? (
                      <div className="blogsParent">
                        <div className="post-date">
                          <p className="post-data-blogs-a" id="date">
                            {blog.publishDate.slice(0, 10)}
                            <i
                              style={{ marginLeft: "15px" }}
                              className="fas fa-eye"
                            ></i>
                            <span className="pl-1">{blog.view_count}</span>
                          </p>
                        </div>
                        <div className="pageImgPar">
                          <LazyLoadImage
                            src={BASE_URL_PHOTO + blog.mainImage.hashId}
                            alt="imagePhoto"
                            className="pageImg"
                            placeholderSrc={lazyImage}
                            effect="blur"
                            width="100%"
                          />
                        </div>
                        <h3 className="listing-detail-heading no-margin ">
                          {getCookie.i18next === "en"
                            ? blog.title_en
                            : getCookie.i18next === "oz"
                            ? blog.title_oz
                            : getCookie.i18next === "uz"
                            ? blog.title_uz
                            : blog.title_ru}
                        </h3>
                        <div
                          id="alkash"
                          dangerouslySetInnerHTML={{
                            __html:
                              getCookie.i18next === "en"
                                ? blog.text_en
                                : getCookie.i18next === "oz"
                                ? blog.text_oz
                                : getCookie.i18next === "uz"
                                ? blog.text_uz
                                : blog.text_ru,
                          }}
                          className={
                            selectFontBig
                              ? "fs-26 textDecorate flex-column mb-xl-20 p-4"
                              : selectFontSmall
                              ? "textDecorate flex-column mb-xl-20 p-4"
                              : "fs-20 textDecorate flex-column mb-xl-20 p-4"
                          }
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div className="preloader">
        <img src="../assets/images/pre-loader-1.svg" alt="img" />
      </div>
    );
  }
};

export default PageCom;
