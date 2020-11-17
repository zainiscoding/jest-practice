function caesar(str, shifter) {
  const charCodes = [];
  const strArray = [...str];

  strArray.forEach((char) => {
    if (char.match(/^[A-Za-z]$/)) {
      charCodes.push(char.charCodeAt(0));
    } else {
      charCodes.push(char);
    }
  });

  const shiftedStringCodes = [];

  charCodes.forEach((code) => {
    if (typeof code === 'number') {
      let newCode = code + (shifter % 26);
      if ((code >= 97 && newCode > 122) || (code <= 90 && newCode > 90)) {
        newCode -= 26;
        const letter = String.fromCharCode(newCode);
        shiftedStringCodes.push(letter);
      } else if ((newCode < 97 && code >= 95) || (newCode < 65 && code >= 65)) {
        newCode += 26;
        const letter = String.fromCharCode(newCode);
        shiftedStringCodes.push(letter);
      } else {
        const letter = String.fromCharCode(newCode);
        shiftedStringCodes.push(letter);
      }
    } else {
      shiftedStringCodes.push(code);
    }
  });
  return shiftedStringCodes.join('');
}

export default caesar;
