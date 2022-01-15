let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("calculado")

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let quantidadeTotalCarne =  carnePessoa(duracao.value) * adultos + (carnePessoa(duracao) /2 * criancas); 

  console.log(quantidadeTotalCarne)
}

function carnePessoa(duracao){
  let carne = 400;
  if(duracao >= 6){
    return 650
  }else {
    return 400
  }
  
}