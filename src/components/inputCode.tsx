import { ChangeEvent, useEffect, useRef, useState } from "react";

export const InputCode = ({ setCode }: { setCode: Function }) => {
  const keyCode = "injects3crets";
  const [password, setPassword] = useState("");
  const timer = useRef<NodeJS.Timeout | null>(null);

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
    if (timer.current) {
      clearTimeout(timer.current as NodeJS.Timeout);
      timer.current = null;
    }
    timer.current = setTimeout(() => {
      setPassword("");
      clearTimeout(timer.current as NodeJS.Timeout);
      timer.current = null;
    }, 5000);
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
