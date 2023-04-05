//1)
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K++;
  SOMA = SOMA + K;
}

// console.log(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA foi 91.

//2)Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//Fazendo o FOR estabeleço a variável i onde iniciar a contagem, a partir do algarismo 2 em seguida digo a variável i se ela for menor ou igual ao limitefinal estabelecido no escopo ela prossiga incrementando até chegar ao limite final

function fibonacci(n) {
  const sequenciaFibonacci = [0, 1];
  const limitefinal = 9;
  for (let i = 2; i <= limitefinal; i++) {
    sequenciaFibonacci[i] =
      sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
  }
  if (sequenciaFibonacci.includes(n)) {
    console.log(`O número informado ${n} existe na Sequência Fibonacci.`);
  } else {
    console.log(`O número informado ${n} não existe na Sequência Fibonacci.`);
  }
  return sequenciaFibonacci;
}

console.log(fibonacci(4));
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

//3) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9

// b) 2, 4, 8, 16, 32, 64, 128

// c) 0, 1, 4, 9, 16, 25, 36, 49

// d) 4, 16, 36, 64, 100

// e) 1, 1, 2, 3, 5, 8, 13

// f) 2,10, 12, 16, 17, 18, 19, 22

//4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.
//Analisei o contexto com base nas informações citadas acima.

// O caminhão tem muitos quisitos que lhe impede de estar mais próximo de Ribeirão Preto ja que o mesmo está saindo de Franca. Quando se encontrarem na rodovia o carro sai de Ribeirão Preto mas diante dos atrasos do caminhão ele ainda está mais próximo a Ribeirão do que o caminhão.

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverteString(n) {
    let novaStr = '';
    for (let i = n.length - 1; i >= 0; i--) {
      novaStr += n[i];
    }
    return novaStr;
  }
  
  console.log(inverteString('Alessandra'));
  