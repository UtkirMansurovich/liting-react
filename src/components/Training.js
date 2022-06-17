import React from 'react';
import iconWoman from '../images/icon_woman.png';
import iconDis from '../images/icon_Discipline.png';
import themeBased from '../images/icon_theme.png';
import mentored from '../images/icon_mentor.png';
import projectBased from '../images/icon_project.png';
import jobProf from '../images/icon_job_profile.png'

const Training = () => {
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
            }}>Enhancing your organizational effectiveness</h2>
        <h4 className="wow fadeInUp animated animated"
            data-wow-duration="0.4s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "0.4s",
              animationDelay: "0.3s",
              animationName: "undefined"
            }}>Improving individual and organizational performance</h4>
        <p className="wow fadeInUp col-sm-10 mrg-lr-auto animated animated"
           data-wow-duration="0.6s"
           data-wow-delay="0.3s"
           style={{
             visibility: "visible",
             animationDuration: "0.6s",
             animationDelay: "0.3s",
             animationName: "undefined",
             margin: "0 auto",
           }}>
          We build on our years of oil and gas experience and training expertise to continually develop, customize, and
          update the industry’s most advanced E&amp;P training for meeting your business goals. Our training programs
          are designed by leading industry experts to blend theory with software tools and workflows across various
          disciplines.
        </p>
        <div className="TrainTeamBlock position-relative mt-5"></div>
      </div>

      <div className="container">
        <div className="content">
          <div className="box-left">
            <div className="new-hire">
              <a href="#" className="new-hire-a">
                <p className="new-hire-p">
                  New hire
                  <span className="new-hire-p-span">Training program</span>
                </p>
                <div className="new-hire-a-img">
                  <img src={iconWoman} alt="new hire"/>
                </div>
              </a>
            </div>
            <div className="new-hire">
              <a href="#" className="new-hire-a">
                <p className="new-hire-p">
                  Discipline based
                  <span className="new-hire-p-span">Training program</span>
                </p>
                <div className="new-hire-a-img">
                  <img src={iconDis} alt="new hire"/>
                </div>
              </a>
            </div>
            <div className="new-hire">
              <a href="#" className="new-hire-a">
                <p className="new-hire-p">
                  Theme based
                  <span className="new-hire-p-span">Training program</span>
                </p>
                <div className="new-hire-a-img">
                  <img src={themeBased} alt="new hire"/>
                </div>
              </a>
            </div>
          </div>

          <div className="box-middle">
            <p className="box-middle-p">Training Programs Offerings</p>
          </div>

          <div className="box-right">
            <div className="mentored">
              <a href="#" className="mentored-a">
                <div className="mentored-a-img">
                  <img src={mentored} alt="new hire"/>
                </div>
                <p className="mentored-p">
                  Mentored
                  <span className="new-hire-p-span">Training program</span>
                </p>
              </a>
            </div>
            <div className="mentored">
              <a href="#" className="mentored-a">
                <div className="mentored-a-img">
                  <img src={projectBased} alt="new hire"/>
                </div>
                <p className="mentored-p">
                  Project based
                  <span className="new-hire-p-span">Training program</span>
                </p>
              </a>
            </div>
            <div className="mentored">
              <a href="#" className="mentored-a">
                <div className="mentored-a-img">
                  <img src={jobProf} alt="new hire"/>
                </div>
                <p className="mentored-p">
                  Job profile competency based
                  <span className="new-hire-p-span">Training program</span>
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