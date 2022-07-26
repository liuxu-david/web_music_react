export function getCounter(counter) {
  if (counter < 10000) return counter;
  else if (Math.floor(counter / 10000) < 10000) {
    return Math.floor(counter / 10000) / 10 + "万";
  } else {
    return Math.floor(counter / 10000000) / 10 + "亿";
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`;
}
