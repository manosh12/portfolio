import {useEffect} from "react";
import homeImg from '/images/bg.jpg';
import {Link, useLocation} from "react-router-dom";
import '../../App.css';
import {Button} from "@nextui-org/react";
import {About} from "../../components/About.jsx";
import {Service} from "../../components/Service.jsx";
import {Academic_background} from "../../components/Academic_background.jsx";
import {Contact} from "../../components/Contact.jsx";

export const Home = () => {

  return (
    <>
      {/* MAIN CONTENTS */}
      <div className="home">
        <div
          className="relative bg-fixed flex flex-col justify-center items-center w-full lg:h-[70vh] h-[50vh] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 0, 0, 0.5), rgba(3, 3, 3, 0.5)), url("${homeImg}")`,
          }}
        >
          <div className="text-center font-serif">
            <h1 className="lg:text-2xl text-md mx-3 text-white text-left">はじめまして、平成7年生まれの28歳のプン マノスと申します。</h1>
            <h5 className="my-5 text-white">社会人歴（IT業界）4年目です。</h5>
            <Button className="text-white font-bold" radius="sm" size="md" variant="bordered">お問い合わせ</Button>
          </div>
        </div>

        {/*ABOUT*/}
        <About />
        <Service />
        <Academic_background />
        <Contact />
      </div>
    </>
  );
};
