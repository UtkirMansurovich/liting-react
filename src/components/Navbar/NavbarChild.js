import React from 'react';
import { Link } from 'react-router-dom';
import NavbarChildChild from './NavbarChildChild';

const NavbarChild = ({ navText }) => {
  // console.log(navText)
  return (
    <li className='menu-item menu-item-has-children'>
      <Link
        to={
          navText.type === 'PAGE'
            ? `/page/`+navText.id
            : navText.type === 'BLOGS'
            ? '/blogs/'+navText.id
            : navText.type === 'PARENT'
            ? '#'
            : ''
        }
        className='text-theme fs-14'
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
