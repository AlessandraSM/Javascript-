// 1. Faça um programa que:
    
//     a) Pergunte a idade do usuário
    
//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

const idadeDoUsuario = '21';
const melhorAmigo = '42';
if(idadeDoUsuario > melhorAmigo){
    console.log(`true`)    
}else{
    console.log(`false`)
}

//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
console.log(idadeDoUsuario - melhorAmigo)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    

    


//     a) Imprima no console o array completo
const arrayComidas = ['salmão', 'sashimi', 'chocolate', 'torta de frango', 'sorvete']; 
const frase = "Essas são as minhas comidas favoritas:"
// console.log(arrayComidas)
console.log(frase)

//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
for (let i = 0; i <arrayComidas.length; i++){
   console.log(arrayComidas[i])
}
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.
arrayComidas.splice(1, 1, 'churrasco')
console.log(arrayComidas)
