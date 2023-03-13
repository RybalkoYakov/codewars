function numberOfPairs(g)
{
  const gloves = {}
  let counter = 0

  for (let i = 0; i < g.length; i++) {
    if (gloves[g[i]]) {
      gloves[g[i]]++
    } else {
      gloves[g[i]] = 1
    }
  }

  for (const glovesKey in gloves) {
    counter += Math.floor(gloves[glovesKey] / 2);
  }

  return counter
}

console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]))