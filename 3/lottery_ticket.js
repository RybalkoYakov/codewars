function bingo(ticket, win){
  let miniWin = 0;
  ticket.forEach(value => {
    value[0].split('').forEach(char => {
      if (char === String.fromCharCode(value[1])) {
        miniWin++;
      }
    })
  })
  return miniWin >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo( [['WSW',87], ['COL',81], ['KCQUR',71], ['NQ',74]] , 2))