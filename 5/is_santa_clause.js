function isSantaClausable(obj) {
  const santaAttr = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']
  return  obj.hasOwnProperty(santaAttr[0] && santaAttr[1] && santaAttr[2])
}

var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

console.log(isSantaClausable(santa))