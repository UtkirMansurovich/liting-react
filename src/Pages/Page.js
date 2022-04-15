import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import StartFooter from '../components/StartFooter';
import TopBar from '../components/TopBar';
import PageCom from "../components/PageCom";

const Page = () => {
    return(
        <div>
            <TopBar/>
            <Navbar/>
            <PageCom/>
            <StartFooter/>
        </div>
    )
}

export default Page