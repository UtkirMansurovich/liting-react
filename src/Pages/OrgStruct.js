import React from 'react';
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar/Navbar";
import OrgStructCom from "../components/OrgStructCom";
import StartFooter from '../components/StartFooter';

const OrgStruct = () => {
    return(
        <div>
            <TopBar/>
            <Navbar/>
            <OrgStructCom/>
            <StartFooter/>
        </div>
    )
}

export default OrgStruct