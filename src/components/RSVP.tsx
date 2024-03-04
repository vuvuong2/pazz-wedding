import { useState } from "react";
import bride from "../assets/bride.png";
import groom from "../assets/groom.png";
import {
  Input,
  notification,
  Radio,
  RadioChangeEvent,
  Select,
  Spin,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import divider from "../assets/divider.png";
import app from "../firebase.config";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";

const BRIDE_TYPE: number = 0;
const GROOM_TYPE: number = 1;

export const RSVP = () => {
  const [api, contextHolder] = notification.useNotification();
  const [guestTypes, setGuestTypes] = useState(BRIDE_TYPE);
  const [seats, setSeats] = useState(1);
  const [name, setName] = useState("");
  const [isJoining, setIsJoining] = useState(true);
  const [songRequest, setSongRequest] = useState("");
  const [wish, setWish] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);

  const submit = async () => {
    if (!name) {
      setError("Name is required");
      return;
    }
    const id = uuidv4();
    try {
      setLoading(true);
      await setDoc(doc(db, "rsvp", id), {
        guestTypes,
        name,
        seats: isJoining ? seats : 0,
        isJoining,
        songRequest,
        wish,
      });
      setLoading(false);
      api["success"]({
        message: "Thank you for your RSVP!",
        description: "We're looking forward to seeing you at our wedding",
      });
    } catch (e) {
      api["error"]({
        message: "Something went wrong",
        description: "Please try again",
      });
      setLoading(false);
    }
  };

  const onChange = (e: RadioChangeEvent) => {
    setIsJoining(e.target.value);
  };
  return (
    <div className={"mt-24 md:mt-36 font-garamond"}>
      {contextHolder}
      <Spin spinning={loading} fullscreen />
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        RSVP
      </div>

      <div className={"text-center mt-10 md:mt-16 text-xl mx-10"}>
        Please respond by 10 March 2024 to confirm your attendance at our event,
        allowing us to better arrange seating for you.
      </div>
      <div className={"grid grid-cols-2 mx-10 md:mx-24 lg:mx-28 "}>
        <div
          className="col-span-1 px-2 md:px-10 lg:px-12 py-4 cursor-pointer"
          onClick={() => setGuestTypes(BRIDE_TYPE)}
        >
          <div
            className={
              "border border-black border-b rounded-2xl px-2 py-4" +
              (guestTypes === BRIDE_TYPE ? " bg-light-pink" : "")
            }
          >
            <div className={"grid grid-cols-2 text-center"}>
              <div className={"col-span-1 flex justify-center"}>
                <img src={bride} alt="" />
              </div>
              <div className={"flex items-center text-xl lg:text-2xl"}>
                Bride's Guest
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 px-2 md:px-10 lg:px-12 py-4"
          onClick={() => setGuestTypes(GROOM_TYPE)}
        >
          <div
            className={
              `border border-black border-b rounded-2xl px-2 py-4 ` +
              (guestTypes === GROOM_TYPE ? "bg-light-pink" : "")
            }
          >
            <div className={"grid grid-cols-2 text-center"}>
              <div className={"col-span-1 flex justify-center"}>
                <img src={groom} alt="" />
              </div>
              <div className={"flex items-center text-xl lg:text-2xl"}>
                Groom's Guest
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-5 md:mt-10 mx-6 md:mx-32"}>
        <div className={"lg:flex lg:flex-row"}>
          <div className={"lg:basis-1/5 lg:pl-8 font-bold text-xl"}>
            <span>Your Name</span>

            {error && <div className={"text-red-700 text-sm"}>{error}</div>}
          </div>
          <div className={"lg:basis-4/5"}>
            <Input
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Input>
          </div>
        </div>
        <div className={"lg:flex lg:flex-row mt-5"}>
          <div className={"lg:basis-3/5 lg:pl-8 font-bold text-xl"}>
            Will you be joining us at our wedding? ᵔ ᵕ ᵔ
          </div>
          <div className={"lg:basis-2/5"}>
            <Radio.Group onChange={onChange} value={isJoining}>
              <div>
                <Radio value={true} className={"text-lg font-garamond"}>
                  Delightfully accept
                </Radio>
              </div>
              <div>
                <Radio value={false} className={"text-lg font-garamond"}>
                  Regretfully decline
                </Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
        {isJoining && (
          <div className={"lg:flex lg:flex-row mt-5"}>
            <div className={"lg:basis-1/2 lg:pl-8 font-bold text-xl"}>
              Number of seat(s) reserved
            </div>
            <div className={"lg:basis-1/2"}>
              <Select
                style={{ width: "100%" }}
                defaultValue={seats}
                onChange={(e) => {
                  setSeats(e);
                }}
                options={[
                  {
                    value: 1,
                    label: "1 seat(s) reserved",
                  },
                  {
                    value: 2,
                    label: "2 seat(s) reserved",
                  },
                  {
                    value: 3,
                    label: "3 seat(s) reserved",
                  },
                  {
                    value: 4,
                    label: "4 seat(s) reserved",
                  },
                ]}
              ></Select>
            </div>
          </div>
        )}
        <div className={"lg:flex lg:flex-row mt-5"}>
          <div className={"lg:basis-1/2 lg:pl-8 font-bold text-lg"}>
            <div className={"font-bold text-xl"}>Song request? ♫⋆｡♪ ₊˚♬ ﾟ.</div>
            <div className={"font-light text-md"}>
              Any songs you would like to appear in our wedding. Please let us
              know so that we can play it.
            </div>
          </div>
          <div className={"lg:basis-1/2"}>
            <TextArea
              onChange={(e) => setSongRequest(e.target.value)}
            ></TextArea>
          </div>
        </div>
        <div className={"lg:pl-8 mt-5"}>
          <div className={"font-bold text-xl mb-5"}>
            Any love words/ messages to us? ⸜(｡˃ ᵕ ˂ )⸝♡
          </div>

          <TextArea
            onChange={(e) => setWish(e.target.value)}
            size={"large"}
          ></TextArea>
        </div>
        <div className={"flex justify-center mt-10"}>
          <button
            className={
              "bg-light-pink px-16 py-4 rounded-full font-bold text-2xl text-pink-red"
            }
            onClick={submit}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className={"flex justify-center mt-10"}>
        <img src={divider} alt={"divider"} />
      </div>
    </div>
  );
};
