import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utills/constant';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //Navbar
  const [navParent, setNavParent] = useState([]);
  //Main Slider
  const [slider, setSlider] = useState([]);

  const navbarList = () => {
    axios
      .get(BASE_URL + '/api/category/all/sort')
      .then((res) => {
        setNavParent(res.data.object);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sliderImage = () => {
    axios
        .get(BASE_URL + '/api/blog/all/main_slider')
        .then((res) => {
          setSlider(res.data.object);
          console.log(res.data.object)
        })
        .catch((err) => {
          console.log(err);
        })
  }

  useEffect(() => {
    navbarList();
    sliderImage();
  }, []);

  const value = { navParent, slider };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
