//confirm last word then check for letter.
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
   var n = str.split(" ");
    if( n[n.length - 1] === target){
        return true;
    }
  else if(str.charAt(str.length-1)===target){
    console.log(str.charAt(str.length-1));
    return true;
  }
  else{
      return false;
  }
  
}