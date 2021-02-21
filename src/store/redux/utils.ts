function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}

export function prevCalcPlus(item: string, prev: string) {
  if (isNumeric(item)) {
    return eval(prev + item);
  }
  return eval(prev);
}

export function prevCalcMinus(item: string, prev: string) {
  if (isNumeric(item)) {
    return eval(prev.substring(0, prev.length - 2));
  }
  return eval(prev.substring(0, prev.length - 1));
}

export function mainSum(calcOperation: string) {
  return eval(calcOperation).toString();
}
