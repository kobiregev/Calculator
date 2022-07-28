export enum Actions {
    ADD_DIGIT = "add-digit",
    DELETE_DIGIT = "delete-digit",
    CHOOSE_OPERATION = "choose-operation",
    CLEAR = "clear",
    EVALUATE = "evaluate",
  }
  
  export type State = {
    currentOperand?: string | null;
    previousOperand?: string | null;
    operation?: string | null;
    overwrite?: boolean;
  };
  export type Payload = {
    digit?: string;
    operation?: string;
  };
  
  export type Action = {
    type: Actions;
    payload: Payload;
  };
  