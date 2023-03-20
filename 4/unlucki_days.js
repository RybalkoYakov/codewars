function unluckyDays(year){
  let fridays = 0
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      fridays++
    }
  }
  return fridays
}