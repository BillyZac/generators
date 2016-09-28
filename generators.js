// Create a generator. Note the asterisk!
function* greet() {
  yield "How"
  yield "are"
  yield "you?"
}

var greeter = greet() // returns an object? With .next and .done, I think?

// // Iterate with `for of`
// for (let word of greeter) {
//   console.log(word);
// }
//
// // Can step through an infinite sequence one by one
// function* graph() {
//   let x = 0
//   while (true) {
//     yield x
//     x++
//   }
// }
//
// var graphGenerator = graph()
// console.log(graphGenerator.next().value);
// console.log(graphGenerator.next().value);
// console.log(graphGenerator.next().value);

// Canonical example
// See http://wiki.ecmascript.org/doku.php?id=harmony:Generators
function* fibonacci() {
  let [previous, current] = [0, 1]
  for (;;) {
    [previous, current] = [current, previous + current]
    yield current
  }
}

var fib = fibonacci()

// Can iterate using a `for of`
for (n of fib) {
  if (n > 8) {
    break
  }
  console.log(n);
}

// And then get the next 10 using a regular for loop. Note that `fib` remembers the state!
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}
