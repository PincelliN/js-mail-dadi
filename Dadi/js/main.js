//varibile per richiamare il primo bottone
const StartPlay = document.getElementById("StartPlay");
// evento con rimozione di una classe
StartPlay.addEventListener("click", function () {
  let Display = document.getElementById("PlayTabel").classList;
  console.log(Display);
  Display.remove("d-none");
  StartPlay.classList.add("d-none");
});



let PlayButton = document.getElementById("PlayButton");

PlayButton.addEventListener("click",function () {

//prima variabile per le immagini dei dadi
    let DiceFace = [
  "img/dice-six-faces-one-svgrepo-com.svg",
  "img/dice-six-faces-two-svgrepo-com.svg",
  "img/dice-six-faces-three-svgrepo-com.svg",
  "img/dice-six-faces-four-svgrepo-com.svg",
  "img/dice-six-faces-five-svgrepo-com.svg",
  "img/dice-six-faces-six-svgrepo-com.svg",
];
//console.log(DiceFace);
//Seconda variabile con i valori delle faccie di un dado
let User = [1, 2, 3, 4, 5, 6];


/*Creo un variabile utilizzando l'array appena scritto
 cancolo un valore indice attraverso la seguente somma
Math floor = serve per arrotondare il numero ottenuto per difetto
Math random produce un numero variabile tra 0 e 1 escudendo l'uno
array.length mi dice quanto e lungo il mio array in questo caso 6 
il risultato varia da 0 a 5 
Utilizzo il risultato come posizione
  */


let UserResult = User[Math.floor(Math.random() * User.length)];
let DiceFaceUserResult = DiceFace[UserResult - 1];
console.log(UserResult);
console.log(DiceFaceUserResult);
document.getElementById("GDiceImg").src= DiceFaceUserResult;


let PcResult = User[Math.floor(Math.random() * User.length)];
let DiceFacePcResult = DiceFace[PcResult-1]
console.log(PcResult);
console.log(DiceFacePcResult);
document.getElementById("CpuDiceImg").src = DiceFacePcResult;


let ResultTabel = document.getElementById("TabelResult").classList;
ResultTabel.remove("d-none");


if (UserResult > PcResult) {
let Color = document.getElementById("container").classList;
Color.replace("bg-danger", "bg-success");
Color.replace("bg-warning","bg-success")
  document.getElementById("TabelResult").innerHTML = "You Win";
} else if (UserResult < PcResult) {
  document.getElementById("TabelResult").innerHTML = "Cpu Win";
  let Color = document.getElementById("container").classList;
  Color.replace("bg-success", "bg-danger");
  Color.replace("bg-warning", "bg-danger");
} else {
  document.getElementById("TabelResult").innerHTML = "You Draw";
  let Color = document.getElementById("container").classList;
  Color.replace("bg-danger", "bg-warning");
  Color.replace("bg-success", "bg-warning");
}



    
})


