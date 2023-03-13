function explode(s) {
  s = s.split('').map(value => {
    let explodeSingle = ''
    for (let i = 0; i < parseInt(value); i++) {
      explodeSingle += value
    }
    return explodeSingle
  })
  return s.join('')
}

console.log(explode('123456789'))