import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import axios from "axios";
import { BASE_URL } from "./utills/constant";
import i18next from "i18next";
import Cookie from "js-cookie";
import { useTranslation } from "react-i18next";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

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
  const [selectLang, setSelectLang] = useState("ru");
  // Contrast
  const [showContrast, setShowContrast] = useState(false);
  const [selectContrast, setSelectContrast] = useState(true);
  const [selectFontSmall, setSelectFontSmall] = useState(true);
  const [selectFontBig, setSelectFrontBig] = useState(false);
  const contrastRef = useRef();

  // Search
  const [showSearch, setShowSearch] = useState(false);
  const SearchRef = useRef();

  // NEFTGAZMALAKA
  const [training, setTraining] = useState([]);

  const myKeysValues = window.location.search;
  const urlParams = new URLSearchParams(myKeysValues);
  const searchedKeyword = urlParams.get("keyword");
  const page = urlParams.get("page");

  const [searchItem, setSearchItem] = useState("");

  console.log(searchedKeyword, page);
  console.log(searchItem);

  const limitPage = 9;

  const handlerSubmit = (e) => {
    e.preventDefault();
    changePaginatePage();
    setSearchItem("");
  };

  const changePaginatePage = async (page) => {
    await axios
      .post(
        BASE_URL +
          `/api/blog/search?page=${
            page ? page : 0
          }&pageSize=${limitPage}&keyword=${
            searchItem
              ? searchItem
              : searchedKeyword
              ? searchedKeyword
              : searchedKeywords
          }`
      )
      .then((res) => {
        window.localStorage.setItem("arr", JSON.stringify(res.data.object));
        window.localStorage.setItem(
          "pageNumber",
          Math.ceil(res.data.totalElements / limitPage)
        );
        window.location.href = `/search?page=${page ? page : 0}&keyword=${
          searchItem
            ? searchItem
            : searchedKeyword
            ? searchedKeyword
            : searchedKeywords
        }`;
      })
      .catch((err) => {
        console.log(err);
      });
    window.localStorage.setItem("arrNot", searchItem);
    window.localStorage.setItem("keywordSearch", searchedKeyword);
  };

  const searchedKeywords = window.localStorage.getItem("keywordSearch");

  const handlerChange = (e) => {
    setSearchItem(e.target.value);
    // console.log(searchItem);
  };

  const handlerPageClicked = async (data) => {
    let page = data.selected ? data.selected : 0;
    changePaginatePage(page);
    window.localStorage.setItem("activNumber", data.selected);
    window.scrollTo({ top: 100 });
  };

  const navbarList = () => {
    axios
      .get(BASE_URL + "/api/category/all/sort")
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
      .get(BASE_URL + "/api/blog/all/main_slider")
      .then((res) => {
        setSlider(res.data.object);
        // console.log(res.data.object)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callAllBlogs = () => {
    axios
      .get(BASE_URL + "/api/blog/all/9")
      .then((res) => {
        setAllBlogs(res.data.object);
        // console.log(res.data.object);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callLobor = () => {
    axios
      .get(BASE_URL + "/api/blog/all/56")
      .then((res) => {
        setLabor(res.data.object);
        // console.log(res.data.object);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callTraining = () => {
    axios
      .get(BASE_URL + "/api/blog/all/57?isText=true")
      .then((res) => {
        setTraining(res.data.object);
        console.log(res.data.object);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlerSelect = (e) => {
    setSelectLang(e.target.value);
    // console.log(e.target.value);
    i18next.changeLanguage(e.target.value);
  };

  const openContrast = () => {
    setShowContrast((prev) => !prev);
  };

  const openSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const closeContrast = (e) => {
    if (contrastRef.current === e.target) setShowContrast(false);
  };

  const closeSearch = (e) => {
    if (SearchRef.current === e.target) setShowSearch(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showContrast) {
        setShowContrast(false);
      }
      if (e.key === "Escape" && showSearch) {
        setShowSearch(false);
      }
    },
    [setShowContrast, showContrast]
  );

  const clickStandard = () => {
    setSelectContrast(true);
    localStorage.removeItem("selectCont");
  };
  const clickContrast = () => {
    setSelectContrast(false);
    localStorage.setItem("selectCont", "c");
  };

  const clickFontSmall = () => {
    setSelectFontSmall(true);
    setSelectFrontBig(false);
  };
  const clickFontMedium = () => {
    setSelectFontSmall(false);
    setSelectFrontBig(false);
    var children = document.getElementById("alkash").children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.cssText = "font-size: px !important;";
    }
  };
  const clickFontBig = () => {
    setSelectFontSmall(false);
    setSelectFrontBig(true);
    var children = document.getElementById("alkash").children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.cssText = "font-size: px !important;";
    }
  };

  const { t } = useTranslation();
  const Title = (document.title = t("Title"));

  useEffect(async () => {
    setSelectContrast(!localStorage.getItem("selectCont"));
    navbarList();
    sliderImage();
    callAllBlogs();
    callLobor();
    callTraining();
    document.addEventListener("keydown", keyPress);
    return () => document.addEventListener("keydown", keyPress);
  }, [Title, keyPress, selectContrast]);

  const getCookie = Cookie.get();
  // console.log(getCookie)

  const value = {
    navParent,
    slider,
    allBlogs,
    labor,
    handlerSelect,
    getCookie,
    selectLang,
    clickContrast,
    selectContrast,
    clickFontSmall,
    clickFontMedium,
    clickFontBig,
    selectFontSmall,
    selectFontBig,
    openContrast,
    showContrast,
    setShowContrast,
    contrastRef,
    closeContrast,
    clickStandard,
    showSearch,
    setShowSearch,
    SearchRef,
    openSearch,
    closeSearch,
    handlerSubmit,
    handlerChange,
    handlerPageClicked,
    searchItem,
    training,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
