import icon from "../assets/3.png";
import camera from "../assets/camera.png";
import dish from "../assets/dish.png";
import marriage from "../assets/marriage.png";
export const OurWedding = () => {
  return (
    <div className={"mt-16 md:mt-28"}>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        Our Wedding
      </div>
      <div className={"flex mt-8 md:mt-16 justify-center"}>
        <img className={" w-40 md:w-auto"} src={icon} alt={"icon"} />
      </div>
      <div className={"font-garamond text-center text-2xl md:text-4xl mt-10"}>
        Our Happily Ever After will take place on
      </div>
      <div
        className={
          "font-windsong text-pink-red text-center text-3xl md:text-6xl mt-10"
        }
      >
        March 20, 2024
      </div>
      <div
        className={
          "font-garamond font-bold text-xl md:text-4xl text-center mt-10"
        }
      >
        at Long Vi Wedding Palace - 3A Dao Duy Anh, Dong Da, Ha Noi
      </div>
      <div
        className={
          "px-5 md:px-8 mx-2 md:mx-32 mt-5 md:mt-10 text-center grid grid-cols-2 font-garamond text-xl md:text-2xl"
        }
      >
        <div className={"mt-4"}>
          <div>11.00 AM</div>
          <div className={"flex justify-center my-3"}>
            <img src={camera} alt={"camera"} />
          </div>

          <div>Guest Reception & Photo Time</div>
        </div>
        <div className={"mt-6 md:mt-4"}>
          <div>11.30 AM</div>
          <div className={"flex justify-center my-3"}>
            <img src={marriage} alt="" />
          </div>
          <div>Ceremony & Lunch</div>
        </div>
      </div>
      <div
        className={
          "mt-10 md:mt-20 text-center flex justify-center font-garamond"
        }
      >
        <div
          className={
            "bg-light-pink w-fit px-16 py-4 rounded-full text-2xl text-pink-red"
          }
        >
          RSVP
        </div>
      </div>
      <div
        className={"mt-3 md:mt-5 text-center font-garamond text-xl lg:text-2xl"}
      >
        Absolutely no gift compares to having your wonderful presence! <br></br>
        We really hope you'll be there to witness our happiness and share the
        joy with us!
      </div>
    </div>
  );
};
