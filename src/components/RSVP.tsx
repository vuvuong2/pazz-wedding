import { useState } from "react";

const BRIDE_TYPE = 0;
const GROOM_TYPE = 1;
export const RSVP = () => {
  const guestTypes = useState(BRIDE_TYPE);
  return (
    <div className={"mt-10 md:mt-36 font-garamond"}>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream"
        }
      >
        RSVP
      </div>

      <div className={"text-center mt-10 md:mt-16 text-xl"}>
        Please respond by 10 March 2024 to confirm your attendance at our event,
        allowing us to better arrange seating for you.
      </div>
    </div>
  );
};
