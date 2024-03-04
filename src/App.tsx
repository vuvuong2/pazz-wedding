import React from "react";
import "./index.css";
import ring from "./assets/1.png";
import ring2 from "./assets/ring2.png";
import dvdheart from "./assets/divider-heart.png";
import wedPic from "./assets/2.png";
import { differenceInDays } from "date-fns";
import { OurWedding } from "./components/OurWedding";
import { OurLoveStory } from "./components/OurLoveStory";
import { OurLovelyMoment } from "./components/OurLovelyMoment";
import { RSVP } from "./components/RSVP";
import { ConfigProvider, Divider } from "antd";
import { BucketList } from "./components/BucketList";
import { ContactUs } from "./components/ContactUs";
import { MarriageBlessing } from "./components/MarriageBlessing";
import { useInView } from "react-intersection-observer";

export const WEDDING_DAY = new Date("2024-03-20");
function App() {
  const dateDiff = differenceInDays(WEDDING_DAY, new Date());
  const query = new URLSearchParams(window.location.search);
  const langQuery = query.get("lang") || "";
  const lang = langQuery && ["vi", "en"].includes(langQuery) ? langQuery : "en";
  const { ref: refWedding, inView: refWeddingInView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: refLoveStory, inView: refLoveStoryInView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: refPhoto, inView: refPhotoInView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: refRSVP, inView: refRSVPInView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: refMB, inView: refMBInView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            buttonCheckedBg: "#000000",
          },
        },
      }}
    >
      <div id={"home"} className="container py-5 mx-auto">
        <div className="flex justify-center mt-5 md:mt-10">
          <p
            className={
              "text-2xl md:text-6xl pt-2 md:pt-4 px-3 md:px-6 font-windsong font-bold"
            }
          >
            We 're getting married
          </p>
          <div className={"w-10 md:w-auto"}>
            <img src={ring} alt={"ring"} />
          </div>
        </div>
        <div className={"text-center py-3 md:py-6"}>
          <p className={"text-2xl md:text-4xl font-garamond font-light"}>
            Phuong Anh & Minh Vu
          </p>

          {lang === "en" && (
            <div className={"mt-4 font-garamond text-xl"}>
              ♡ {dateDiff >= 0 ? dateDiff : 0} days to go ♡
            </div>
          )}
          {lang === "vi" && (
            <div className={"mt-4 font-garamond text-xl"}>
              ♡ Đếm ngược {dateDiff >= 0 ? dateDiff : 0} ngày ♡
            </div>
          )}
        </div>
      </div>
      <div
        className={"bg-light-pink px-5 md:px-10 py-3 md:py-6 sticky z-50 top-0"}
      >
        {lang === "en" && (
          <div className="flex flex-row text-center font-garamond text-md md:text-xl">
            <div
              className={
                refWeddingInView ? "basis-1/5 text-pink-red" : "basis-1/5"
              }
            >
              <a href={"#wedding"}>Wedding Invitation</a>
            </div>
            <div
              className={
                refLoveStoryInView && !refWeddingInView
                  ? "basis-1/5 text-pink-red"
                  : "basis-1/5"
              }
            >
              <a href={"#loveStory"}>Our Love Story</a>
            </div>
            <div
              className={
                refPhotoInView && !refLoveStoryInView
                  ? "basis-1/5 text-pink-red"
                  : "basis-1/5"
              }
            >
              <a href={"#photo"}>Photo Gallery</a>
            </div>
            <div
              className={
                refRSVPInView && !refPhotoInView
                  ? "basis-1/5 text-pink-red"
                  : "basis-1/5"
              }
            >
              <a href={"#rsvp"}>RSVP</a>
            </div>
            <div
              className={
                refMBInView && !refRSVPInView
                  ? "basis-1/5 text-pink-red"
                  : "basis-1/5"
              }
            >
              <a href={"#bless"}>Marriage Blessings</a>
            </div>
          </div>
        )}
        {lang === "vi" && (
          <div className="flex flex-row text-center font-garamond text-md md:text-xl">
            <div
              className={
                refWeddingInView ? "basis-1/5 text-pink-red" : "basis-1/5"
              }
            >
              <a href={"#wedding"}>Thiệp cưới</a>
            </div>
            <div
              className={
                refLoveStoryInView && !refWeddingInView
                  ? "basis-1/5 text-pink-red"
                  : "basis-1/5"
              }
            >
              <a href={"#loveStory"}>Câu chuyên tình yêu</a>
            </div>
            <div
              className={
                refPhotoInView && !refLoveStoryInView
                  ? "basis-1/5 text-pink-red"
                  : "basis-1/5"
              }
            >
              <a href={"#photo"}>Thư viện ảnh</a>
            </div>
            <div
              className={
                refMBInView && !refPhotoInView
                  ? "basis-1/5 text-pink-red"
                  : "basis-1/5"
              }
            >
              <a href={"#bless"}>Lời chúc</a>
            </div>
            <div className={"basis-1/5"}>
              <a href={"#contact"}>Liên hệ</a>
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center mt-10">
          <img src={wedPic} alt="" />
        </div>
        <div
          id={"wedding"}
          className={
            refWeddingInView
              ? "transition duration-1000 scale-100 mb-10"
              : "transition duration-1000 scale-75 mb-10"
          }
          ref={refWedding}
        >
          <OurWedding lang={lang} />
        </div>
        <div className={"mx-36"}>
          <Divider style={{ borderBlockStart: "1px solid #F4486A" }} />
        </div>

        <div
          id={"loveStory"}
          ref={refLoveStory}
          className={
            refLoveStoryInView
              ? "transition duration-1000 scale-100"
              : "transition duration-1000 scale-75"
          }
        >
          <OurLoveStory lang={lang} />
        </div>
        <div
          id={"photo"}
          ref={refPhoto}
          className={
            refPhotoInView
              ? "transition duration-1000 skew-x-0"
              : "transition duration-1000 skew-x-12"
          }
        >
          <OurLovelyMoment lang={lang} />
        </div>
        {lang === "en" && (
          <div id={"rsvp"} ref={refRSVP}>
            <RSVP />
          </div>
        )}
        {lang === "en" && (
          <div>
            <BucketList />
          </div>
        )}

        <div className={"flex justify-center py-20 mt-10"}>
          <img src={dvdheart} alt={"divider"} />
        </div>
        <div id={"bless"} ref={refMB}>
          <MarriageBlessing lang={lang}></MarriageBlessing>
        </div>
        <div id={"contact"}>
          <ContactUs lang={lang} />
        </div>
      </div>
      <div className={"bg-footer bg-cover text-white  px-32 py-40 mt-16"}>
        <div className={"text-center font-windsong text-6xl"}>
          {lang === "en" ? `Thank You` : `Xin chân thành cảm ơn!`}
        </div>
        {lang === "en" && (
          <div className={"text-center font-garamond text-2xl mt-10"}>
            Your presence means the world to us.
            <br />
            Thank you wholeheartedly for gracing our wedding with your company
            and sharing in our happiness!
          </div>
        )}
        {lang === "vi" && (
          <div className={"text-center font-garamond text-2xl mt-10"}>
            Đám cưới của chúng tôi chắc chắn sẽ kém vui đi rất nhiều nếu thiếu
            đi sự hiện diện của bạn.
            <br />
            Cảm ơn bạn vì đã trở thành một phần quan trọng trong ngày đặc biệt
            của chúng tôi!
          </div>
        )}

        <div className={"mt-12 text-center text-2xl lg:text-5xl font-windsong"}>
          {lang === "en" ? `Happy Wedding!` : `Hạnh phúc trọn vẹn`}
        </div>

        <div className={"flex justify-center mt-24"}>
          <img src={ring2} alt={"ring"} />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
