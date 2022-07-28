import { State } from "../reducer/types";

export function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: State): string {
  const prev = parseFloat(previousOperand!);
  const current = parseFloat(currentOperand!);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = 0;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  return computation.toString();
}
export function formatOperand(
  integerFormatter: Intl.NumberFormat,
  operand?: string | null
) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return integerFormatter.format(+integer);
  return `${integerFormatter.format(+integer)}.${decimal}`;
}
