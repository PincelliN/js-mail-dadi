//varibile per richiamare il primo bottone
const StartPlay = document.getElementById("StartPlay");
// evento con rimozione di una classe
StartPlay.addEventListener("click", function () {
  let Display = document.getElementById("PlayTabel").classList;
console.log(Display);
Display.remove("d-none");
});

//Creo un array con dentro le faccie di un dado
let User = [1, 2, 3, 4, 5, 6];
/*Creo un variabile utilizzando l'array appena scritto 
cancolo un valore indice attraverso la seguente somma
Math floor = seve per arrotondare il numero ottenuto per difetto
Math random produce un numero variabile tra 0 e 1 escudendo l'uno
array.length mi dice quanto e lungo il mio array in questo caso 6  */
let UserResult = User[Math.floor(Math.random() * User.length)];
console.log(UserResult);
let PcResult = User[Math.floor(Math.random() * User.length)];
console.log(PcResult);
if (UserResult > PcResult) {
  document.getElementById("Winner").innerHTML = "You Win";
} else if (UserResult < PcResult) {
  document.getElementById("Winner").innerHTML = "Pc Win";
} else {
  document.getElementById("Winner").innerHTML = "You Draw";
}
