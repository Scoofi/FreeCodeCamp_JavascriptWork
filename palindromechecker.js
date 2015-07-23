//Check for palindromes
function palindrome(str) {
 
  str=  str.replace(/\s/g, '').toLowerCase();
  str= str.replace(/\./g,'');
  str= str.replace(/\,/g,'');
  var strReverse = str.split('').reverse().join('');
  if(strReverse===str){
    return true;
  }
  else{
    console.log(strReverse);
    return false;
    
  }
}



palindrome("A man, a plan, a canal. Panama");