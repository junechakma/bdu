// MenuBar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academic', path: '/academic', dropdownItems: ['Item 1', 'Item 2'] },
    { name: 'Notice', path: '/notice', dropdownItems: ['Item 3', 'Item 4'] },
    { name: 'Gallery', path: '/gallery', dropdownItems: ['Item 5', 'Item 6'] },
    { name: 'Research', path: '/research', dropdownItems: ['Item 7', 'Item 8'] },
    { name: 'Peoples', path: '/peoples', dropdownItems: ['Item 9', 'Item 10'] },
    { name: 'Contact', path: '/contact', dropdownItems: ['Item 11', 'Item 12'] },
  ];

  return (
    <div className="my-4 w-[80vw] mx-auto flex justify-between">
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          itemName={menuItem.name}
          isActive={currentPath === menuItem.path}
          to={menuItem.path}
          dropdownItems={menuItem.dropdownItems}
        />
      ))}
    </div>
  );
};

const MenuItem = ({ itemName, isActive, to, dropdownItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative z-20">
      <Link
        to={to}
        className={`text-dark  py-4 px-10 hover:bg-dark hover:text-white ${isActive ? 'font-bold bg-dark text-white py-4 px-10' : ''}`}
        onMouseEnter={handleToggleDropdown}
        onMouseLeave={handleToggleDropdown}
      >
        {itemName}
      {dropdownItems && (
        <div
          className={`absolute w-full left-0 mt-4  bg-blue-900 text-white text-center  divide-y ${isDropdownOpen ? 'block' : 'hidden'}`}
          onMouseEnter={()=>setDropdownOpen(true)}
          onMouseLeave={()=>setDropdownOpen(false)}
        >
          {dropdownItems.map((item, index) => (
            <Link key={index} to={`${to}/${item}`} className="block px-4 py-4  hover:bg-blue-800">
              {item}
            </Link>
          ))}
        </div>
      )}
      </Link>
    </div>
  );
};

export default MenuBar;
