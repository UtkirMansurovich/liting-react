import React, { createContext, useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL } from './utills/constant';
import i18next from "i18next";
import Cookie from "js-cookie";
import {useTranslation} from "react-i18next";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //Navbar
  const [navParent, setNavParent] = useState([]);
  //Main Slider
  const [slider, setSlider] = useState([]);
  //All Blogs
  const [allBlogs, setAllBlogs] = useState([]);
  //Language
  const [selectLang, setSelectLang] = useState('ru');
  // Contrast
  const [showContrast, setShowContrast] = useState(false);
  const [selectContrast, setSelectContrast] = useState(true);
  const [selectFontSmall, setSelectFontSmall] = useState(true);
  const [selectFontBig, setSelectFrontBig] = useState(false);
  const contrastRef = useRef();

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
              console.log(res.data.object);
          })
          .catch((err) => {
              console.log(err);
          })
  }

    const handlerSelect = (e) => {
        setSelectLang(e.target.value);
        console.log(e.target.value);
        i18next.changeLanguage(e.target.value);

    }

    const openContrast = () => {
      setShowContrast(prev => !prev);
    }

    const closeContrast = (e) => {
      if(contrastRef.current === e.target)
        setShowContrast(false);
    }

    const keyPress = useCallback(e =>{
      if(e.key === "Escape" && showContrast){
        setShowContrast(false);
      }
    }, [setShowContrast, showContrast])

    const clickContrast = () => {
      setSelectContrast(prev => !prev);
    }

    const clickFontSmall = () => {
      setSelectFontSmall(true);
      setSelectFrontBig(false);
    }
    const clickFontMedium = () => {
      setSelectFontSmall(false);
      setSelectFrontBig(false);
    }
    const clickFontBig = () => {
      setSelectFontSmall(false);
      setSelectFrontBig(true);
    }

    const { t } = useTranslation();
    const Title = document.title = t("Title");

    useEffect(() => {
        navbarList();
        sliderImage();
        callAllBlogs();
        document.addEventListener('keydown', keyPress);
        return() => document.addEventListener('keydown', keyPress);

     }, [Title, keyPress]);

    const getCookie = Cookie.get();
    // console.log(getCookie)

    const value = { navParent, slider, allBlogs, handlerSelect, getCookie, selectLang, clickContrast, selectContrast, clickFontSmall, clickFontMedium, clickFontBig, selectFontSmall,
      selectFontBig, openContrast, showContrast, setShowContrast, contrastRef, closeContrast };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
