import p2020 from "../assets/2020.png";
import p2023 from "../assets/2023.png";
import p2024 from "../assets/2024.png";
export const OurLoveStory = ({ lang }: { lang?: string }) => {
  return (
    <div className={"mt-28 md:mt-36 font-garamond"}>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        Our Love Story
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-10 bg-center bg-cover bg-heart gap-12  md:mt-5  md:py-16">
        <div className={"col-span-1"}>
          <div className={"mx-6 py-5"}>
            <img src={p2020} alt={"2020"} />
          </div>
          <div className={"font-windsong text-3xl text-center text-pink-red"}>
            {lang === "en" ? `It all started...` : `Tình yêu bắt đầu`}
          </div>
          {lang === "en" && (
            <div className={"text-center text-xl font-garamond mt-5"}>
              They met at Niteco, but it was Hội Board Game that truly brought
              them together. Soon, their conversations grew more frequent and
              they cherished their moments alone. Heartfelt conversations and
              dates deepened their bond, leading to the start of something
              beautiful. <br />
              <br />
              On ♡ <strong>December 8, 2020</strong> ♡, their love journey
              began.
            </div>
          )}
          {lang === "vi" && (
            <div className={"text-center text-xl font-garamond mt-5"}>
              Họ gặp nhau lần đầu tại Niteco - nơi cả 2 cùng làm việc. Dần dần,
              những buổi đi chơi chung với Hội Board Game đã kéo họ lại gần nhau
              hơn. Những cuộc hội thoại chat chit thâu đêm, những buổi đi chơi
              chỉ có 2 người đã thay đổi trạng thái mối quan hệ.
              <br />
              <br />
              Vào <strong>♡ ngày 8 tháng 12 năm 2020 ♡</strong>, hành trình tình
              yêu của họ bắt đầu.
            </div>
          )}
        </div>
        <div className={"col-span-1"}>
          <div className={"mx-6 py-5"}>
            <img src={p2023} alt={"2023"} />
          </div>
          <div className={"font-windsong text-3xl text-center text-pink-red"}>
            {lang === "en" ? `Love blooms` : `Tình yêu nở hoa`}
          </div>
          {lang === "en" && (
            <div className={"text-center text-xl font-garamond mt-5"}>
              At first, they fought a lot (mostly triggered by Phuong Anh), but
              with time, they learned to embrace differences and became a
              perfect match for each other.
              <br />
              <br />
              On <strong>Phuong Anh’s 25th birthday</strong>, Vu enchanted her
              with a surprise proposal in Hoi An (“It was not surprising” - said
              Phuong Anh).
            </div>
          )}
          {lang === "vi" && (
            <div className={"text-center text-xl font-garamond mt-5"}>
              Cũng như bao cặp đôi khác, khoảng thời gian mới yêu là khoảng thời
              gian giận dỗi (chủ yếu là Phương Anh dỗi & Vũ đi theo dỗ dành).
              Nhưng theo thời gian, họ học được cách chấp nhận được sự khác biệt
              của nhau và trở thành một mảnh ghép hoàn hảo cho đối phương.
              <br />
              <br />
              Vào <strong>sinh nhật lần thứ 25 của Phương Anh</strong>, Vũ đã
              khiến cô bất ngờ với lời cầu hôn lãng mạn ở Hội An.
            </div>
          )}
        </div>
        <div className={"col-span-1"}>
          <div className={"mx-6 py-5"}>
            <img src={p2024} alt={"2023"} />
          </div>
          <div className={"font-windsong text-3xl text-center text-pink-red"}>
            {lang === "en" ? `Love stays` : `Tình yêu kết trái`}
          </div>
          {lang === "en" && (
            <div className={"text-center text-xl font-garamond mt-5"}>
              2024 opened a new chapter of our lives as we decided to get
              married. With joy in our hearts, we will become husband and wife
              on March, 20, 2024. Whatever the future holds, we will face it
              together, hand in hand.
              <br />
              <br />
              Cheers to our love-filled adventure. Here's to our happily ever
              after.
            </div>
          )}
          {lang === "vi" && (
            <div className={"text-center text-xl font-garamond mt-5"}>
              Năm 2024 đánh dấu một hành trình mới trong cuộc đời của cả 2 chúng
              mình với quyết định về chung một nhà vào{" "}
              <strong>ngày 20 tháng 3 năm 2024</strong>. Dù tương lai sau này có
              ra sao, chúng mình sẽ vẫn luôn đối mặt cùng nhau.
              <br /> <br />
              Chúc chặng đường sắp tới của chúng mình sẽ luôn tràn ngập tình yêu
              và hạnh phúc.
              <br /> <br />
              <span className={"italic"}>Happy Wedding!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
