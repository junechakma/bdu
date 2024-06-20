import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuBar = ({ toggleNavbar, seToggleNavbar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academic', path: '/academic', dropdownItems: ['undergrad'] },
    { name: 'Notice', path: '/notice' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Research', path: '/research' },
    { name: 'Peoples', path: '/peoples' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="my-4 w-[80vw] mx-auto md:flex gap-0 flex-row justify-between py-0 hidden">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            itemName={menuItem.name}
            isActive={currentPath === menuItem.path}
            to={menuItem.path}
            dropdownItems={menuItem.dropdownItems}
            toggleNavbar={toggleNavbar}
            seToggleNavbar={seToggleNavbar}
          />
        ))}
      </div>

      <div className={`absolute bg-white flex md:hidden flex-col gap-10 py-10 w-1/2 z-20 ${toggleNavbar ? "right-0 duration-300 shadow-xl" : "-right-1/2 duration-300 hidden"}`}>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            itemName={menuItem.name}
            isActive={currentPath === menuItem.path}
            to={menuItem.path}
            dropdownItems={menuItem.dropdownItems}
            toggleNavbar={toggleNavbar}
            seToggleNavbar={seToggleNavbar}
            mobileView={true}
          />
        ))}
      </div>
    </>
  );
};

const MenuItem = ({ itemName, isActive, to, dropdownItems, toggleNavbar, seToggleNavbar, mobileView = false }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClick = () => {
    if (toggleNavbar) {
      seToggleNavbar(false);
    }
  };

  return (
    <div className="relative z-20">
      <Link
        className={`text-dark py-4 px-10 hover:bg-dark hover:text-white cursor-pointer ${isActive ? 'font-bold bg-dark text-white' : ''}`}
        onMouseEnter={!mobileView ? handleToggleDropdown : undefined}
        onMouseLeave={!mobileView ? handleToggleDropdown : undefined}
        onClick={mobileView ? handleToggleDropdown : handleClick}
        to={`${to}`}
      >
        {itemName}
      </Link>
      {dropdownItems && (
        <div
          className={`md:absolute w-full left-0 mt-4 bg-blue-900 text-white text-center divide-y ${isDropdownOpen ? 'block' : 'hidden'}`}
          onMouseEnter={!mobileView ? () => setDropdownOpen(true) : undefined}
          onMouseLeave={!mobileView ? () => setDropdownOpen(false) : undefined}
        >
          {dropdownItems.map((item, index) => (
            <Link key={index} to={`${to}/${item}`} className="block px-4 py-4 hover:bg-blue-800" onClick={handleClick}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
