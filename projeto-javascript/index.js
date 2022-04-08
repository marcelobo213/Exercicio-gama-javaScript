//exercicio 01
console.log('exercicio 01')
var nomeCompleto = "Francisco Marcelo Borges Lima";
console.log(nomeCompleto);

//exercicio 02
console.log('exercicio 02')
let numeroA = 3;
let numeroB = 4;
let resultado ;

resultado = numeroA * numeroB;

console.log(resultado);

//exercicio 03
console.log("exercicio 03");
function saudacao(conteudo) {
   return 'oi eu sougoku!';
}
console.log(saudacao());

//exercicio 04
console.log("exercicio 04");
function multiplica (n1, n2){
   n1 = 2, n2 = 5;
   return n1 * n2;
}
console.log(multiplica());

//exercicio 05
console.log("exercicio 05");
function podeDirigir(idade){
   if (idade >= 18){
      console.log('você pode dirigir!');
   }else{
      console.log('Você não pode dirigir!');
   }
}
podeDirigir(17);

//exercicio 06
console.log("exercicio 06");
for (let i = 1; i <=20; i++) {
   console.log(i)
}

//exercicio 07
console.log('exercicio 07')
for (let i = 1; i <= 20; i = i+2 ) {
   console.log(i)
}

//exercicio 08
console.log("exercicio 08");
function tabuada(n1){
   for(let i = 1; i <= 10; i++){
      console.log(n1*i);
   }
}
console.log(tabuada(3))

//exercicio 09
console.log("exercicio 09");
function converterEmHoras(m1){
   return (m1 / 60 + 'horas')
}
console.log(converterEmHoras(1400))
