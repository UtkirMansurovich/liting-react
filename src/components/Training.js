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

    // <section className="nextCommon contentSection position-relative TrainingProgram-Overview"
    //          style={{
    //            background:"url(/-/media/next/images/trainingprogram/backgroundimage/training_program_overview_background.jpg?h=761&amp;w=1920&amp;hash=BF74905795C0D90831764103CA2C2CAD826949AA) no-repeat; background-position:center bottom"
    //          }}>
    //   <div className="container pt-5 text-center">
    //     <h2 className="mt-0 pt-0 wow fadeInUp animated animated"
    //         data-wow-duration="0.2s"
    //         data-wow-delay="0.3s"
    //         style={{
    //           visibility: "visible",
    //           animationDuration: "0.2s",
    //           animationDelay: "0.3s",
    //           animationName: "undefined"
    //     }}>Enhancing your organizational effectiveness</h2>
    //     <h4 className="wow fadeInUp animated animated"
    //         data-wow-duration="0.4s"
    //         data-wow-delay="0.3s"
    //         style={{
    //           visibility: "visible",
    //           animationDuration: "0.4s",
    //           animationDelay: "0.3s",
    //           animationName: "undefined"
    //     }}>Improving individual and organizational performance</h4>
    //     <p className="wow fadeInUp col-sm-10 mrg-lr-auto animated animated"
    //        data-wow-duration="0.6s"
    //        data-wow-delay="0.3s"
    //        style={{
    //          visibility: "visible",
    //          animationDuration: "0.6s",
    //          animationDelay: "0.3s",
    //          animationName: "undefined"
    //     }}>We build on our years of oil and gas experience and training expertise to continually develop, customize, and
    //       update the industry’s most advanced E&amp;P training for meeting your business goals. Our training programs
    //       are designed by leading industry experts to blend theory with software tools and workflows across various
    //       disciplines.</p>
    //     <div className="TrainTeamBlock position-relative mt-5"></div>
    //   </div>
    //   <div className="container EnhancingOrg-section pb-6">
    //     <div className="row">
    //       <div className="col-sm-12 EnhancingMain-wrapper">
    //         <div className="row">
    //           <div className="col-sm-5 wow zoomIn animated pr-0 EnhancingMain-wrapper-left animated animated"
    //                data-wow-duration="0.7s"
    //                data-wow-delay="0.7s"
    //                style={{
    //                  visibility: "visible",
    //                  animationDuration: "0.7s",
    //                  animationDelay: "0.7s",
    //                  animationName: "undefined"
    //           }}>
    //             <ul className="left-sect">
    //               <li>
    //                 <a href="http://www.nexttraining.net/corporate/training-programs/new-hire-training-program" target="">
    //                   <span className="icon-bg">
    //                     <img src="/-/media/next/images/trainingprogram/icons/icon_new_hire.png?h=51&amp;la=en&amp;w=72&amp;hash=860D4154C55C384E0A66971967F05D975BE1DCBE"
    //                          alt="New Hire Training Program"
    //                          width="72"
    //                          height="51"
    //                          className=" "
    //                     />
    //                   </span>
    //                   <span className="icon-bg-content">
    //                     New hire
    //                     <span>Training program</span>
    //                   </span>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="http://www.nexttraining.net/corporate/training-programs/discipline-based-training-program" target="">
    //                   <span className="icon-bg">
    //                     <img src="/-/media/next/images/trainingprogram/icons/icon_discipline.png?h=51&amp;la=en&amp;w=72&amp;hash=9080374EDF41B9BD2EC75C48CDAC20393C91E1C7"
    //                          alt="Discipline Based Training Program"
    //                          width="72"
    //                          height="51"
    //                          className=" "
    //                     />
    //                   </span>
    //                   <span className="icon-bg-content">
    //                     Discipline based
    //                     <span>Training program</span>
    //                   </span>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="http://www.nexttraining.net/corporate/training-programs/theme-based-training-program" target="">
    //                   <span className="icon-bg">
    //                     <img src="/-/media/next/images/trainingprogram/icons/icon_theme.png?h=51&amp;la=en&amp;w=72&amp;hash=4C645BA0052BF7D5D21C1B6DE329647A718A4B62"
    //                          alt="Theme Based Training Program"
    //                          width="72"
    //                          height="51"
    //                          className=" "
    //                     />
    //                   </span>
    //                   <span className="icon-bg-content">
    //                     Theme based
    //                     <span>Training program</span>
    //                   </span>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //
    //           <div className="enhance-circle-area wow zoomIn animated EnhancingMain-wrapper-center animated animated"
    //                data-wow-duration="0.7s"
    //                data-wow-delay="0.7s"
    //                style={{
    //                  visibility: "visible",
    //                  animationDuration: "0.7s",
    //                  animationDelay: "0.7s",
    //                  animationName: "undefined"
    //           }}>
    //             <div className="enhance-circle-content">Training Program Offerings</div>
    //           </div>
    //
    //           <div className="col-sm-5 wow zoomIn animated pl-0 EnhancingMain-wrapper-right animated animated"
    //                data-wow-duration="0.7s"
    //                data-wow-delay="0.7s"
    //                style={{
    //                  visibility: "visible",
    //                  animationDuration: "0.7s",
    //                  animationDelay: "0.7s",
    //                  animationName: "undefined"
    //           }}>
    //             <ul className="left-sect right-sect">
    //               <li>
    //                 <a href="http://www.nexttraining.net/corporate/training-programs/mentored-training-program" target="">
    //                   <span className="icon-bg">
    //                     <img src="/-/media/next/images/trainingprogram/icons/icon_mentor.png?h=51&amp;la=en&amp;w=72&amp;hash=6CA9DC81317773BBCB90DCD5BD477148719B9AF9"
    //                          alt="Mentored Training Program"
    //                          width="72"
    //                          height="51"
    //                          className=" "
    //                     />
    //                   </span>
    //                   <span className="icon-bg-content">
    //                     Mentored
    //                     <span>Training program</span>
    //                   </span>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="http://www.nexttraining.net/corporate/training-programs/project-based-training-programs" target="">
    //                   <span className="icon-bg">
    //                     <img src="/-/media/next/images/trainingprogram/icons/icon_project.png?h=51&amp;la=en&amp;w=72&amp;hash=999B1216AAC141AD59DA0A3B0F318F840E6969A9"
    //                          alt="Project Based Training Program"
    //                          width="72"
    //                          height="51"
    //                          className=" "/>
    //                   </span>
    //                   <span className="icon-bg-content">
    //                     Project based
    //                     <span>Training program</span>
    //                   </span>
    //                   </a>
    //                 </li>
    //               <li><a href="http://www.nexttraining.net/corporate/training-programs/job-profile-competency-based-training-program" target="">
    //                 <span className="icon-bg">
    //                   <img src="/-/media/next/images/trainingprogram/icons/icon_job_profile.png?h=51&amp;la=en&amp;w=72&amp;hash=E057F2FAB09BD796DCB08AE72C924E6461B27634"
    //                        alt="Job Profile Training Program"
    //                        width="72"
    //                        height="51"
    //                        className=" "/>
    //                 </span>
    //                 <span className="icon-bg-content">
    //                   Job profile competency based
    //                   <span>Training program</span>
    //                 </span>
    //               </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Training