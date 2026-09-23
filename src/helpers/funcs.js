import { data } from '../data/data';

export function getRandomNumber() {
  const max = data.length;
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

export function getRandomWord() {
  //console.log(sortData(data));
  return data[getRandomNumber()];
}

function sortData(arr) {
  const sorted = arr.sort((a, b) => a.localeCompare(b));
  return sorted;
}
