import video from "../assets/video.png";
export const MarriageBlessing = ({ lang }: { lang?: string }) => {
  return (
    <div className={"mt-10 md:mt-36 font-garamond"}>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        Marriage Blessings
      </div>
      <div className={"mt-16 lg:mt-28 text-center text-xl"}>
        {lang === "en"
          ? `Thank you for all of your warmhearted words. let's watch all the videos
        recorded by the dear ones of the groom and bride.`
          : `Xin chân thành cảm ơn những lời chúc từ tận đáy lòng của các bạn. Hãy cùng xem những lời chúc được những người thân yêu của cô dâu và chú rể ghi lại nhé.`}
      </div>
      <div
        className={"flex justify-center mt-10 cursor-pointer px-10 py-5"}
        onClick={() => {
          window.open(
            "https://www.youtube.com/playlist?list=PLBDuGepBaneApRRMP69x6mh5fCB1osYxk",
            "_blank",
          );
        }}
      >
        <img src={video} alt="" />
      </div>
    </div>
  );
};
