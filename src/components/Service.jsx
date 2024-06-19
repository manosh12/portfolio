import {Title} from "./Title.jsx";
import data from "../pages/data/data.json"
export const Service = () =>{
  const serviceData = data.service;

  return(
    <>
      <div className="bg-gray-100 mb-40">
        <div className="container mx-auto max-w-6xl py-10">
          <Title title="SERVICE"/>
          <div className="container mx-auto max-w-3xl">
            <div className="grid sm:grid-cols-10">
              <img src="/images/php.svg" className="w-10 h-10"/>
              <img src="/images/laravel.svg" className="w-10 h-10"/>
              <img src="/images/react.svg" className="w-10 h-10"/>
              <img src="/images/vue.svg" className="w-10 h-10"/>
              <img src="/images/bootstrap.svg" className="w-10 h-10"/>
              <img src="/images/html.svg" className="w-10 h-10"/>
              <img src="/images/css.svg" className="w-10 h-10"/>
              <img src="/images/github.svg" className="w-10 h-10"/>
              <img src="/images/gitlab.svg" className="w-10 h-10"/>
              <img src="/images/linux.svg" className="w-10 h-10"/>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-20 mx-5 mt-10">
            {serviceData.map((data, index) => (
              <div className="py-6" key={index}>
                <div className="flex-col items-center">
                  <img src={data.img}
                       className="w-80 h-10"
                       alt={data.title}/>
                </div>
                <div className="text-center py-2">
                  <h4 className="font-bold text-lg pt-2 text-gray-600">{data.title}</h4>
                  <h4 className="font-bold text-sm pt-2 text-gray-600 mt-5">{data.content}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}