

// for (let i =b;  i < 10; i++ ) {
// resault=resault *=a

// }


// function daraja(a, b) {
//   let result = a;
//   for (let i = 1; i < b; i++) {
//     result *= a

//   }
//   return result
// }


// alert(daraja(a,b));
let a = +prompt("bitta sonni kiriting")


while (isNaN(a) || a==' ') {
  a = +prompt("bitta sonni kiriting")
}
let b = +prompt("uni darajasini kiriting")
while (isNaN(b) || b==' ') {
  b = +prompt("uni darajasini kiriting")
}


let total = 1
for (let i = 1; i <=b; i++) {
 total=total*a
}

  

alert(total)
