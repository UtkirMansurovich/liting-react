import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utills/constant';
import i18next from "i18next";
import Cookie from "js-cookie";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //Navbar
  const [navParent, setNavParent] = useState([]);
  //Main Slider
  const [slider, setSlider] = useState([]);
  //All Blogs
  const [allBlogs, setAllBlogs] = useState([]);
  //Language
  const [selectLang, setSelectLang] = useState('');

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

  const callAllBlogs = () => {
      axios
          .get(BASE_URL + '/api/blog/all')
          .then((res) => {
              setAllBlogs(res.data.object);
              // console.log(res.data.object);
          })
          .catch((err) => {
              console.log(err);
          })
  }

    const handlerSelect = (e) => {
        setSelectLang(e.target.value);
        console.log(e.target.value);
        i18next.changeLanguage(e.target.value)
    }

    useEffect(() => {
        navbarList();
        sliderImage();
        callAllBlogs();

    }, []);

    const getCookie = Cookie.get();
    // console.log(getCookie)

    const value = { navParent, slider, allBlogs, handlerSelect, getCookie, selectLang };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
