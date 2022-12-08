import { useEffect, useRef, useState } from "react";
import { InputCode } from "../inputCode";
import { ShowName } from "../showNames";
import axios from "axios";
import "./index.css";

export const Body = () => {
  const [view, setView] = useState(false);
  const [timeFlag, setTimeflag] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (view && !timeFlag) {
      axios("https://api.github.com/repos/elixir-lang/elixir/issues")
        .then((response) => {
          let list: any[] = [];
          response.data.map((data: any, index: number) =>
            list.push(data.author_association)
          );
          list = list.splice(0, 5);
          setData(list);
        })
        .catch((error) => {})
        .finally(() => {});

      setTimeflag(true);
      timer.current = setTimeout(() => {
        setView(false);
      }, 15000);
    } else if (!view) {
      setTimeflag(false);
      setData([]);
      return () => clearTimeout(timer.current as NodeJS.Timeout);
    }
  }, [timeFlag, view]);
  return (
    <div id="body" className="body container">
      <InputCode setCode={setView} />
      {view && data.map((item, key) => <ShowName name={item} key={key} />)}
    </div>
  );
};
