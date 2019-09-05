// for (let i = 0; i <= 100; i= i + 1) {
// document.write(i + '<br>');
// }

// for (let i = 100; i >=0 ; i--) {
//  if (i % 2 !== 0 && i % 11 !== 0)
//  document.write(i + '<br>');
// }

// let i = 0;
// while (i <= 100 ) {
//     document.write(i + '<br>');
//     i++;
// }

// let i = 0;
// do {
//    document.write(i + '<br>');
//     i++;
// } while (i < 100 );

//  let num = parseFloat(prompt('Enter number'));
//  while (isNaN(num))  {
//      alert('You enterd is not a number!');
//      num = parseFloat(prompt('Enter number'));
//  }

let num;
do {
    if (num !== undefined) {
alert('You enterd is not a number!');
}
    num = parseFloat(prompt('Enter number'));
}   while (isNaN(num))