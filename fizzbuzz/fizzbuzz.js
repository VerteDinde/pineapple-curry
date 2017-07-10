const fizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    let msg = '';
    if (!(i % 3)) msg += 'Fizz';
    if (!(i % 5)) msg += 'Buzz';
    console.log(msg || i);
  }
}

console.log(fizzBuzz());