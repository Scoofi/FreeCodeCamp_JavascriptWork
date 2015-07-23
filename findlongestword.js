function findLongestWord(str) {
  var splitstr = str.split(" ");
  
  var long = splitstr[0];
  var short= splitstr[1];
  
  for(var i=1;i<splitstr.length;i++){
    short = splitstr[i];
    if(short.length>long.length){
      long = short;
    }
 
  }
  
  return long.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');