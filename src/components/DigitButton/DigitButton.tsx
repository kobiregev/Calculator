import React from "react";
import { Action, Actions } from "../../reducer/types";

type DigitButtonProps = {
  dispatch: React.Dispatch<Action>;
  digit: string;
};

export const DigitButton: React.FC<DigitButtonProps> = ({
  dispatch,
  digit,
}) => {
  return (
    <button
      onClick={() => dispatch({ type: Actions.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};
