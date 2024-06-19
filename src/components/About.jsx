import {Title} from "./Title.jsx";
import data from "../pages/data/data.json"
export const About = () =>{
  const createApp = data.created_app;

  return(
    <>
      <div className="container mx-auto max-w-6xl mt-20 mb-40">
        <Title title="ABOUT"/>
        <p className="mt-5 lg:mx-20">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
          to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          Lorem ipsum may be used as a placeholder before the final copy is available.
        </p>

        <div className="container mx-auto max-w-5xl my-10 rounded-[5px] pt-7" id="intro">
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-20">
            <div className="mx-2">
              <h4 className="text-2xl font-bold text-gray-600">MESSAGE</h4>
              <p className="text-sm py-2 text-warning-500">CEOメッセージ</p>
              <div className="mt-5">
                <h1 className="text-md text-gray-600">
                  私共、<span className="text-warning font-bold text-2xl">Team Next One </span>
                  は課題を抱えている個人から企業に至るまで皆様方の様々な依頼を受け専門家としてその解決に向けたサポート事業を主に行っています
                  <p
                    className="mt-5">個人・業界又分野によって課題は異なりますが依頼されている問題を細分化しそれに対する改善策をチームで提案を行い実施し解決していきます</p>
                  <p
                    className="my-5">チームが一つになってサポートして行きますので是非問題解決に向けた外部資源の活用をご利用ください</p>
                  <p>皆様方の笑顔から全てが始まります次の誰かのために笑顔を繋ぎます今日も一日良い日になりますように</p>
                  <p className="mt-10 text-sm">プン マノス</p>
                </h1>
              </div>
            </div>
            <div>
              <img src="/images/logo.svg" className="w-[350px] h-350px] mt-10"/>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-20 mx-5 mt-20">
          {createApp.map((data, index) => (
            <div className="py-6" key={index}>
              <div className="flex-col items-center">
                <img src={data.img}
                     className="w-80 h-10"
                     alt={data.title}/>
              </div>
              <div className="text-center py-2">
                <h4 className="font-bold text-sm pt-2 text-gray-600">{data.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}