const add = (a,b) => {
  return a + b
}

const isPalindrome = (word) => {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr; 

}



module.exports = {
  add,
  isPalindrome
}