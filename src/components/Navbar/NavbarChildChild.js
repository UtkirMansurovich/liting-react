import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavChildChildChild from "./NavChildChildChild";

const NavbarChildChild = ({
  sub,
  getCookie,
  setToggle,
  handlerTop,
  selectFontBig,
  selectFontSmall,
}) => {
  const [openTogChild, setOpenTogChild] = useState(false);

  const closeTogChild = () => {
    setOpenTogChild((prev) => !prev);
    if (sub?.type === "PAGE" || sub?.type === "BLOGS") setToggle(false);
  };

  return (
    <li onClick={closeTogChild} className="menu-item menu-item-has-children">
      <Link
        to={
          sub?.type === "PAGE"
            ? "/page/" + sub?.id
            : sub?.type === "BLOGS"
            ? "/blogs/" + sub?.id
            : sub?.type === "PARENT"
            ? "#"
            : ""
        }
        className={
          selectFontBig
            ? "fs-26 text-theme"
            : selectFontSmall
            ? "text-theme"
            : "fs-20 text-theme"
        }
        onClick={handlerTop}
      >
        {getCookie?.i18next === "en"
          ? sub?.name_en
          : getCookie?.i18next === "uz"
          ? sub?.name_uz
          : getCookie?.i18next === "oz"
          ? sub?.name_oz
          : sub?.name_ru}
      </Link>
      <ul
        style={openTogChild ? { display: "block" } : { display: "none" }}
        className="custom sub-menu"
      >
        {sub?.children &&
          sub?.children.map((subChild, subNumber) => (
            <NavChildChildChild
              subChild={subChild}
              key={subNumber}
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

export default NavbarChildChild;
