// add solution here


function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts (array) {
  let i = 0;
  while (i < array.length) {
   array[i] = array[i] + '!!!';
   i ++;
   }
   return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  number ++;
  do {
    array.push('I love the Beatles!');
  } while (number < 15);
  return array;
}
  