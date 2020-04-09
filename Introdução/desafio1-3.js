// Usuários e tecnologias

// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
//   ];

//   for(i=0; i<usuarios.length; i++){
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}.`)
//   }

// Busca por tecnologia

// function checaSeUsuarioUsaCSS(usuarios) {
//     for(i=0;i<usuarios.tecnologias.length;i++){ 
//         if(usuarios.tecnologias[i] == 'CSS') return true;
//     }
// }

//   for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
//     if (usuarioTrabalhaComCSS) {
//       console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
//     }
//   }

// console.log((usuarios[0].tecnologias[1] == 'CSS'))

// Soma de despesas e receitas

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

//   Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas) {
    const receita = somaNumeros(receitas);
    const despesa = somaNumeros(despesas)
    // console.log('saldo' + (receita-despesa));
    return receita - despesa;
}
// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  let soma = 0;
  for(i=0;i<numeros.length;i++){
    soma = soma + numeros[i]
  }
  
  return soma
}

for(a=0;a<usuarios.length;a++){
    const saldo = calculaSaldo(usuarios[a].receitas, usuarios[a].despesas)
    if(saldo < 0){
        console.log(`${usuarios[a].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }else{
        console.log(`${usuarios[a].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }
}

// console.log(calculaSaldo(usuarios[0].receitas, usuarios[0].despesas))
// console.log(somaNumeros(usuarios[0].receitas))


// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3