


// let son = +prompt("son kiriting toq yoki juftligini aniqlab beramiz")
let son;
while (isNaN(son) || son == '' || son <= 0) {
   son = +prompt("son kiriting")
}

if (son % 2 == 0) {
  alert("siz juft son kiritdingiz")
} else if (isNaN(son)) {
  alert('iltmos son kiriting')
} else if (son % 2 !== 0) {
  alert("siz toq son kiritdingiz")
}



