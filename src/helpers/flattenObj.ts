export default function flatten<T>(obj:{
  [key: string]: T[]}): T[] {
  let result:T[] = [];
  Object.keys(obj).forEach((key: string) => {
    result = [...result, ...obj[key]];
  });
  return result;
}
