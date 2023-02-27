List = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]

function sentence(List) {
  let out = ''
  List.sort((a, b) => {
    return parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0])
  })
  List.forEach(obj => {
    Object.keys(obj).forEach(value => {
      out += obj[value] + ' '
    })
  })
  return out.trim()
}

console.log(sentence(List))