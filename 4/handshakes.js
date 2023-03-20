function getParticipants(handshakes){
  if (!handshakes) return 0
  return Math.ceil((Math.sqrt(8*handshakes + 1) + 1) / 2)
}

console.log(getParticipants(0))
console.log(getParticipants(1))
console.log(getParticipants(3))
console.log(getParticipants(6))
console.log(getParticipants(7))