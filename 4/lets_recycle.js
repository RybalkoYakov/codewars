function recycle(array) {
  const bins = [[], [], [], []]
  const materials = ['paper', 'glass', 'organic', 'plastic']
  function checkMaterial(material, array, index) {
    if (!material) return
    bins[materials.indexOf(material)].push(array[index].type)
  }
  for (let i = 0; i < array.length; i++) {
    checkMaterial(array[i].material, array, i)
    checkMaterial(array[i].secondMaterial, array, i)
  }
  return bins
}

input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

console.log(recycle(input))