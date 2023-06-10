import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavbarChildChild from "./NavbarChildChild";
import { AppContext } from "../../context";

const NavbarChild = ({ navText, setToggle, handlerTop }) => {
  const { getCookie, selectFontBig, selectFontSmall } = useContext(AppContext);
  // console.log(navText);
  const [openTog, setOpenTog] = useState(false);

  const closeTog = () => {
    setOpenTog((prev) => !prev);
    if (navText?.type === "BLOGS" || navText?.type === "PAGE") setToggle(false);
  };

  return (
    <li onClick={closeTog} className="menu-item menu-item-has-children">
      <Link
        to={
          navText?.type === "PAGE"
            ? `/page/` + navText?.id
            : navText?.type === "BLOGS"
            ? "/blogs/" + navText?.id
            : navText?.type === "PARENT"
            ? "#"
            : ""
        }
        className={
          selectFontBig
            ? "fs-26 text-theme"
            : selectFontSmall
            ? "text-theme fs-14"
            : "fs-20 text-theme"
        }
        onClick={handlerTop}
      >
        {getCookie?.i18next === "en"
          ? navText?.name_en
          : getCookie?.i18next === "uz"
          ? navText?.name_uz
          : getCookie?.i18next === "oz"
          ? navText?.name_oz
          : navText?.name_ru}
      </Link>
      <ul
        className={openTog ? "custom sub-menu openNavChild" : "custom sub-menu"}
      >
        {navText?.children &&
          navText?.children.map((sub, number) => (
            <NavbarChildChild
              sub={sub}
              key={number}
              getCookie={getCookie}
              setToggle={setToggle}
              handlerTop={handlerTop}
              selectFontBig={selectFontBig}
              selectFontSmall={selectFontSmall}
            />
          ))}
      </ul>
    </li>
  );
};

export default NavbarChild;
