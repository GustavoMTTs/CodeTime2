var numero1 = parseFloat(prompt('Insira o primeiro número'))
var numero2 = parseFloat(prompt('Insira o segundo número'))

if (numero1 > numero2) {
    console.log('O maior número ${numero1}');
} else if (numero2 > numero1) {
    console.log('O maior número é ${numero2}');
} else {
    console.log('Os dois números são iguais');
}