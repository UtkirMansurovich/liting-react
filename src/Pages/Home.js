import React, {useContext, useRef} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/Preloader";
import TopBar from '../components/TopBar';
import StartAbout from "../components/StartAbout";
import StartOurCategory from "../components/StartOurCategory";
import StartFullWidth from "../components/StartFullWidth";
import StartBlock from "../components/StartBlock";
import StartOurHistory from "../components/StartOurHistory";
import StartFullWidthTwo from "../components/StartFullWidthTwo";
import StartService from "../components/StartService";
import StartTeam from "../components/StartTeam";
import StartClient from "../components/StartClient";
// import StartFaqs from "../components/StartFaqs";
import StartNewsLetter from "../components/StartNewsLetter";
import StartFooter from "../components/StartFooter";
// import LoginRegister from "../components/LoginRegister";
import {SliderOurCategory} from "../components/SliderData";
import StartBanner from "../components/StartBanner";
import {sliderClient} from '../components/SliderData';
import Contrast from "../components/Contrast";
import {AppContext} from "../context";

const Home = () => {
        const {showContrast} = useContext(AppContext);

        return(
            <div>
                <TopBar/>
                {showContrast ? <Contrast/> : <Navbar/>}
                <StartBanner/>
                <StartAbout/>
                <StartOurCategory slidesOurCategory={SliderOurCategory}/>
                <StartFullWidth/>
                <StartBlock />
                <StartOurHistory/>
                <StartFullWidthTwo/>
                <StartService/>
                <StartTeam/>
                <StartClient sliderClient={sliderClient}/>
                {/* <StartFaqs/> */}
                <StartNewsLetter/>
                <StartFooter/>
                {/*<LoginRegister/>*/}
            </div>
        )
}
export default Home