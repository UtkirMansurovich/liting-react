import React from "react";

const Laboratory = () => {
    return (
        <section className="section-padding section-padding bg-light-white our-history bg-light-white our_articles">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-theme fw-700">Испытательная база AO "O'ZLITINEFGAZ"</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-light-white">Это просто текст-пустышка полиграфической и наборной индустрии. Был стандартным фиктивным текстом в отрасли.</p>
                        </div>
                    </div>
                               <div key={index} className="sliderBlockContainer">
                                   <div className="sliderBlockContainerChild">
                                       <div className="slidesOurBlockImgBox">
                                           <img src={BASE_URL_PHOTO + slides.mainImage.hashId} className="slidesOurBlockImg" />
                                       </div>
                                       <div className="post-date">
                                           <p className="post-data-a">{slides.createdAt.slice(0,10)}</p>
                                       </div>
                                       <div>
                                           <div>
                                               <div className="cats">
                                                   <Link to={/blogs/+slides.category.id} className="cats-office">{
                                                       getCookie.i18next === "en" ? slides.category.name_en.slice(0,20) :
                                                           getCookie.i18next === "uz" ? slides.category.name_uz.slice(0, 20) :
                                                               getCookie.i18next === "oz" ? slides.category.name_oz.slice(0, 20) : slides.category.name_ru.slice(0, 20)
                                                   }...</Link>
                                                   {/*<a href="#" className="cats-rent">{slides.rent}</a>*/}
                                               </div>
                                           </div>
                                           <div className="post-title-parent">
                                               <h2 className="post-title">
                                                   <Link to={/blogs/+slides.category.id+'/'+slides.id} href="#" className="text-theme">{
                                                        getCookie.i18next === "en" ? slides.title_en :
                                                            getCookie.i18next === "uz" ? slides.title_uz :
                                                                getCookie.i18next === "oz" ? slides.title_oz : slides.title_ru
                                                   }</Link>
                                               </h2>
                                               <p className="text-light-white no-margin">{
                                                    getCookie.i18next === "en" ? slides.anons_en :
                                                        getCookie.i18next === "uz" ? slides.anons_uz :
                                                            getCookie.i18next === "oz" ? slides.anons_oz : slides.anons_ru
                                               }</p>
                                           </div>
                                           <div className="blog-footer-meta bg-custom-white padding-20">
                                               {/*<div className="post-author">*/}
                                                   {/*<div className="author-img">*/}
                                                   {/*    <a href="blog-single.html">*/}
                                                   {/*        <img src="../assets/images/homepage-1/admin-1-40x40.jpg" className="rounded-circle" alt="#"/>*/}
                                                   {/*    </a>*/}
                                                   {/*</div>*/}
                                                   {/*<span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>*/}
                                               {/*</div>*/}
                                               <div className="post-link d-flex justify-content-between w-100">
                                                   <Link to={/blogs/+slides.category.id+'/'+slides.id} className="link-btn text-custom-blue fw-600 fs-14">{t("StartBlock.readMore")}</Link>
                                                   <p className="text-light-white">
                                                       <i className="fas fa-eye"></i>
                                                       <span className="pl-1">{slides.view_count}</span>
                                                   </p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                            )}
                    </Slider>
                </div>
            </section>
    )
}

export default Laboratory;