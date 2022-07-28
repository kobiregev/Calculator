import React from "react";
import { Action, Actions } from "../../reducer/types";

type OperationButtonProps = {
  dispatch: React.Dispatch<Action>;
  operation: string;
};

export const OperationButton: React.FC<OperationButtonProps> = ({
  dispatch,
  operation,
}) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: Actions.CHOOSE_OPERATION, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
};
