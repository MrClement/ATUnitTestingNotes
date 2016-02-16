var randNum = function(a, b) {
  var num = Math.floor(Math.random()*(b-a)) + a;
  return num;
}

module.exports = randNum;
