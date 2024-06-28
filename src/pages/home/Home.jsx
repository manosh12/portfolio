import React, {useEffect, useState} from "react";
import '../../App.css';
import {Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {About} from "../../components/About.jsx";
import {Contact} from "../../components/Contact.jsx";
import {Header} from "../../components/Header.jsx";
import {Footer} from "../../components/Footer.jsx";
import {Fade} from "react-awesome-reveal";
import {FaArrowDownLong, FaArrowRightLong, FaHandHoldingHand} from "react-icons/fa6";
import {FaServer, FaSitemap} from "react-icons/fa";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@nextui-org/react";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const [showArrow, setShowArrow] = useState(true);
  const location = useLocation();

  const [openModal, setOpenModal] = useState(null);

  const systemModel = () => setOpenModal('systemModel');
  const siteModel = () => setOpenModal('siteModel');
  const handleCloseModal = () => setOpenModal(null);


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
          <div className="order-1 sm:order-2 flex justify-center items-center mt-10 sm:mt-0">
            <Fade direction={"right"}>
              <img src="/images/main.jpg" alt="business-exchange" className="w-full sm:w-auto"/>
            </Fade>
          </div>
          <div className="order-2 sm:order-1 sm:mt-20">
            <Fade direction={'left'}><h1 className="lg:text-3xl lg:text-start text-center text-2xl font-bold">{t('main.title')}</h1></Fade>
            <p className="mt-2 text-warning lg:text-start text-center font-bold text-lg">{t('main.description')}</p>
            <p className="mt-5 text-sm lg:text-start text-center">{t('main.sub_description')}</p>
            <Fade direction={'down'} className="mt-10">
              <Link to="#contact" className="flex lg:justify-start justify-center">
                <Button variant="bordered" radius="none"
                        className="bg-cyan-600 text-white font-bold border-1 border-cyan-600 rounded-full w-[200px]"
                        size="lg">{t('contact.title')}
                </Button>
              </Link>
            </Fade>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 mx-5 lg:mt-28 mt-14 gap-8">
          <Fade direction="left">
            <div className="flex flex-col items-center justify-center text-center relative">
              <div className="w-[100px] h-[100px] flex items-center justify-center border border-gray-300 rounded-full shadow-2xl">
                <FaHandHoldingHand className="text-3xl" />
              </div>
              <div className="flex justify-center items-center">
                <h4 className="font-bold text-lg mt-7 text-gray-600">{t('weDo.system')}</h4>
                <div className="flex flex-col gap-2">
                 <div role="button" aria-label="Open Modal 1" onClick={systemModel} className="max-w-fit border-0">
                    <FaArrowRightLong className="mx-3 mt-7 text-xl text-cyan-600"/>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="down">
            <div className="flex flex-col items-center justify-center text-center relative">
              <div className="w-[100px] h-[100px] flex items-center justify-center border border-gray-300 rounded-full shadow-2xl">
                <FaSitemap className="text-3xl" />
              </div>
              <div className="flex justify-center items-center">
                <h4 className="font-bold text-lg mt-7 text-gray-600">{t('weDo.site')}</h4>
                <div className="flex flex-col gap-2">
                  <div role="button" aria-label="Open Modal 2" onClick={siteModel} className="max-w-fit border-0">
                    <FaArrowRightLong className="mx-3 mt-7 text-xl text-cyan-600"/>
                  </div>
                </div>
                <div
                  className="absolute h-full border-l border-cyan-600 left-0 top-0 transform -translate-x-1/2 hidden lg:block md:block"></div>
              </div>
            </div>
          </Fade>

          <Fade direction={'right'}>
            <div className="flex flex-col items-center justify-center text-center">
              <div
                className="w-[100px] h-[100px] flex items-center justify-center border border-gray-300 rounded-full shadow-2xl">
                <FaServer className="text-3xl"/>
              </div>
              <h4 className="font-bold text-lg mt-7 text-gray-600">{t('weDo.server')}</h4>
              <div className="absolute h-full border-l border-cyan-600 left-0 top-0 transform -translate-x-1/2 hidden lg:block md:block"></div>
            </div>
          </Fade>
        </div>

        {showArrow && (
          <Link to="/#about" className="hidden lg:block">
            <div className="flex justify-center items-end">
              <FaArrowDownLong
                className="text-gray-400 text-2xl lg:text-3xl font-thin mb-2 animate-moveUpDown absolute bottom-8"/>
            </div>
          </Link>
        )}
      </div>

      <About/>
      <Contact/>
      <Footer/>

      {/* Modal for "System" */}
      {openModal === 'systemModel' && (
        <Modal isOpen={true} onOpenChange={handleCloseModal} className="rounded-md">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-gray-600">{t('weDo.system')}</ModalHeader>
                <ModalBody className="text-gray-600">
                  <p className="text-sm">{t('weDo.system_description')}</p>
                  <div className="mt-3">
                    <h4 className="mb-3 text-lg text-warning font-bold"> Visit Team Support System </h4>
                    <a href="https://219.94.254.196/login" target="_blank"
                       className="underline">https://219.94.254.196/login</a>
                    <h4 className="mt-3 text-sm">id : admin@example.com</h4>
                    <h4 className="text-sm">pw : test123</h4>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button className="bg-cyan-600 rounded-sm text-white" onClick={onClose}>{t('weDo.button')}</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}

      {/* Modal for "Site" */}
      {openModal === 'siteModel' && (
        <Modal isOpen={true} onOpenChange={handleCloseModal} className="rounded-md">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-gray-600">{t('weDo.site')}</ModalHeader>
                <ModalBody className="text-gray-600">
                  <p className="text-sm">{t('weDo.site_description')}</p>
                  <h4 className="mt-3 text-lg text-warning font-bold"> Visit Web Site Project </h4>
                  <a href="https://statuesque-custard-c0d02b.netlify.app" target="_blank" className="underline text-sm">Saga Truism</a>
                  <a href="https://adorable-llama-86d75c.netlify.app" target="_blank" className="underline text-sm">Student Support</a>
                  <a href="https://heroic-eclair-91d070.netlify.app" target="_blank" className="underline text-sm">business exchange meeting</a>
                </ModalBody>
                <ModalFooter>
                  <Button className="bg-cyan-600 rounded-sm text-white" onClick={onClose}>{t('weDo.button')}</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
