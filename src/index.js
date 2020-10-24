module.exports = function check(str, bracketsConfig) {
  var brackets = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {      
      if(str[i] === bracketsConfig[j][1]){
        if(bracketsFirst[brackets.length - 1] == bracketsConfig[j][0]) {
          bracketsFirst.pop();
          break;
        } else if (bracketsConfig[j][1] !== bracketsConfig[j][0]) {
          return false;
        }
      }
      if(str[i] === bracketsConfig[j][0]) {
        brackets.push(str[i]);
        break;
      }
    }
  }
  return brackets.length == 0;
}
