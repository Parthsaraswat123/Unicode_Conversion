const toUnicode = (text) => {
     try{
          let normalText = text;
          let unicodeArray = [];
          for(let character of normalText){
               let charToHex = character.charCodeAt(0).toString(16);
               unicodeArray.push(charToHex.padStart(4, '0'));
          }
          let unicodeString = unicodeArray.join('');
          return unicodeString;
     }
     catch(error){
          throw error;
     }
     
}

module.exports = {toUnicode};