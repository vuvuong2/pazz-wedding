import video from "../assets/video.png";
import videovi from "../assets/video-vi.png";
export const MarriageBlessing = ({ lang }: { lang?: string }) => {
  return (
    <div className={"mt-10 md:mt-36 font-garamond"}>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        Wedding Wishes
      </div>
      <div className={"mt-8 lg:mt-24 text-center text-xl mx-10"}>
        {lang === "en"
          ? `Thank you for all of your warmhearted words.`
          : `Xin chân thành cảm ơn những lời chúc từ tận đáy lòng của các bạn. `}
      </div>

      <div className={"text-center text-xl mx-10"}>
        {lang === "en"
          ? `Let's watch all the videos
        recorded by the dear ones of the groom and bride.`
          : `Hãy cùng xem những lời chúc được những người thân yêu của cô dâu và chú rể ghi lại nhé.`}
      </div>
      <div
        className={
          "flex justify-center mt-2 lg:mt-10 cursor-pointer px-10 py-5"
        }
        onClick={() => {
          window.open(
            "https://www.youtube.com/playlist?list=PLBDuGepBaneApRRMP69x6mh5fCB1osYxk",
            "_blank",
          );
        }}
      >
        {lang === "en" ? (
          <img src={video} alt="" />
        ) : (
          <img src={videovi} alt="" />
        )}
      </div>
    </div>
  );
};
