const toText = (unicodeString) => {
     try {
          let textArray = [];
          // console.log("wwwwwwwwwwwwwwwwwwwwwwwwww");
          // let unicodeStr = "0x4d0x790x200x6e0x610x6d0x650x200x690x730x200x700x610x720x740x68";
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