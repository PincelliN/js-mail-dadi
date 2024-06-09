/* Mail :email:
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.*/

//creo un array di email concesse
const EmailOk = [
  "Frodo@gmail",
  "Sam@gmail",
  "Marry@gmail",
  "Pipino@gmail",
  "Gandalf@gmail",
  "Aragor@gmail",
  "Legolas@gmail",
  "Gimlin@gmail",
  "Boromir@gmail",
];
// creo la costante legata al bottone
const Button = document.querySelector("button");

// costante per creare un ul e attraverso un ciclo for stampo al suo interno dei li con ogni elemento del array
let Email = "<ul>";
for (let i = 0; i < EmailOk.length; i++) {
  Email += "<li>" + EmailOk[i] + "</li>";
}
Email += "</ul>";
document.getElementById("CheckEmail").innerHTML = Email;

// evento legato al hover del mouse
let Suggerimenti = document.querySelector("span")
Suggerimenti.addEventListener("mouseover",function () {
  document.getElementById("CheckEmail").classList.remove("d-none");
  }) // evento legato al mouseout
   Suggerimenti.addEventListener("mouseout",function () {
   document.getElementById("CheckEmail").classList.add("d-none");
})



// creo un evento
Button.addEventListener("click", function (event) {
  //alla caratteristica evento aggiungo preventDefoult per prevenire il reflesh automatico dovuto hai botton dentro hai form
  event.preventDefault();
  //leggo il valore del input
  let UserEmail = document.getElementById("email").value;
  // confronto i valori che mi servono
  let Result = EmailOk.includes(UserEmail);
  console.log(Result);
  if (Result == true) {
    let Body = document.getElementById("Background");
    Body.style.backgroundImage = "url('img/Mines_of_MoriaART1.webp')";
    Body.innerHTML="Benvenuti a Moira";
    Body.classList.add("text-center", "h1","text-white");
  } else {
    let Body = document.getElementById("Background");
    Body.style.backgroundImage =
      "url('img/bestiario_signore_degli_anelli_monster_movie_balrog_gandalf.webp')";
      Body.innerHTML = "Tu Non Puoi Passare!!";
      Body.classList.add("text-center","h1",)
       
}});
