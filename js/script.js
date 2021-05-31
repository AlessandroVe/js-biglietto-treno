var user = prompt("Come ti chiami?");
var outputElement = document.getElementById("output");
if(user === "Ottavio" || user === "Davide" || user === "Alfredo"){
    outputElement.innerHTML+="<br> Salve Prof";
}else{
    outputElement.innerHTML+="<br> Salve Collega";
}


var priceKm = 0.21
var discount18=20
var discount65=65
var travel =parseInt(prompt("Quanti km vuoi percorrere?"));
var ageUser =parseInt(prompt("L'eta' del passeggero?"));
ageUser=parseInt(ageUser);
var costTravel = travel * priceKm;
if (ageUser <= 18){
    costTravel=(costTravel / 100)*discount18;
}else if(ageUser >= 65) {
    costTravel=(costTravel / 100)*discount65;
}
costTravel=costTravel.toFixed(2);
outputElement.innerHTML+="<br> IL biglietto del treno costera': " + costTravel + "$";

