import icon from "../assets/3.png";
import camera from "../assets/camera.png";
import dish from "../assets/dish.png";
import marriage from "../assets/marriage.png";
export const OurWedding = ({ lang }: { lang?: string }) => {
  return (
    <div className={"mt-16 md:mt-28 mx-5 lg:mx-20"}>
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
      <div
        className={
          "font-garamond font-bold text-center text-xl md:text-4xl mt-10"
        }
      >
        {lang === "en"
          ? `Our Happily Ever After will take place on`
          : `Trân trọng kính mời quý khách
tới dự bữa tiệc thân mật mừng đám cưới cùng gia đình chúng tôi`}
      </div>
      <div
        className={
          "font-windsong text-pink-red text-center text-3xl md:text-6xl mt-10"
        }
      >
        {lang === "en" ? `March 20, 2024` : `Thứ 4, ngày 20 tháng 3 năm 2024`}
      </div>
      <div
        className={
          "font-garamond font-bold text-xl md:text-4xl text-center mt-10"
        }
      >
        {lang === "en"
          ? `at Long Vi Wedding Palace - 2nd Floor`
          : `tại Long Vĩ Palace - Sảnh Crystal - Tầng 2`}
      </div>
      <div className={"font-garamond text-xl md:text-4xl text-center mt-1"}>
        {lang === "en"
          ? `3A Dao Duy Anh, Dong Da, Ha Noi`
          : `3A Đào Duy Anh - Đống Đa - Hà Nội`}
      </div>
      <div
        className={
          "px-5 md:px-8 mx-2 md:mx-32 mt-5 md:mt-10 text-center grid grid-cols-2 font-garamond text-xl md:text-2xl"
        }
      >
        <div className={"mt-6 md:mt-4"}>
          <div>11.00 AM</div>
          <div className={"flex justify-center my-3"}>
            <img src={camera} alt={"camera"} />
          </div>

          <div>{lang === "en" ? `Guest Reception &` : "Đón khách &"}</div>
          <div>{lang === "en" ? `Photo Time` : "chụp ảnh"}</div>
        </div>
        <div className={"mt-6 md:mt-4"}>
          <div>11.30 AM</div>
          <div className={"flex justify-center my-3"}>
            <img src={marriage} alt="" />
          </div>
          <div>{lang === "en" ? `Ceremony &` : `Nghi lễ &`}</div>
          <div>{lang === "en" ? `Lunch` : `khai tiệc`}</div>
        </div>
      </div>
      {lang === "en" && (
        <div
          className={
            "mt-10 md:mt-20 text-center flex justify-center font-garamond"
          }
        >
          <div
            className={
              "bg-light-pink font-bold w-fit px-16 py-4 rounded-full text-2xl text-pink-red cursor-pointer"
            }
          >
            <a href={"#rsvp"}>RSVP</a>
          </div>
        </div>
      )}

      {lang === "en" && (
        <div className={"mt-3 md:mt-5 text-center font-garamond text-xl"}>
          Absolutely no gift compares to having your wonderful presence!{" "}
          <br></br>
          We really hope you'll be there to witness our happiness and share the
          joy with us!
        </div>
      )}
      {lang === "vi" && (
        <div className={"font-garamond mt-10"}>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-3"}>
            <div className={"col-span-1 text-center"}>
              <div className={"font-bold text-xl lg:text-2xl mt-2"}>
                Nhà Trai
              </div>
              <div className={"font-bold text-2xl lg:text-3xl mt-2"}>
                Ông VƯƠNG DƯƠNG MINH
              </div>
              <div className={"font-bold text-2xl lg:text-3xl"}>
                Bà NGUYỄN QUẾ TRANG
              </div>
              <div className={"mt-4 text-xl lg:text-2xl font-medium"}>
                <div>Lễ Thành Hôn được tổ chức vào lúc</div>
                <div className={"text-pink-red"}>
                  9h05 - Ngày 20 tháng 3 năm 2024
                </div>
                <div>Tại Tư gia nhà trai</div>
                <div>Số 30, Quang Trung, Hoàn Kiếm, Hà Nội</div>
              </div>
            </div>
            <div className={"col-span-1 text-center"}>
              <div className={"font-bold text-xl lg:text-2xl mt-2"}>
                Nhà Gái
              </div>
              <div className={"font-bold text-2xl lg:text-3xl mt-2"}>
                Ông NGUYỄN THÀNH LONG
              </div>
              <div className={"font-bold text-2xl lg:text-3xll"}>
                Bà ĐỖ THU HƯỜNG
              </div>
              <div className={"mt-4 text-xl lg:text-2xl font-medium"}>
                <div>Lễ Vu Quy được tổ chức vào lúc</div>
                <div className={"text-pink-red"}>
                  8h00 - Ngày 20 tháng 3 năm 2024
                </div>
                <div>Tại Tư gia nhà gái</div>
                <div>
                  Số 20, ngách 176/10, ngõ 176, Lê Trọng Tấn, Thanh Xuân, Hà Nội
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {lang === "vi" && (
        <div
          className={
            "text-center mt-10 md:mt-16 mb-20 text-xl lg:text-2xl font-garamond"
          }
        >
          Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi.
          Rất hân hạnh được đón tiếp!
        </div>
      )}
    </div>
  );
};
