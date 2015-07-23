//N! a number.
function factorialize(num) {
var counter=1;
  for(var i=1;i<=num;i++){
    console.log(counter);
    counter = counter *i;
  }
  num = counter;
  return num;
}

factorialize(5);