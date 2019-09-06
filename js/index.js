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

// let num;
// do {
//     if (num !== undefined) {
// alert('You enterd is not a number!');
// }
//     num = parseFloat(prompt('Enter number'));
// }   while (isNaN(num))

let products = ['Tesla X', 'Tesla S', 'BMW i3'];
products[3] = 'Tesla Y';
products.push ('ZAZ Sens', 'Chevy Corvette');
products[10] = 'Toyota';

// console.log(products.length);

// for (let i = 0; i < products.length; i++) {
//     if (products[i] !== undefined) {  // почему еще одни {} - как в матрёшке, не могу понять правила их расстановки; и почему нельзя использовать ===
//     console.log(products[i]);
//     }
// }

products.forEach(function(item) {
    console.log(item);
})

