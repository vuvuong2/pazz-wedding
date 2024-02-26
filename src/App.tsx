import React from "react";
import "./index.css";
import ring from "./assets/1.png";
import wedPic from "./assets/2.png";
import { differenceInDays } from "date-fns";
import { OurWedding } from "./components/OurWedding";
import { OurLoveStory } from "./components/OurLoveStory";
import { OurLovelyMoment } from "./components/OurLovelyMoment";
import { RSVP } from "./components/RSVP";

export const WEDDING_DAY = new Date("2024-03-20");
function App() {
  const dateDiff = differenceInDays(WEDDING_DAY, new Date());
  return (
    <>
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
        <div>
          <OurWedding />
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
      </div>
    </>
  );
}

export default App;
