import React from "react";
import "./index.css";
import ring from "./assets/1.png";
import wedPic from "./assets/2.png";
import { differenceInDays } from "date-fns";
import { OurWedding } from "./components/OurWedding";
import { OurLoveStory } from "./components/OurLoveStory";
import { OurLovelyMoment } from "./components/OurLovelyMoment";
import { RSVP } from "./components/RSVP";
import { ConfigProvider, Divider } from "antd";
import { BucketList } from "./components/BucketList";
import { ContactUs } from "./components/ContactUs";

export const WEDDING_DAY = new Date("2024-03-20");
function App() {
  const dateDiff = differenceInDays(WEDDING_DAY, new Date());
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
      <div className="container py-5 mx-auto">
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
          <div className={"mt-3 font-garamond"}>
            ♡ {dateDiff >= 0 ? dateDiff : 0} days to go ♡
          </div>
        </div>
      </div>
      <div className={"bg-light-pink px-5 md:px-10 py-3 md:py-6"}>
        <div className="flex flex-row text-center font-garamond text-md md:text-xl">
          <div className={"basis-1/6"}>Home</div>
          <div className={"basis-1/6"}>Wedding Invitation</div>
          <div className={"basis-1/6"}>Our Story</div>
          <div className={"basis-1/6"}>RSVP</div>
          <div className={"basis-1/6"}>Bucket List</div>
          <div className={"basis-1/6"}>Contact Us</div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center mt-10">
          <img src={wedPic} alt="" />
        </div>
        <div className={"mb-10"}>
          <OurWedding />
        </div>
        <div className={"mx-36"}>
          <Divider style={{ borderBlockStart: "1px solid #F4486A" }} />
        </div>

        <div>
          <OurLoveStory />
        </div>
        <div>
          <OurLovelyMoment />
        </div>
        <div>
          <RSVP />
        </div>
        <div>
          <BucketList />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
      <div className={"bg-footer bg-cover text-white  px-32 py-40 mt-16"}>
        <div className={"text-center font-windsong text-6xl"}>Thank You</div>
        <div className={"text-center font-garamond text-2xl mt-10"}>
          Your presence means the world to us.
          <br />
          Thank you wholeheartedly for gracing our wedding with your company and
          sharing in our happiness!
        </div>
        <div className={"text-center font-windsong text-3xl mt-10"}>
          Spreading the word that we're soon to be married!
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
