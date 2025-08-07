function startGame(){
    const SceretNum=Math.floor(Math.random() * 100)+1;
    console.log(SceretNum);
    let Guess;
    let Attempts=0;
    while(true){
        Guess=prompt("enetr the value to guess the random number");
        Attempts++;
        if(Guess === null){
            document.getElementById("msg").innerText="Game Cancelled"
            break;
        }
        Guess=Number(Guess);
        if(isNaN(Guess) || Guess<1 ||Guess>100){
            alert("Please enter the valid Number from 1 to 100");
        }else if(Guess < SceretNum) 
        {
                alert("To Low! Try Game");
        }else if(Guess >  SceretNum)
        {
            alert("TO Higher! Try again ");

        }
      else{
        alert(`corrected! the number was ${SceretNum}.you guessed it in ${Attempts} Attempts`);
        document.getElementById("msg").innerText=`you are guessed it  in ${Attempts} attempts`;
        break;
      }
    }
}