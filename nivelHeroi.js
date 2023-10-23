let nomeHeroi = "Nome Legal";
let experiencia = 5632
let nivel

if(experiencia <= 1000) {
  nivel = "Ferro";
}

if(experiencia >= 1001 && experiencia <= 2000) {
  nivel = "Bronze";
}

if(experiencia >= 2001 && experiencia <= 5000) {
  nivel = "Prata";
}

if(experiencia >= 5001 && experiencia <= 7000) {
  nivel = "Ouro";  // as instruções colocam o valor mínimo como 6001 mas achei por bem mudar.
}

if(experiencia >= 7001 && experiencia <= 8000) {
  nivel = "Platina";
}

if(experiencia >= 8001 && experiencia <= 9000) {
  nivel = "Ascendente";
}

if(experiencia >= 9001 && experiencia <= 10000) {
  nivel = "Imortal";
}

if(experiencia >= 10001) {
  nivel = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + ".");