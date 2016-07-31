var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

for (var i = 0; i < alphabet.length; i++) {
  var stackLetter = "";

  for (var j = 0; j <= i; j++) {
    stackLetter += alphabet[j];
    if((j + 1)%5 === 0) {
      stackLetter += " ";
       }
    }
    console.log(stackLetter);
}

