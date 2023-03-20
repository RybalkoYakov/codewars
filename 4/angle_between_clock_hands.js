function handAngle (date) {
  const minutes = date.getMinutes()
  const hours = date.getHours() % 12

  const minutesAngle = minutes * (360 / 60)
  const hoursAngle = hours * (360 / 12) + (360 / 60) * (minutes / 60)

  const absolutAngle = Math.abs(minutesAngle - hoursAngle)
  const angleBetween = absolutAngle > 180 ? absolutAngle - 180 : absolutAngle

  return angleBetween * (Math.PI / 180)
}

console.log(handAngle(new Date()))