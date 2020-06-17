// add solution here


function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} played ${instruments[i]}`);
  }
  return array;
}

