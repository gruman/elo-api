const lines = require('../constants/lines')

function getElo(winElo, loseElo, length = 1) {
  let d = winElo - loseElo;
  let elo = Math.ceil((4 * Math.sqrt(length)) / (1 + Math.pow(10, d * Math.sqrt(length / 2000))))

  let d2 = loseElo - winElo;
  let elo2 = Math.ceil((4 * Math.sqrt(length)) / (1 + Math.pow(10, -d2 * Math.sqrt(length / 2000))))
  console.log(elo, -elo2)
  return {
    winNewElo: winElo + elo,
    loseNewElo: loseElo - elo2
  }
}

exports.getElo = (req, res, next) => {
  const elo0 = parseInt(req.params.elo0);
  const elo1 = parseInt(req.params.elo1);
  let length = 1;
  if (req.params.length) { length = req.params.length }
  
  const elos = getElo(elo0, elo1, length);
  res.send(elos)
};