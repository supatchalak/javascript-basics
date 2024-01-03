function isuerValid(boo1) {
  return boo1;
}

var awswer = isuerValid(true) ? "You may enenter" : "Access Denied";
var automatedAwswer =
  "You account # is " + (isuerValid(true) ? "1234" : "not avalable");

function condition() {
  if (isuerValid(true)) {
    return "You may enter";
  } else {
    return "access denied";
  }
}

var answer2 = condition();
