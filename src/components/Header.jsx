import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../App.css';
import { TopScroll } from "./TopScroll.jsx";
import i18n from '../i18n';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const menuItems = [
    { name: t('Navbar.home'), link: "/" },
    { name: t('Navbar.about'), link: "/#about" },
    { name: t('Navbar.skill'), link: "/#skill" },
    { name: t('Navbar.contact'), link: "/#contact" },
  ];

  console.log(language);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang);
    });
  };

  return (
    // ヘッダー
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* PC Menu */}
      <NavbarContent>
        <NavbarBrand>
          <Link to="/" onClick={TopScroll}>
            <div className="flex justify-start items-start gap-2">
              <img src="/images/logo.svg" alt="logo" className="w-10 h-auto" />
              <h4 className="font-bold text-lg mt-2">P<span className="text-warning">U</span>N</h4>
            </div>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 justify-end items-center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} isActive={index === 0}>
              <Link
                to={item.link}
                className="nav-link font-bold text-md text-gray-800 hover:text-cyan-600"
                onClick={TopScroll}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="flex items-center text-sm border-1 text-gray-600 bg-white border-white font-bold"
                aria-label="Select language"
                radius="sm"
              >
                {/*<FaGlobe size={20} />*/}
                {language === "en" ? "🇺🇸 ENG" : language === "jp" ? "🇯🇵 JP" : "🇳🇵 NPL"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              onAction={(key) => handleLanguageChange(key)}
              className="dropdown-menu"
              radius="none"
            >
              <DropdownItem key="en">
                <div className="flex items-center">
                  🇺🇸 ENG
                </div>
              </DropdownItem>
              <DropdownItem key="jp">
                <div className="flex items-center">
                  🇯🇵 JP
                </div>
              </DropdownItem>
              {/*<DropdownItem key="np">*/}
              {/*  <div className="flex items-center">*/}
              {/*    🇳🇵 NPL*/}
              {/*  </div>*/}
              {/*</DropdownItem>*/}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="mobile-menu-item">
            <Link
              to={item.link}
              className="w-full"
              onClick={() => {
                handleMenuClose();
                TopScroll();
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mobile-menu-item">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                aria-label="Select language"
                className="flex border-gray-50 items-center text-sm border-1 text-gray-600"
                radius="none"
              >
                <FaGlobe className="mr-2" size={20} />
                {language === "en" ? "🇺🇸 ENG" : language === "jp" ? "🇯🇵 JP" : "🇳🇵 NPL"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              onAction={(key) => handleLanguageChange(key)}
              className="dropdown-menu"
            >
              <DropdownItem key="en">
                <div className="flex items-center">
                  🇺🇸 ENG
                </div>
              </DropdownItem>
              <DropdownItem key="jp">
                <div className="flex items-center">
                  🇯🇵 JP
                </div>
              </DropdownItem>
              {/*<DropdownItem key="np">*/}
              {/*  <div className="flex items-center">*/}
              {/*    🇳🇵 NPL*/}
              {/*  </div>*/}
              {/*</DropdownItem>*/}
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
