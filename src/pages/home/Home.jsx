import {useEffect, useState} from "react";
import '../../App.css';
import {Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {About} from "../../components/About.jsx";
import {Contact} from "../../components/Contact.jsx";
import {Header} from "../../components/Header.jsx";
import {Footer} from "../../components/Footer.jsx";
import {Fade} from "react-awesome-reveal";
import {Button} from "@nextui-org/react";
import {FaArrowDownLong, FaHandHoldingHand} from "react-icons/fa6";
import {FaServer, FaSitemap} from "react-icons/fa";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const [showArrow, setShowArrow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    const element = document.getElementById(hash);

    if (element) {
      const yOffset = -100;
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  }, [location]);


  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/*ヘッダー*/}
      <Header />

      <div className="container mx-auto max-w-6xl text-gray-600">
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-20 mx-5 lg:mt-14">
          {/* Image section */}
          <div className="order-1 sm:order-2 flex justify-center items-center mt-10 sm:mt-0">
            <img src="/images/bg_hero.jpg" alt="business-exchange" className="w-full sm:w-auto"/>
          </div>

          {/* Content section */}
          <div className="order-2 sm:order-1 sm:mt-20">
            <Fade direction={'left'}><h1 className="lg:text-4xl text-2xl font-bold">{t('main.title')}</h1></Fade>
            <p className="mt-10">
              {t('main.description')}
            </p>
            <Fade direction={'down'} className="mt-10">
              <Link to="#contact">
                <Button variant="bordered" radius="none"
                        className="bg-cyan-600 text-white font-bold border-1 border-cyan-600 rounded-sm w-[200px]"
                        size="lg">{t('main.button')}
                </Button>
              </Link>
            </Fade>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 mx-5 mt-24 gap-8">
          <Fade direction={'left'}>
            <div className="flex flex-col items-center justify-center text-center">
              <div
                className="w-[100px] h-[100px] flex items-center justify-center border border-gray-600 rounded-full shadow-2xl">
                <FaHandHoldingHand className="text-3xl"/>
              </div>
              <h4 className="font-bold text-lg mt-7 text-gray-600">{t('weDo.system')}</h4>
            </div>
          </Fade>

          <Fade direction={'down'}>
            <div className="flex flex-col items-center justify-center text-center">
              <div
                className="w-[100px] h-[100px] flex items-center justify-center border border-gray-600 rounded-full shadow-2xl">
                <FaSitemap className="text-3xl"/>
              </div>
              <h4 className="font-bold text-lg mt-7 text-gray-600">{t('weDo.site')}</h4>
            </div>
          </Fade>

          <Fade direction={'right'}>
            <div className="flex flex-col items-center justify-center text-center">
              <div
                className="w-[100px] h-[100px] flex items-center justify-center border border-gray-600 rounded-full shadow-2xl">
                <FaServer className="text-3xl"/>
              </div>
              <h4 className="font-bold text-lg mt-7 text-gray-600">{t('weDo.server')}</h4>
            </div>
          </Fade>
        </div>


        {showArrow && (
          <Link to="/#business_exchange" className="hidden lg:block">
            <div className="flex justify-center items-end">
              <FaArrowDownLong
                className="text-gray-600 text-2xl lg:text-3xl font-thin mb-2 animate-moveUpDown absolute bottom-8"/>
            </div>
          </Link>
        )}

      </div>

      {/* ABOUT */}
      <About/>
      {/* CONTACT ME */}
      <Contact/>
      {/* フッター */}
      <Footer/>
    </>
  );
}
