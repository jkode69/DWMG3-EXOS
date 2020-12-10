function convertCelcius(C){
  return (9 * C + (32 * 5)) / 5;
}

function convertFarenheit(F){
  return (5 / 9) * (F - 32);
}

let question = prompt("Choisir votre mode de conversion")

if (question == "Celcius"){
  alert("Vous avez choisis Celcius")
  let C = prompt("Entrez votre le nombre à convertir")
  alert(convertCelcius(C))

}

else if (question == "Farenheit"){
  alert("Vous avez choisis Farenheit")

let F = prompt("Entrez votre le nombre à convertir")
  alert(convertFarenheit(F))
}
