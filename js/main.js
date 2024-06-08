/* Mail :email:
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.*/
 
//creo un array di email concesse
const EmailOk = ["carlo@gmail","marco@gmail","paolo@gmail","giorgio@gmail","anna@gmail","otto@gmail","gino@gmail","gina@gmail","pino@gmail","pina@gmail","me@gmail","te@gmail","ti@gmail"];
// creo la costate legata al bottone
const Button =document.querySelector("button");

// creo un evento
Button.addEventListener("click",function (event) {
  //alla caratteristica evento aggiungo preventDefoult per prevenire il reflesh automatico dovuto hai botton dentro hai form
  event.preventDefault();
    //leggo il valore del input
    let UserEmail =document.getElementById("email").value;
      // confronto i valori che mi servono 
    let Result = EmailOk.includes(UserEmail);
    console.log(Result);
    if(Result==true){
        document.getElementById("result").innerHTML="<div>Ok<\div>";
    }else{
       document.getElementById("result").innerHTML = "<div>No<div>"; 
    }
    }
)
