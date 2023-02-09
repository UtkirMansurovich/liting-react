import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import StartFooter from '../components/StartFooter';
import SearchPageCom from '../components/SearchPageCom';

function SearchPage() {
  
  return (
    <div>
        <Navbar/>
        <SearchPageCom/>
        <StartFooter/>
    </div>
  )
}

export default SearchPage;