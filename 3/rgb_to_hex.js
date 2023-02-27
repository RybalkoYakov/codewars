function rgb(r, g, b){
  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;
  const red = r.toString(16).length > 1 ? r.toString(16) : `0${r.toString(16)}`;
  const green = g.toString(16).length > 1 ? g.toString(16) : `0${g.toString(16)}`;
  const blue = b.toString(16).length > 1 ? b.toString(16) : `0${b.toString(16)}`;
  return `${red}${green}${blue}`;
}

console.log(rgb(0, 0, -20)) // returns 9400D3