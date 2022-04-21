import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import StartFooter from '../components/StartFooter';
import TopBar from '../components/TopBar';
import PageCom from "../components/PageCom";
import {useParams} from "react-router-dom";

const Page = () => {
    const {blogId}=useParams();
    return(
        <div>
            <TopBar/>
            <Navbar/>
            <PageCom blogId={blogId}/>
            <StartFooter/>
        </div>
    )
}

export default Page