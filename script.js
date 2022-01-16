let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let quantidadeTotalCarne =  carnePessoa(duracao.value) * adultos + (carnePessoa(duracao) / 2 * criancas); 
  let quantidadeTotalCerveja =  cervejaPessoa(duracao.value) * adultos; 
  let quantidadeTotalBebidas =  bebidasPessoa(duracao.value) * adultos + (bebidasPessoa(duracao) / 2 * criancas); 

  resultado.innerHTML = `<h3 class="inner" id="resposta"><strong>Você vai precisar de:<strong></h3>`
  resultado.innerHTML += `<p class="inner"> ${quantidadeTotalCarne / 1000} Kg de carne</p>`
  resultado.innerHTML += `<p class="inner"> ${Math.ceil(quantidadeTotalCerveja/355)} Latas de cerveja</p>`
  resultado.innerHTML += `<p class="inner"> ${Math.ceil(quantidadeTotalBebidas/2000)} Garrafas de 2L</p>`
}

function carnePessoa(duracao){
  let carne = 400;
  if(duracao >= 6){
    return 650;
  }else {
    return 400;
  }
}

function cervejaPessoa(duracao){
  if(duracao >= 6){
    return 2000;
  }else {
    return 1200;
  }
}

function bebidasPessoa(duracao){
  if(duracao >= 6 ){
    return 1500;
  } else {
    return 1000;
  }
}