let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("calculado")

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let quantidadeTotalCarne =  carnePessoa(duracao.value) * adultos + (carnePessoa(duracao) / 2 * criancas); 
  let quantidadeTotalCerveja =  cervejaPessoa(duracao.value) * adultos; 
  let quantidadeTotalBebidas =  bebidasPessoa(duracao.value) * adultos + (bebidasPessoa(duracao) / 2 * criancas); 


  resultado.innerHTML = `<p> ${quantidadeTotalCarne}g de carne</p>`
  resultado.innerHTML = `<p> ${quantidadeTotalCerveja}ml de cerveja</p>`
  resultado.innerHTML = `<p> ${quantidadeTotalBebidas}ml de bebidas</p>`

  console.log(quantidadeTotalCarne)
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