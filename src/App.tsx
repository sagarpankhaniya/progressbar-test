import { useCallback, useState } from "react";

import "./App.css";
import Button from "./ui/button/button";
import Input from "./ui/input/input";
import Progressbar from "./ui/progressbar/progressbar";

function App() {
  const [progress, setProgress] = useState<number>(0);
  const [isProgressing, setIsProgressing] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>("5");

  const startProgress = useCallback(() => {
    setIsProgressing(true)
    let width = 1;
    return setInterval(() => {
      if (width <= 100) {
        setProgress(width);
        width++;
      }
      setIsProgressing(false)
    }, 10);
  },[])

  return (
    <div className="container">
      <div className="controllers">
        <Input
          type="number"
          min={1}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isProgressing}
        />
        <Button className="form-button" onClick={startProgress} label="Start" disabled={isProgressing} />
      </div>
      <Progressbar progress={progress} />
    </div>
  );
}

export default App;
