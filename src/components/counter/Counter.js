import { useState } from "react";
import "./counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const addToCounter = () => {
    setCounter(counter + step);
  };

  const subFromCounter = () => {
    setCounter(counter - step);
  };

  return (
    <div>
      <h3 data-testid="header">COUNTER</h3>
      <h1
        data-testid="counter"
        className={`${counter > 100 ? "green" : ""}${
          counter < -100 ? "red" : ""
        }`}
      >
        {counter}
      </h1>
      <button data-testid="sub-btn" className="btn" onClick={subFromCounter}>
        -
      </button>
      <input
        className="step"
        type="number"
        data-testid="step"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
      <button data-testid="add-btn" className="btn" onClick={addToCounter}>
        +
      </button>
      <div className="info">
        <p>
          The counter shows <span className="green">green</span> above 100 and{" "}
          <span className="red">red</span> below 100
        </p>
      </div>
    </div>
  );
}

export default Counter;
