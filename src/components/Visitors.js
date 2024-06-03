import React, {useContext} from 'react'
import { AppContext } from '../context'
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import {useTranslation} from "react-i18next";

function Visitors() {
    const {selectFontBig, selectFontSmall} = useContext(AppContext);
    const [ counterOn, setCounterOn ] = useState(false);
    const { t } = useTranslation();
        
  return (
    <div>
    <section style={{paddingTop:'35px'}}>
        <div className="container">
            <div className="section-header">
                <div className="section-heading">
                    {/* <h5 className="text-custom-blue wow fadeUp" data-wow-duration="1s" data-wow-delay="0.3s">{t("StartOurCategory.ourCategory")}</h5> */}
                    <h3 className="text-theme fw-700">
                        {/* {t("StartOurCategory.ourCategory")} */}
                        {t("Visitors.visit")}
                    </h3>
                </div>
                <div className="section-description">
                    {/* <p className={selectFontBig ? "fs-26 text-light-white" : selectFontSmall ? 'text-light-white' : 'fs-20 text-light-white'}>{t("StartOurCategory.text")}</p> */}
                </div>
            </div>
            <div className="col-12 p-0">
                <div className="categories-tabs">
                    <ul style={{boxShadow: "none"}} className="custom nav nav-tabs">
                        <li className="nav-item">
                            <p style={{background: 'transparent'}} className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                <span style={{display:'flex', justifyContent:'center', alignItems:'self-end'}}>
                                    <img src="../assets/images/svg/year.svg" className="image-fit" alt="svg"/>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        {counterOn && <CountUp duration={2.75} end={11764} style={{margin:'0 0 0 5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}
                                    </ScrollTrigger>
                                </span>
                                {t("Visitors.year")}
                            </p>
                        </li>
                        <li className="nav-item">
                            <p style={{background: 'transparent'}} className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                <span style={{display:'flex', justifyContent:'center', alignItems:'self-end'}}>
                                    <img src="../assets/images/svg/30-days.svg" className="image-fit" alt="svg"/>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        {counterOn && <CountUp duration={2.75} end={2655} style={{margin:'0 0 0 5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}
                                    </ScrollTrigger>
                                </span>
                                {t("Visitors.month")}
                            </p>
                        </li>
                        <li className="nav-item">
                            <p style={{background: 'transparent'}} className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                <span style={{display:'flex', justifyContent:'center', alignItems:'self-end'}}>
                                    <img src="../assets/images/svg/calendar.svg" className="image-fit" alt="svg"/>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        {counterOn && <CountUp duration={2.75} end={89} style={{margin:'0 0 0 5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}
                                    </ScrollTrigger>
                                </span>
                                {t("Visitors.day")}
                            </p>
                        </li>
                        <li className="nav-item">
                            <p style={{background: 'transparent'}} className={selectFontBig ? "fs-26 nav-link text-custom-black" : selectFontSmall ? "nav-link text-custom-black" : 'fs-20 nav-link text-custom-black'}>
                                <span style={{display:'flex', justifyContent:'center', alignItems:'self-end'}}>
                                    <img src="../assets/images/svg/schedule.svg" className="image-fit" alt="svg"/>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} style={{display:"flex", alignItems:'end', position:'relative'}}>
                                        {counterOn && <CountUp duration={2.75} end={15930} style={{margin:'0 0 0 5px', fontSize:"28px", color:'#7c8a97', lineHeight:'24px'}}/>}
                                    </ScrollTrigger>
                                </span>
                                {t("Visitors.total")}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default Visitors