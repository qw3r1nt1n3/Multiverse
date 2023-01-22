function evenAndOdd (numbers){
    let evenNumbers = []
    let oddNumbers = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        } else {
            oddNumbers.push(numbers[i]);
        }
    }
    return [evenNumbers, oddNumbers];
}

console.log(evenAndOdd([1, 2, 3, 4]))

// chatGPT code #1

// function evenAndOdd(arr) {
//   let evens = arr.filter(num => num % 2 === 0);
//   let odds = arr.filter(num => num % 2 !== 0);
//   return [evens, odds];
// }

// console.log(evenAndOdd([1, 2, 3, 4]))

// chatGPT code #2

// function evenAndOdd(arr) {
//     let evenArr = [];
//     let oddArr = [];
//     for (let i = 0; i < arr.length; i++) 
//       if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//       } else {
//         oddArr.push(arr[i]);
//       }
//     }
//     return [evenArr, oddArr];
//   }

//   console.log(evenAndOdd([1, 2, 3, 4]))