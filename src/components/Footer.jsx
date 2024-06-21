import React from "react";
import {Top} from "./Top.jsx";
import {Link} from "react-router-dom";
import {TopScroll} from "./TopScroll.jsx";
import {Button} from "@nextui-org/react";
import {useTranslation} from "react-i18next";
export const Footer = () => {
  const { t, i18n } = useTranslation();

  return(
    <>
      {/*フッター*/}
      <footer className="relative bg-black">
        <div className="w-full h-auto py-20 flex items-center justify-center bg-black">
          <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <Link to="/" onClick={TopScroll}>
              <div className="flex justify-start items-start gap-2">
                <img src="/images/logo.svg" alt="logo" className="w-10 h-auto" />
                <h4 className="font-bold text-lg mt-2">P<span className="text-warning">U</span>N</h4>
              </div>
            </Link>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
              <div className="w-full lg:text-2xl font-bold mt-10">
                <h1 className="w-full md:w-2/3">{t('footer.logo_title')}</h1>
              </div>
              <div className="w-44 pt-6 md:pt-0">
                <Link to="#contact">
                  <Button radius="none" className="mt-10 bg-cyan-600 rounded-full text-white font-bold"
                          size="lg"> {t('footer.button')} </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-24 mb-12 flex-row justify-center gap-5 sm:gap-20">
                <Link to="/" onClick={TopScroll}
                      className="cursor-pointer text-gray-600 hover:text-white font-bold uppercase">
                  {t('Navbar.home')}
                </Link>
                <Link to="/#about" className="cursor-pointer text-gray-600 hover:text-white font-bold uppercase">
                  {t('Navbar.about')}
                </Link>
                <Link to="/#skill" className="cursor-pointer text-gray-600 hover:text-white font-bold uppercase">
                  {t('Navbar.skill')}
                </Link>
                <Link to="/#contact" className="cursor-pointer text-gray-600 hover:text-white font-bold uppercase">
                  {t('Navbar.contact')}
                </Link>
              </div>

              <hr className="border-gray-600"/>
              <p className="w-full text-center mt-12 text-gray-600">Copyright © 2020 Besnik Creative</p>
            </div>
          </div>
        </div>
        <Top/>
      </footer>
    </>
  )
}