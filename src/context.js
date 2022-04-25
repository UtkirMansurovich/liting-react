import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utills/constant';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //Navbar
  const [navParent, setNavParent] = useState('');

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

  useEffect(() => {
    navbarList();
  }, []);

  const value = { navParent };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
