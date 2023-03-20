function find(object, path) {
  const rel = path.split('.')
  for (let i = 0; i < rel.length; i++) {
    if (!object.hasOwnProperty(rel[i])) return undefined
    object = object[`${rel[i]}`]
  }
  return object
}

console.log(find({
  user: {
    name: {
      first: 'John',
      last: 'Snow'
    }
  }
}, 'user.name.first'))