const toText = (unicodeString) => {
     try {
          let textArray = [];
          let unicodeStr = unicodeString;
          for(let i=0;i<=unicodeStr.length;i+=4){
               let hexToText = String.fromCharCode(parseInt(unicodeStr.substring(i,i+4),16))
               textArray.push(hexToText);
          }
          let originalText = textArray.join('');
          return originalText;
     }
     catch(error){
          throw error;
     }
}

module.exports = {toText}