import {Progress} from "@nextui-org/react";
import {Title} from "./Title.jsx";

export const Academic_background = () => {
  return(
    <>
      <div>
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-10">
            <div>
              <img src="/images/logo.svg" className="w-[200px] h-2000px] mt-10"/>
            </div>
            <div className="mx-2">
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
                        value={65}
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
                        value={75}
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
                        value={80}
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
                        value={85}
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
                        value={90}
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
                        label="Tailwind CSS"
                        value={95}
                        showValueLabel={true}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-12 mt-20">
          <div className="container mx-auto max-w-5xl text-center">
            <Title title="学歴"/>
            <h2 className="text-3xl font-bold">専門学校 九州英数学館</h2>
            <h3 className="text-xl my-5">IT-Web コース</h3>
            <p className="text-lg">2020年3月（卒業）</p>

            <div className="mt-10 text-center">
              <div className="flex justify-center items-center mb-5">
                <img src="/images/check.png" alt="Check Icon" className="w-6 h-6 mr-3"/>
                <span className="text-lg">Web プログラミング: PHP、 JavaScript、 HTML、 CSS</span>
              </div>
              <div className="flex justify-center items-center">
                <img src="/images/check.png" alt="Check Icon" className="w-6 h-6 mr-3"/>
                <span className="text-lg">Webデザイン: Photoshop、 Illustrator、 Excel、 Word</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}