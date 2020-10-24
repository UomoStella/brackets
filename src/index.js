module.exports = function check(str, bracketsConfig) {
  var brackets = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {      
      if(str[i] === bracketsConfig[j][1]){
        if(brackets[brackets.length - 1] == bracketsConfig[j][0]) {
          brackets.pop();
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
