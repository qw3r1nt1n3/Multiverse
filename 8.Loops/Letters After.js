// My Code

function lettersAfter (haystack, needle, limit) {
    let letters = '';
        for (let x = 0; x < haystack.length; x++){
            if (haystack[x] === needle){
            for (let y = 0; y < limit; y++){
                let innerChar = haystack[x + y + 1];
                letters += innerChar;
                }
                break;
            }
        }
    return letters
    }

console.log(lettersAfter('any value', 'a', 2))

// ana

// chatgpt example code

// function lettersAfter(haystack, needle, limit) {
//   let needleFound = false;
//   let result = "";
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle) {
//       needleFound = true;
//       for (let j = i + 1; j <= i + limit && j < haystack.length; j++) {
//         result += haystack[j];
//       }
//       break;
//     }
//   }
//   if (!needleFound) {
//     return "";
//   }
//   return result;
// }

// console.log(lettersAfter('hello', 'e', 2))

