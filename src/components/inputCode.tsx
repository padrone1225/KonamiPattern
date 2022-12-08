import { ChangeEvent, useEffect, useRef, useState } from "react";

export const InputCode = ({ setCode }: { setCode: Function }) => {
  const keyCode = "injects3crets";
  const [password, setPassword] = useState("");
  const [countTime, setCountTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  // const [timeFlag, setTimeflag] = useState(false);
  // let timer = useRef<NodeJS.Timer>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleKeydown = ({ key }: { key: string }) => {
    if (key === "Enter") {
      setPassword("");
      setCode(keyCode === password);
      return;
    }
    if (key === "Escape") {
      setPassword("");
      return;
    }
  };
  useEffect(() => {
    console.log("IN", intervalId);
    // if (!intervalId) {
    //   const id = setInterval(() => setCountTime(countTime + 1), 1000);
    //   setIntervalId(id);
    // } else {
    //   clearInterval(intervalId);
    //   setIntervalId(undefined);
    //   setPassword("");
    // }
    // if (timeFlag) {
    //   setCountTime(0);
    //   clearTimeout(intervalId);
    //   setTimeflag(false);
    // }
    // console.log("flag", timeFlag);
    // console.log("id", intervalId);
    // if (!timeFlag) {
    //   let tiemww = setTimeout(() => {
    //     console.log("timeout");
    //     setPassword("");
    //   }, 3000);
    //   console.log(tiemww);
    //   //   let tiemww = setInterval(() => {
    //   //     console.log("%%%%");
    //   //     setTimeflag(true);
    //   //     setCountTime(countTime + 1);
    //   //     if (countTime === 3) {
    //   //       setPassword("");
    //   //       setCountTime(0);
    //   //     }
    //   //   }, 1000);
    //   setIntervalId(tiemww);
    //   //   return () => clearInterval(tiemww);
    // }
  }, [password]);
  return (
    <input
      type="text"
      className="codeinput"
      onKeyDown={(e) => handleKeydown(e)}
      onChange={handleChange}
      value={password}
    />
  );
};
