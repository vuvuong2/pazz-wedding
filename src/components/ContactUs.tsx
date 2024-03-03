export const ContactUs = ({ lang }: { lang: string }) => {
  return (
    <div>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream mt-32"
        }
      >
        Contact Us
      </div>
      <div className={"mt-16 font-garamond  text-2xl text-center"}>
        {lang === "en"
          ? `If you've got questions, concerns or any lovely messages, feel free to
        shoot us an email at anytime to`
          : `Nếu bạn có bất kỳ câu hỏi, băn khoăn hay những lời chúc đáng yêu muốn gửi tặng đến đôi uyên ương thì hãy gửi cho cô dâu chú rể qua email `}
        <a
          className={"underline decoration-1"}
          href={"mailto:minhvuphuonganh1220@gmail.com"}
        >
          minhvuphuonganh1220@gmail.com
        </a>
        {lang === "vi" && " nhé."}
      </div>
      {lang === "en" && (
        <div className={"mt-10 text-center font-bold text-3xl font-garamond"}>
          See you on Wednesday, 20 March 2024!
        </div>
      )}
    </div>
  );
};
