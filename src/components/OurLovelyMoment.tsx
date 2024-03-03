import anh1 from "../assets/12345/1.jpg";
import anh2 from "../assets/12345/2.jpg";
import anh3 from "../assets/12345/3.png";
import anh4 from "../assets/12345/4.jpg";
import anh5 from "../assets/12345/5.jpg";
import anh6 from "../assets/12345/6.jpg";
import anh7 from "../assets/12345/7.jpg";
import anh8 from "../assets/12345/8.jpg";
import anh9 from "../assets/12345/9.jpg";
import anh10 from "../assets/12345/10.jpg";
import anh11 from "../assets/12345/11.jpg";
import anh12 from "../assets/12345/12.jpg";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";

export const OurLovelyMoment = ({ lang }: { lang?: string }) => {
  const slides = [
    {
      src: anh1,
    },
    {
      src: anh2,
    },
    {
      src: anh3,
    },
    { src: anh4 },
    { src: anh5 },
    { src: anh6 },
    { src: anh7 },
    { src: anh8 },
    { src: anh9 },
    { src: anh10 },
    { src: anh11 },
    { src: anh12 },
  ];
  const [index, setIndex] = useState(-1);
  return (
    <div className={"mt-10 md:mt-36 font-garamond"}>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        Our Lovely Moment
      </div>
      <div className={"text-center mt-10 md:mt-16"}>
        <div className={"font-bold text-2xl"}>
          {lang === "en"
            ? `"The highest happiness on earth is the happiness of marriage"`
            : `"Hạnh phúc lớn nhất trên trái đất là hạnh phúc của hôn nhân"`}
        </div>
        <div className={"text-2xl"}>William Lyon Phelps</div>
      </div>

      <div className={"grid grid-cols-3 mt-10 md:mt-16 text-xl md:mx-16"}>
        <div onClick={() => setIndex(0)}>
          <img className={"w-[32rem]"} src={anh1} alt="" />
        </div>
        <div onClick={() => setIndex(1)}>
          <img className={"w-[32rem]"} src={anh2} alt="" />
        </div>
        <div onClick={() => setIndex(2)}>
          <img className={"w-[32rem]"} src={anh3} alt="" />
        </div>
        <div className={"pt-1 md:pt-3"} onClick={() => setIndex(3)}>
          <img
            className={"w-[32rem] h-[14rem] md:h-[32rem] 2xl:h-[40rem]"}
            src={anh4}
            alt=""
          />
        </div>
        <div className={"pt-1 md:pt-3 px-1 md:px-3"}>
          <img
            onClick={() => setIndex(4)}
            className={"w-[32rem] h-[7rem] md:h-[16rem] 2xl:h-[20rem] pb-1"}
            src={anh5}
            alt=""
          />
          <img
            onClick={() => setIndex(5)}
            className={"w-[32rem] h-[7rem] md:h-[16rem] 2xl:h-[20rem]"}
            src={anh6}
            alt=""
          />
        </div>
        <div className={"pt-1 md:pt-3"} onClick={() => setIndex(6)}>
          <img
            className={"w-[32rem] h-[14rem] md:h-[32rem] 2xl:h-[40rem]"}
            src={anh7}
            alt=""
          />
        </div>
      </div>
      <div className={"grid grid-cols-12 md:mx-16 mt-1 md:mt-3"}>
        <div className={"col-span-5"}>
          <div onClick={() => setIndex(7)}>
            <img
              className={"w-full h-[7rem] md:h-[20rem] 2xl:h-[20rem]"}
              src={anh8}
              alt=""
            />
          </div>
          <div className={"pt-1"} onClick={() => setIndex(9)}>
            <img
              className={"w-full h-[7rem] md:h-[20rem] 2xl:h-[20rem]"}
              src={anh10}
              alt=""
            />
          </div>
        </div>
        <div className={"col-span-7 pl-1"}>
          <div onClick={() => setIndex(8)}>
            <img
              className={"w-full h-[10rem] md:h-[26rem] 2xl:h-[26rem]"}
              src={anh9}
              alt=""
            />
          </div>
          <div className={"grid grid-cols-2 pt-1"}>
            <div onClick={() => setIndex(10)}>
              <img
                className={"w-full h-[4rem] md:h-[14rem] 2xl:h-[14rem]"}
                src={anh11}
                alt=""
              />
            </div>
            <div className={"pl-1"} onClick={() => setIndex(11)}>
              <img
                className={"w-full h-[4rem] md:h-[14rem] 2xl:h-[14rem]"}
                src={anh12}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        slides={slides}
        open={index > -1}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};
