export const objectToArray = (obj: Record<string, unknown>) => {
  if (obj) {
    return Object.entries(obj);
  } else {
    return [];
  }
};
export const stringToStringArray = (str: string) => {
  return str.split(/\n/g);
};
