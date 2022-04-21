import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utills/constant';
import Preloader from './components/Preloader';
import { useHistory } from 'react-router-dom';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //Navbar
  const [navParent, setNavParent] = useState('');
  //Page
  const [page, setPage] = useState('');
  const [getId, setGetId] = useState('');
  // const [getTitle, setGetTitle] = useState('');
  
  const navbarList = () => {
    axios
      .get(BASE_URL + '/api/category/all/sort')
      .then((res) => {
        setNavParent(res.data.object);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findId = (id) => {
    axios
      .get(BASE_URL + '/api/blog/all/' + id)
      .then((res) => {
        setPage(res.data.object);
        console.log(res.data.object);
      })
      .catch((err) => {
        console.log(err);
      });
    setGetId(id);
    // setGetTitle(pageTitle)
  };
  const id = localStorage.getItem('id');
  const pageTitle = localStorage.getItem('pageTitle');

  useEffect(() => {
    navbarList();
    findId(id);
  }, [getId]);

  const value = { navParent, page, findId, pageTitle };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
