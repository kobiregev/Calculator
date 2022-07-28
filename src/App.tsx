import { useReducer } from "react";
import { DigitButton } from "./components/DigitButton/DigitButton";
import { OperationButton } from "./components/OperationButton/OperationButton";
import { Actions } from "./reducer/types";
import { formatOperand } from "./utils";

import reducer from "./reducer/reducer";
import "./App.css";
import { Footer } from "./components/common/Footer";

const integerFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  const handleClear = () => dispatch({ type: Actions.CLEAR, payload: {} });

  const handleEvaluate = () =>
    dispatch({ type: Actions.EVALUATE, payload: {} });

  const handleDeleteDigit = () => {
    dispatch({ type: Actions.DELETE_DIGIT, payload: {} });
  };
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">
            {formatOperand(integerFormatter, currentOperand)}
          </div>
        </div>
        <button className="span-two" onClick={handleClear}>
          AC
        </button>
        <button onClick={handleDeleteDigit}>DEL</button>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two" onClick={handleEvaluate}>
          =
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
