
let product = 0
let sum = 0

btnClear.onclick=function(){
  inptNumberOne.value = 0
  inptNumberTwo.value = 0
  lblAnswer.textContent = ''
}


btnMultiply.onclick=function(){
  product = inptNumberOne.value * inptNumberTwo.value
  lblAnswer.textContent = `The product is ${product}`
}

btnAdd.onclick=function(){
   sum = Number(inptNumberOne.value) + Number(inptNumberTwo.value)
  lblAnswer.textContent = `The sum is ${sum}`
}
