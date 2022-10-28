//#region TASK1
// const a = +prompt("Enter the number")

// for (let index = 1; index < 1000; index++) {
//     if( index % a == 0){
//         console.log(index)
//     }
// }

//#endregion

//#region TASK2
// const a = +prompt("Enter the number")
// let b = a ** (1 / 2)
// var counter = 0
// for (let index = 1; index < b; index++) {
//   counter++
// }
// console.log(counter)

//#endregion

//#region TASK3

// const a = +prompt("Enter the number")
// var b = 0
// for (let index = 0; index < a; index++) {
//   if (a % index == 0) {
//     if (index > b) {
//       b = index
//     }
//   }
// }
// console.log(b)

//#endregion

//#region TASK4

// const a = +prompt("Enter the value of A")
// const b = +prompt("Enter the value of B")
// var sum = 0
// if (a < b) {
//   for (let index = a + 1; index < b; index++) {
//     if (index % 7 == 0) {
//       sum += index
//     }
//   }
// } else if (b < a) {
//   for (let index = b + 1; index < a; index++) {
//     if (index % 7 == 0) {
//       sum += index
//     }
//   }
// }
// console.log(sum)

//#endregion

//#region TASK5
// const n = +prompt("Enter the positive number")
// let n1 = 1
// let n2 = 1
// let next

// if (n <= 2) {
//   console.log(1)
// } else if (n > 0) {
//   for (let i = 0; i <= n; i++) {
//     if (i === n - 2) console.log(n2)
//     next = n1 + n2
//     n1 = n2
//     n2 = next
//   }
// } else {
//   console.log("The number must be positive")
// }

//#endregion

//#region TASK6

// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// while (a != b) {
//   if (a > b) {
//     a -= b
//   } else {
//     b -= a
//   }
// }
// console.log(a)

//#endregion

//#region TASK7

// var a = +prompt("Enter the number")
// var b, sum = 0
// var z = a
// while (a > 0) {
//   b = a % 10
//   sum = sum * 10 + b
//   a = parseInt(a / 10)
// }
// console.log(sum)

//#endregion

//#region TASK8

// let n = +prompt("Enter the value of first number")
// let m = +prompt("Enter the value of second number")
// var digitN = 0
// var digitM = 0
// var differentDigit = true
// while (n) {
//   digitN = n % 10
//   n = n / 10
//   while (m) {
//     digitM = m % 10
//     m = parseInt(m / 10)
//     if (digitN === digitM) {
//       console.log("yes")
//       differentDigit = false
//       break
//     }
//   }
// }

// if (differentDigit) {
//   console.log("no")
// }

//#endregion
