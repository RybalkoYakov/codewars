function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  const nextIndex = lights.indexOf(current) + 1;
  return nextIndex % lights.length === 0 ? lights[0] : lights[nextIndex];
}

console.log(updateLight("violet"))