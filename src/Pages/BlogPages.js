import React from 'react';
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar/Navbar";
import StartFooter from "../components/StartFooter";
import BlogPagesCom from "../components/BlogPagesCom";
import {useParams} from "react-router-dom";

const BlogPages = () => {
    const {catId}=useParams();
    return(
        <div>
            <TopBar/>
            <Navbar/>
            <BlogPagesCom catId={catId}/>
            <StartFooter/>
        </div>
    )
}

export default BlogPages