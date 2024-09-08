import { useState } from "react";
import data from "../content/button";
import Button from "./Button";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult((prev) => prev.concat(event.target.id));
  };
  const ac = () => setResult("");
  const del = () => setResult(result.slice(0, -1));
  const cal = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-10">
        <h1 className="text-4xl text-green-800 font-bold">Calculator</h1>
        <div className="bg-green-400 p-4 max-w-96 rounded-md shadow-[0_1px_6px_5px#000]">
          <input
            className="bg-white rounded-md p-4 w-full text-2xl font-semibold text-black text-right tracking-wider shadow-inner shadow-current"
            type="text"
            value={result}
            disabled
          />

          <div className="grid grid-cols-4 gap-2 mt-4">
            {data.map((button) => (
              <Button
                key={button.text}
                text={button.text}
                style={button.style}
                action={
                  button.text === "AC"
                    ? ac
                    : button.text === "DEL"
                    ? del
                    : button.text === "="
                    ? cal
                    : handleClick
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
