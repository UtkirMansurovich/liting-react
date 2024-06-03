import React from "react";
import Navbar from "../components/Navbar/Navbar";
// import Preloader from "../components/Preloader";
import TopBar from "../components/TopBar";
import StartAbout from "../components/StartAbout/StartAbout";
import StartOurCategory from "../components/StartOurCategory";
import StartFullWidth from "../components/StartFullWidth";
import StartBlock from "../components/StartBlock";
import StartOurHistory from "../components/StartOurHistory";
// import StartFullWidthTwo from "../components/StartFullWidthTwo";
import StartService from "../components/StartService/StartService";
import StartTeam from "../components/StartTeam";
import StartClient from "../components/StartClient";
// import StartFaqs from "../components/StartFaqs";
import StartNewsLetter from "../components/StartNewsLetter";
import StartFooter from "../components/StartFooter";
// import LoginRegister from "../components/LoginRegister";
import StartBanner from "../components/StartBanner";
import {
  sliderClient,
  SliderOurCategory,
  ourMentors,
  cheifEngineers,
} from "../components/SliderData";
import Training from "../components/Training/Training";
import Laboratory from "../components/Laboratory";
import Visitors from "../components/Visitors";
import UsefulResources from "../components/UsefulResources";
import {UsefulResourcesData} from "../components/UsefulResourcesData"

const Home = () => {
  return (
    <div>
      {/*<TopBar />*/}
      <Navbar />
      <StartBanner />
      <StartAbout />
      <StartOurCategory slidesOurCategory={SliderOurCategory} />
      <StartFullWidth />
      <StartBlock />
      <StartOurHistory />
      <Laboratory />
      {/*<StartFullWidthTwo/>*/}
      <Training />
      <StartService cheifEngineers={cheifEngineers} />
      <StartTeam ourMentors={ourMentors} />
      <StartClient/>
      <UsefulResources UsefulResourcesData={UsefulResourcesData}/>
      {/* <StartFaqs/> */}
      <Visitors />
      <StartNewsLetter />
      <StartFooter />
      {/*<LoginRegister/>*/}
    </div>
  );
};
export default Home;
