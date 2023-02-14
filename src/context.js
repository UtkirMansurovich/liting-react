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
  // Call Laboratory
  const [labor, setLabor] = useState([]);
  //Language
  const [selectLang, setSelectLang] = useState('ru');
  // Contrast
  const [showContrast, setShowContrast] = useState(false);
  const [selectContrast, setSelectContrast] = useState(true);
  const [selectFontSmall, setSelectFontSmall] = useState(true);
  const [selectFontBig, setSelectFrontBig] = useState(false);
  const contrastRef = useRef();
    
  // Search
  const [showSearch, setShowSearch] = useState(false);
  const SearchRef = useRef();
  const [searchItem, setSearchItem] = useState('');
  const [searchedItem, setSearchedItem] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios.post(BASE_URL + '/api/blog/search?page=0&pageSize=9&keyword='+searchItem
    ).then(res => {
      window.localStorage.setItem('arr', JSON.stringify(res.data.object));
      window.location.href = '/search?keyword='+searchItem;
    }).catch(err => {
      console.log(err)
    })
    window.localStorage.setItem('arrNot', searchItem)
  }
  let query = window.location.search.substring();
  console.log(query);
   
  const handlerChange = (e) => {
    setSearchItem(e.target.value);
  }
  
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
          // console.log(res.data.object)
        })
        .catch((err) => {
          console.log(err);
        })
  }

  const callAllBlogs = () => {
      axios
          .get(BASE_URL + '/api/blog/all/9')
          .then((res) => {
              setAllBlogs(res.data.object);
              // console.log(res.data.object);
          })
          .catch((err) => {
              console.log(err);
          })
  }

  const callLobor = () => {
    axios
        .get(BASE_URL + '/api/blog/all/56')
        .then(res => { 
            setLabor(res.data.object);
            // console.log(res.data.object);
        })
        .catch(err => {
          console.log(err);
        })
  }

    const handlerSelect = (e) => {
        setSelectLang(e.target.value);
        // console.log(e.target.value);
        i18next.changeLanguage(e.target.value);

    }

    const openContrast = () => {
      setShowContrast(prev => !prev);
    }

    const openSearch = () => {
      setShowSearch(prev => !prev);
    }

    const closeContrast = (e) => {
      if(contrastRef.current === e.target)
        setShowContrast(false);
    }

    const closeSearch = (e) => {
      if(SearchRef.current === e.target)
        setShowSearch(false);
    }

    const keyPress = useCallback(e =>{
      if(e.key === "Escape" && showContrast){
        setShowContrast(false);
      }
      if(e.key === 'Escape' && showSearch){
        setShowSearch(false);
      }
    }, [setShowContrast, showContrast])

    const clickStandard = () => {
      setSelectContrast(true);
      localStorage.removeItem("selectCont");
    }
    const clickContrast = () => {
      setSelectContrast(false);
      localStorage.setItem("selectCont", "c");
    }

    const clickFontSmall = () => {
      setSelectFontSmall(true);
      setSelectFrontBig(false);
    }
    const clickFontMedium = () => {
      setSelectFontSmall(false);
      setSelectFrontBig(false);
        var children = document.getElementById('alkash').children;
        for(var i=0; i<children.length; i++){
            var child = children[i];
            child.style.cssText = "font-size: px !important;";
        }
    }
    const clickFontBig = () => {
      setSelectFontSmall(false);
      setSelectFrontBig(true);
        var children = document.getElementById('alkash').children;
        for(var i=0; i<children.length; i++){
            var child = children[i];
            child.style.cssText = "font-size: px !important;";
        }
    }

    const { t } = useTranslation();
    const Title = document.title = t("Title");

    useEffect(() => {
      setSelectContrast(!localStorage.getItem('selectCont'));
      navbarList();
      sliderImage();
      callAllBlogs();
      callLobor();
      document.addEventListener('keydown', keyPress);
      return() => document.addEventListener('keydown', keyPress);
    }, [Title, keyPress, selectContrast]);

    const getCookie = Cookie.get();
    // console.log(getCookie)

    const value = { navParent, slider, allBlogs, labor, handlerSelect, getCookie, selectLang, clickContrast, selectContrast, clickFontSmall, clickFontMedium, clickFontBig, selectFontSmall,
      selectFontBig, openContrast, showContrast, setShowContrast, contrastRef, closeContrast, clickStandard,
      showSearch, setShowSearch, SearchRef, openSearch, closeSearch, handlerSubmit, handlerChange, searchItem, searchedItem, setSearchedItem };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
