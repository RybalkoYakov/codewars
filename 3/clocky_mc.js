const whatTimeIsIt = function(angle) {
  const hours = Math.floor(angle / 30) === 0 ? 12 : Math.floor(angle / 30) < 10 ? `0${Math.floor(angle / 30) === 0 ? 12 : Math.floor(angle / 30)}` : Math.floor(angle / 30) === 0 ? 12 : Math.floor(angle / 30);
  const minutes = Math.floor((angle % 30) * 60 / 30) < 10 ? `0${Math.floor((angle % 30) * 60 / 30)}` : Math.floor((angle % 30) * 60 / 30);
  return `${hours}:${minutes}`;
}

console.log(whatTimeIsIt(256))