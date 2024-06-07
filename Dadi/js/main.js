let User=[1,2,3,4,5,6];
let Pc = [1,2,3,4,5,6]; 


let UserResult = Math.floor(Math.random()*User.length);
console.log(UserResult);
let PcResult = Math.floor(Math.random() * Pc.length);
console.log(PcResult);
if(UserResult>PcResult){
    console.log("you win");
}else if (UserResult<PcResult) {
    console.log("you lose");
} else {
    console.log("draw");
    
}