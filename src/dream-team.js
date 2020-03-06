module.exports =  function createDreamTeam(arr){
  if (arr == null || arr == undefined) return false;
  let arrLetters = [];
  for(let i = 0; i<arr.length; i++){
    if(typeof(arr[i]) === 'string') {
      let newLetter = arr[i].replace(/[ ]/g, '').split('').shift();
      arrLetters.push(newLetter.toUpperCase())
    }
  }
  return (arrLetters.length !== 0) ? arrLetters.sort().join('') : false
};