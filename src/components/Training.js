import React, {useContext} from 'react';
import iconWoman from '../images/icon_woman.png';
import iconDis from '../images/icon_Discipline.png';
import themeBased from '../images/icon_theme.png';
import mentored from '../images/icon_mentor.png';
import projectBased from '../images/icon_project.png';
import jobProf from '../images/icon_job_profile.png';
import {useTranslation} from "react-i18next";
import { AppContext } from '../context';

const Training = () => {
  const { t } = useTranslation();
  const {selectFontBig, selectFontSmall} = useContext(AppContext);

  return (
    <section className="full-training">
      <div className="container pt-5 text-center">
        <h2 className="mt-0 pt-0 wow fadeInUp animated animated"
            data-wow-duration="0.2s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "0.2s",
              animationDelay: "0.3s",
              animationName: "undefined"
            }}>{t("Training.Enhancing")}</h2> 
        <h4 className="wow fadeInUp animated animated"
            data-wow-duration="0.4s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "0.4s",
              animationDelay: "0.3s",
              animationName: "undefined"
            }}>{t("Training.Improving")}</h4>
        <p className={selectFontBig ? "fs-26 wow fadeInUp col-sm-10 mrg-lr-auto animated animated" : selectFontSmall ? "wow fadeInUp col-sm-10 mrg-lr-auto animated animated" : "fs-20 wow fadeInUp col-sm-10 mrg-lr-auto animated animated"}
           data-wow-duration="0.6s"
           data-wow-delay="0.3s"
           style={{
             visibility: "visible",
             animationDuration: "0.6s",
             animationDelay: "0.3s",
             animationName: "undefined",
             margin: "0 auto",
           }}
        >{t("Training.WeBuild")}</p>
        <div className="TrainTeamBlock position-relative mt-5"></div>
      </div>

      <div className="container">
        <div className="contentTrain">
          <div className="box-left">
            <div className="new-hire">
              <a href="#" className="new-hire-a">
                <p className={selectFontBig ? "fs-26 new-hire-p" : selectFontSmall ? "new-hire-p" : "fs-20 new-hire-p"}>
                  {t("Training.NewHire")}
                  <span className={selectFontBig ? "fs-26 new-hire-p-span" : selectFontSmall ? "new-hire-p-span" : "fs-20 new-hire-p-span"}>{t("Training.NewHireSpan")}</span>
                </p>
                <div className="new-hire-a-img">
                  <img src={iconWoman} alt="new hire"/>
                </div>
              </a>
            </div>
            <div className="new-hire">
              <a href="#" className="new-hire-a">
                <p className={selectFontBig ? "fs-26 new-hire-p" : selectFontSmall ? "new-hire-p" : "fs-20 new-hire-p"}>
                  {t("Training.Discipline")}
                  <span className={selectFontBig ? "fs-26 new-hire-p-span" : selectFontSmall ? "new-hire-p-span" : "fs-20 new-hire-p-span"}>{t("Training.DisciplineSpan")}</span>
                </p>
                <div className="new-hire-a-img">
                  <img src={iconDis} alt="new hire"/>
                </div>
              </a>
            </div>
            <div className="new-hire">
              <a href="#" className="new-hire-a">
                <p className={selectFontBig ? "fs-26 new-hire-p" : selectFontSmall ? "new-hire-p" : "fs-20 new-hire-p"}>
                  {t("Training.ThemeBased")}
                  <span className={selectFontBig ? "fs-26 new-hire-p-span" : selectFontSmall ? "new-hire-p-span" : "fs-20 new-hire-p-span"}>{t("Training.ThemeBasedSpan")}</span>
                </p>
                <div className="new-hire-a-img">
                  <img src={themeBased} alt="new hire"/>
                </div>
              </a>
            </div>
          </div>

          <div className="box-middle">
            <a href='https://youtu.be/OHCbiPtMgGg' target="_blank" className={selectFontBig ? "fs-26 box-middle-p" : selectFontSmall ? "box-middle-p" : "box-middle-p" }>{t("Training.Training")}</a>
          </div>

          <div className="box-right">
            <div className="mentored">
              <a href="#" className="mentored-a">
                <div className="mentored-a-img">
                  <img src={mentored} alt="new hire"/>
                </div>
                <p className={selectFontBig ? "fs-26 mentored-p" : selectFontSmall ? "mentored-p" : "fs-20 mentored-p"}>
                  {t("Training.Mentored")}
                  <span className={selectFontBig ? "fs-26 new-hire-p-span" : selectFontSmall ? "new-hire-p-span" : "fs-20 new-hire-p-span"}>{t("Training.MentoredSpan")}</span>
                </p>
              </a>
            </div>
            <div className="mentored">
              <a href="#" className="mentored-a">
                <div className="mentored-a-img">
                  <img src={projectBased} alt="new hire"/>
                </div>
                <p className={selectFontBig ? "fs-26 mentored-p" : selectFontSmall ? "mentored-p" : "fs-20 mentored-p"}>
                  {t("Training.ProjectBased")}
                  <span className={selectFontBig ? "fs-26 new-hire-p-span" : selectFontSmall ? "new-hire-p-span" : "fs-20 new-hire-p-span"}>{t("Training.ProjectBasedSpan")}</span>
                </p>
              </a>
            </div>
            <div className="mentored">
              <a href="#" className="mentored-a">
                <div className="mentored-a-img">
                  <img src={jobProf} alt="new hire"/>
                </div>
                <p className={selectFontBig ? "fs-26 mentored-p" : selectFontSmall ? "mentored-p" : "fs-20 mentored-p"}>
                  {t("Training.Job")}
                  <span className={selectFontBig ? "fs-26 new-hire-p-span" : selectFontSmall ? "new-hire-p-span" : "fs-20 new-hire-p-span"}>{t("Training.JobSpan")}</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Training