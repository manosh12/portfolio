import {FaLocationDot, FaPhoneFlip} from "react-icons/fa6";
import {FaFacebook, FaFax, FaMailBulk} from "react-icons/fa";
import React from "react";
import '../App.css';

export const Contact = () => {

  return(
    <>
      {/* お問い合わせ */}
      <div id="contact" className="mb-20">
        <div className="mt-20">
          <h4 className="text-center lg:text-3xl text-2xl font-bold text-gray-600">お問い合わせ</h4>
          <div className="container mx-auto max-w-5xl text-center mt-10">
            {/*電話番号*/}
            <div className="grid sm:grid-cols-2 gap-10 mx-5">
              <div
                className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl rounded-md pt-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaLocationDot/></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">ADDRESS</h4>
                    <h5 className="mt-2"> 092（409）4949 </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>

              <div
                className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl rounded-md pt-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaPhoneFlip/></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">PHONE</h4>
                    <h5 className="mt-2"> 092（409）4949 </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>

              {/*メール*/}
              <div
                className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl rounded-md py-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaMailBulk/></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">EMAIL</h4>
                    <h5 className="mt-2"> example@thc.jpn.com </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>

              {/*Fax*/}
              <div
                className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl rounded-md py-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaFacebook/></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">FACEBOOK</h4>
                    <h5 className="mt-2"> 092（409）1212 </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}