import React from 'react';
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar/Navbar";
import StartFooter from "../components/StartFooter";
import BlogPagesCom from "../components/BlogPagesCom";

const BlogPages = () => {
    return(
        <div>
            <TopBar/>
            <Navbar/>
            <BlogPagesCom/>
            <StartFooter/>
        </div>
    )
}

export default BlogPages