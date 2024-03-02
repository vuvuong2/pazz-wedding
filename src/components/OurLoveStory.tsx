import p2020 from "../assets/2020.png";
import p2023 from "../assets/2023.png";
import p2024 from "../assets/2024.png";
export const OurLoveStory = () => {
  return (
    <div className={"mt-10 md:mt-36 font-garamond"}>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        Our Love Story
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-heart gap-12 mt-16">
        <div className={"col-span-1"}>
          <div className={"mx-6 py-5"}>
            <img src={p2020} alt={"2020"} />
          </div>
          <div className={"font-windsong text-3xl text-center text-pink-red"}>
            It’s all started...
          </div>
          <div className={"text-center text-xl font-garamond mt-5"}>
            They met at Niteco, but it was Hội Board Game that truly brought
            them together. Soon, their conversations grew more frequent and they
            cherished their moments alone. Heartfelt conversations and dates
            deepened their bond, leading to the start of something beautiful.{" "}
            <br />
            <br />
            On ♡ <strong>December 8, 2020</strong> ♡, their love journey began.
          </div>
        </div>
        <div className={"col-span-1"}>
          <div className={"mx-6 py-5"}>
            <img src={p2023} alt={"2023"} />
          </div>
          <div className={"font-windsong text-3xl text-center text-pink-red"}>
            Love blooms
          </div>
          <div className={"text-center text-xl font-garamond mt-5"}>
            At first, they fought a lot (mostly triggered by Phuong Anh), but
            with time, they learned to embrace differences and became a perfect
            match for each other.
            <br />
            <br />
            On <strong>Phuong Anh’s 25th birthday</strong>, Vu enchanted her
            with a surprise proposal in Hoi An (“It was not surprising” - said
            Phuong Anh).
          </div>
        </div>
        <div className={"col-span-1"}>
          <div className={"mx-6 pt-12 pb-12"}>
            <img src={p2024} alt={"2023"} />
          </div>
          <div className={"font-windsong text-3xl text-center text-pink-red"}>
            Love stays
          </div>
          <div className={"text-center text-xl font-garamond mt-5"}>
            2024 opened a new chapter of our lives as we decided to get married.
            With joy in our hearts, we will become husband and wife on March,
            20, 2024. Whatever the future holds, we will face it together, hand
            in hand.
            <br />
            <br />
            Cheers to our love-filled adventure. Here's to our happily ever
            after.
          </div>
        </div>
      </div>
    </div>
  );
};
