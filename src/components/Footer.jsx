import React from "react";
import {Top} from "./Top.jsx";
import {Link} from "react-router-dom";
import {TopScroll} from "./TopScroll.jsx";
import {Button} from "@nextui-org/react";
export const Footer = () => {

  return(
    <>
      {/*フッター*/}
      <footer className="relative bg-black">
        <div className="w-full h-auto py-20 flex items-center justify-center bg-black">
          <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-3xl font-bold">
              <h1 className="w-full md:w-2/3">PUN</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
              <p className="w-full md:w-2/3 text-gray-400">fasdfasdfasdf</p>
              <div className="w-44 pt-6 md:pt-0">
                <Link to="#contact">
                  <Button radius="none" className="mt-10 bg-warning-600 rounded-full text-white font-bold" size="lg"> CONTACT US </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-24 mb-12 flex-row justify-center gap-20">
                <Link to="/" onClick={TopScroll} className="hidden md:block cursor-pointer text-gray-600 hover:text-warning-400 uppercase">HOME</Link>
                <Link to="/#fukuokaTruism" className="hidden md:block cursor-pointer text-gray-600 hover:text-warning-400 uppercase">ご紹介</Link>
                <Link to="/#sagaTruism" className="hidden md:block cursor-pointer text-gray-600 hover:text-warning-400 uppercase">サービス</Link>
                <Link to="/#contact" className="hidden md:block cursor-pointer text-gray-600 hover:text-warning-400 uppercase">お問い合わせ</Link>
              </div>
              <hr className="border-gray-600"/>
              <p className="w-full text-center mt-12 text-gray-600">Copyright © 2020 Besnik Creative</p>
            </div>
          </div>
        </div>
        <Top />
      </footer>
    </>
  )
}