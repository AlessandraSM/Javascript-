var x; //definindo a variável que irá receber o valor dentro do if 
var possuiGraduacao = true; 
//verificando se possui graduacao é verdade e se for verdade inclua o valor. 

if(possuiGraduacao){
    console.log(`É verdadeiro`);
    var x = 10
}else {
    console.log(`É falso`);
}
console.log(x)

var possuiDoutorado = false 
//Aqui verifico através de outra variável se possui doutorado

if(possuiDoutorado){
    console.log(`Possui graduação e Doutorado`);
}else if(possuiGraduacao){
    console.log(`Possui graduação, mas não possui doutorado`);
}else{
    console.log(`Não possui graduação`);
}
console.log(x)




var nome = `Alexia`; 

if (nome) {
    console.log(nome); 
}else {
    console.log(`Nome não existe!`)
}

// // Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true


