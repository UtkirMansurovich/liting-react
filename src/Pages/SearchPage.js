import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import StartFooter from '../components/StartFooter';
import SearchPageCom from '../components/SearchPageCom';
import {useParams} from "react-router-dom";

function SearchPage() {
    const {catId}=useParams();
  return (
    <div>
        <Navbar/>
        <SearchPageCom catId={catId}/>
        <StartFooter/>
    </div>
  )
}

export default SearchPage;