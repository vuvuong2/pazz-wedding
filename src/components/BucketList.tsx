import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import app from "../firebase.config";
import { doc, getFirestore, setDoc } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";

export const BucketList = () => {
  const [bucket, setBucket] = useState("");
  const db = getFirestore(app);
  const submit = async () => {
    const id = uuidv4();
    await setDoc(doc(db, "buckets", id), {
      bucket,
    });
  };
  return (
    <div>
      <div
        className={
          "text-pink-red text-xl md:text-5xl text-center font-lovelydream mt-32"
        }
      >
        Newlywed Bucket List
      </div>
      <div className={"mt-16 font-garamond font-bold text-2xl text-center"}>
        Any ideas for our next adventure post-wedding? (´｡• ◡ •｡`) ♡ˎˊ˗ We're
        all ears!
      </div>
      <div className={"mt-8 front-garamond text-xl text-center"}>
        We'd love to hear your suggestions on what we should do together to
        sprinkle some extra romance into our newlywed journey.
      </div>
      <div className={"mt-8 mx-24 text-center"}>
        <TextArea
          size={"large"}
          onChange={(e) => setBucket(e.target.value)}
        ></TextArea>
      </div>
      <div className={"flex justify-center mt-10"}>
        <button
          className={
            "bg-light-pink px-16 py-4 rounded-full text-2xl text-pink-red"
          }
          onClick={submit}
        >
          SEND US NOW
        </button>
      </div>
    </div>
  );
};
