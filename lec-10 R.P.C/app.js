let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#comp-score");





const getCompChoice = () => {
    const option = ["rock" , "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}




const drawGame = () => {
    console.log("gane was draw");
    msg.innerText = "match was draw";
    msg.style.background = "#081b31";

}




const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
        msg.innerText = "you win";
        msg.style.background = "green";
        userScore++ ;
        console.log(userScore);
        us.innerText = userScore;
    }
    else {
        console.log("you lose");
        msg.innerText = "you lose";
        msg.style.background = "red";
        compScore++ ;
        console.log(compScore);
        cs.innerText = compScore;

    }
}




const playGame = (userChoice) => {

    console.log("user choise = " , userChoice)
    //geting random choice from comp by a function
    const compChoice = getCompChoice();
    console.log("comp choise = " , compChoice)


    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;

        if(userChoice === "rock"){
            //paper  , scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }

}




choices.forEach((choice) => {

    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})