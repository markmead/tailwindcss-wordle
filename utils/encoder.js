// This is trash code 🗑

export function fromHex(stringAsHex) {
  let newString = "";

  for (let i = 0; i < stringAsHex.length; i += 2) {
    newString += String.fromCharCode(parseInt(stringAsHex.substr(i, 2), 16));
  }

  return decodeURIComponent(escape(newString));
}

export function toHex(stringToEncode) {
  let newString = encodeURIComponent(stringToEncode);
  let stringHex = "";

  for (let i = 0; i < newString.length; i++) {
    stringHex += newString.charCodeAt(i).toString(16);
  }

  return stringHex;
}
