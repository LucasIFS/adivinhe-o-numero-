var y = Math.floor(Math.randow() * 10 + 1);

var x = document.getElementById("guessField").ariaValueMax;
if(x == y)
{
    alert("PARABÉNS!!!"+playername+", você acertou em " + guess + " tentativa(s)! ");
    guess= 1;
}

else if(x > y) 
{
    guess++;
    alert("Opa, resposta errada!! Tente um número menor");
} 
else
{
    guess++;
    alert("Opa, resposta errada!! Tente um número maior")
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}