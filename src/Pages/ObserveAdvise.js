import React from 'react';
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar/Navbar";
import StartFooter from "../components/StartFooter";
import ObserveAdviceCom from "../components/ObserveAdviceCom";

const ObserveAdvise = () => {
    return(
        <div>
            <TopBar/>
            <Navbar/>
            <ObserveAdviceCom/>
            <StartFooter/>
        </div>
    )
}

export default ObserveAdvise