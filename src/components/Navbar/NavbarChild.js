import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavbarChildChild from './NavbarChildChild';
import { AppContext } from '../../context';

const NavbarChild = ({ navText }) => {
  const { findId } = useContext(AppContext);
  function setId(id, pageTitle) {
    localStorage.setItem('id', id);
    localStorage.setItem('pageTitle', pageTitle);
    findId(id, pageTitle);
  }
  console.log(navText)
  return (
    <li className='menu-item menu-item-has-children'>
      <Link
        to={
          navText.type === 'PAGE'
            ? '/page'
            : navText.type === 'BLOGS'
            ? '/blogs'
            : navText.type === 'PARENT'
            ? '/'
            : ''
        }
        className='text-theme fs-14'
        onClick={() => setId(navText.id, navText.name_oz)}
      >
        {navText.name_uz}
      </Link>
      <ul className='custom sub-menu'>
        {navText.children &&
          navText.children.map((sub, number) => (
            <NavbarChildChild sub={sub} key={number} />
          ))}
      </ul>
    </li>
  );
};

export default NavbarChild;
