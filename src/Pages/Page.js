import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import StartFooter from '../components/StartFooter';
// import TopBar from '../components/TopBar';
import PageCom from "../components/PageCom";
import {useParams} from "react-router-dom";

const Page = () => {
    const {blogId,catId}=useParams();
    return(
        <div>
            {/*<TopBar/>*/}
            <Navbar/>
            <PageCom catId={catId} blogId={blogId}/>
            <StartFooter/>
        </div>
    )
}

export default Page