import data from "../data/data.json";
import '../App.css';
import {Card, CardBody, CardHeader, Progress, Tooltip} from "@nextui-org/react";
import {Fade} from "react-awesome-reveal";
import {useTranslation} from "react-i18next";
import {Title} from "./Title.jsx";

export const About = () => {
  const collageLearnedLanguage = data.collageLearnedLanguage;
  const other = data.other;
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="lg:mt-60 mt-28" id="about">
        <div className="container mx-auto max-w-5xl">
          <div className="mt-5 mx-5">
            <Title title={t('about.title')} />
          </div>

          {/*紹介 */}
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-20">
            <div className="lg:mt-1">
              <div className="order-1 sm:order-2 flex justify-center items-center sm:mt-0">
                <img src="/images/bg_hero.jpg" alt="business-exchange" className="w-full sm:w-auto"/>
              </div>
            </div>

            <div className="mx-2">
              <Fade direction={"down"}>
                <div className="text-gray-600 font-bold">INTRODUCTION</div>
              </Fade>
              <div className="lg:mt-5">
                <h1 className="text-md text-gray-600">
                  {t('about.description')}
                  <p className="my-5">{t('about.second_description')}</p>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/*Skill */}
        <div className="bg-[#f0f5f7] lg:mt-20 mt-10 relative" id="skill">
          <div className="container mx-auto max-w-5xl py-10 pb-20 text-gray-600">
            <Title title={t('skill.title')} />
            <Fade direction={"up"}>
              <div className="grid grid-cols-5 lg:grid-cols-10 mt-7 gap-5 mx-5">
                <Tooltip showArrow={true} content={t('skill.php')}>
                  <img src="/images/php.svg" className="w-14 h-14"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.laravel')}>
                  <img src="/images/laravel.svg" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.react')}>
                  <img src="/images/react.svg" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.vue')}>
                  <img src="/images/vue.svg" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.html')}>
                  <img src="/images/html.svg" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.css')}>
                  <img src="/images/css.svg" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.bootstrap')}>
                  <img src="/images/bootstrap.svg" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.tailwind')}>
                  <img src="/images/tailwind.png" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.gitlab')}>
                  <img src="/images/github.svg" className="w-12 h-12"/>
                </Tooltip>
                <Tooltip showArrow={true} content={t('skill.server')}>
                  <img src="/images/linux.svg" className="w-12 h-12"/>
                </Tooltip>
              </div>
            </Fade>
          </div>
        </div>

        {/*progress*/}
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-5">
            <div className="mx-2 lg:mt-20 mt-10">
              <Progress className="my-3"
                        size="md"
                        radius="sm"
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                          label: "tracking-wider font-medium text-default-600",
                          value: "text-foreground/60"
                        }}
                        label="PHP"
                        value={70}
                        showValueLabel={true}
              />
              <Progress className="my-3"
                        size="md"
                        radius="sm"
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator: "bg-gradient-to-r from-blue-500 to-green-500",
                          label: "tracking-wider font-medium text-default-600",
                          value: "text-foreground/60"
                        }}
                        label="JavaScript"
                        value={50}
                        showValueLabel={true}
              />
              <Progress className="my-3"
                        size="md"
                        radius="sm"
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator: "bg-gradient-to-r from-purple-500 to-indigo-500",
                          label: "tracking-wider font-medium text-default-600",
                          value: "text-foreground/60"
                        }}
                        label="Laravel"
                        value={70}
                        showValueLabel={true}
              />
              <Progress className="my-3"
                        size="md"
                        radius="sm"
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator: "bg-gradient-to-r from-green-500 to-teal-500",
                          label: "tracking-wider font-medium text-default-600",
                          value: "text-foreground/60"
                        }}
                        label="Vue"
                        value={50}
                        showValueLabel={true}
              />
              <Progress className="my-3"
                        size="md"
                        radius="sm"
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator: "bg-gradient-to-r from-red-500 to-orange-500",
                          label: "tracking-wider font-medium text-default-600",
                          value: "text-foreground/60"
                        }}
                        label="React JS"
                        value={60}
                        showValueLabel={true}
              />
              <Progress className="my-3"
                        size="md"
                        radius="sm"
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator: "bg-gradient-to-r from-yellow-500 to-pink-500",
                          label: "tracking-wider font-medium text-default-600",
                          value: "text-foreground/60"
                        }}
                        label="Server"
                        value={40}
                        showValueLabel={true}
              />
            </div>
            <div className="lg:mt-16">
              <img src="/images/bg_hero.jpg" className="w-full sm:w-auto"/>
            </div>
          </div>
        </div>

        {/*Collage History*/}
        <div className="container mx-auto max-w-5xl py-20 text-gray-600 lg:mt-7 mt-5">
          <Title title={t('collage_background.title')} />
          <h4 className="text-center text-lg mt-5">{t('collage_background.collage')}</h4>
          <h4 className="text-center text-lg">{t('collage_background.graduated')}</h4>
          <h4 className="font-bold text-lg uppercase mx-5 mt-10 lg:text-start text-center">{t('collage_background.programing')}</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 gap-5 mx-5">
            {collageLearnedLanguage.map((contentList, index) => (
              <Fade
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <Card className="py-6 shadow-2xl rounded-md transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <img
                      src={contentList.img}
                      className="w-10 h-10 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
                      alt={contentList.title}
                    />
                  </CardHeader>
                  <CardBody className="text-center py-5">
                    <h4 className="font-bold text-sm pt-2 text-gray-600">{contentList.title}</h4>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </div>

          <h4 className="font-bold text-lg uppercase mx-5 mt-10 lg:text-start text-center">{t('collage_background.other')}</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 gap-5 mx-5">
            {other.map((contentList, index) => (
              <Fade
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <Card className="py-6 shadow-2xl rounded-md transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <img
                      src={contentList.img}
                      className="w-10 h-10 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
                      alt={contentList.title}
                    />
                  </CardHeader>
                  <CardBody className="text-center py-5">
                    <h4 className="font-bold text-sm pt-2 text-gray-600">{contentList.title}</h4>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
