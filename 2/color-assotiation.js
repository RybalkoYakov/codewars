function colourAssociation(array){
  return  array.map(value => {return {[value[0]]: value[1]}})
}