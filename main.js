
Startgame();



function Startgame() {
    let getinput = confirm("Welcome ....lets Start a game");
    if (getinput) {

        let playerchoice = prompt("enter rock or papper or scissors");


        if (playerchoice) {


            if (playerchoice.toLowerCase() === "rock" || playerchoice.toLowerCase() === "scissors" || playerchoice.toLowerCase() === "papper") {
                alert("player Choice=" + playerchoice);

                var computerchoice = getcomputerchoice();
                let finalresult = gameresult(computerchoice, playerchoice);

                alert("Player choice=" + playerchoice + "\nComputer choice=" + computerchoice + "\n Game result=" + finalresult);

                let final = confirm("Play Again")
                if (final) {
                    Startgame();
                }
                else { alert("Thanks for Playing"); }

            }
            else {
                checkinput();
            }
        } else { alert("you change your mind...ok May be next time"); }
    }

    else {
        alert("ok..May be next time");
    }
}



function checkinput() {


    alert("Enter correct input");
    Startgame();

}
function getcomputerchoice() {
    let comchoicearray = ["rock", "papper", "scissors"];
    let comchoice = Math.floor(Math.random() * 3 + 1);
    alert("Computer Choice=" + comchoicearray[comchoice - 1]);
    return (comchoicearray[comchoice - 1]);

}


function gameresult(cc, pc) {
    let result = (cc === pc)
        ? "Tie game"
        : (cc === "rock" && pc === "scissors")
            ? " Rock will broke the scissors \n Computer Wins"
            : (cc === "scissors" && pc === "papper")
                ? " scissors will cut the papper \n Computer Wins"
                : (cc === "papper" && pc === "rock")
                    ? " papper will catch the rock \n Computer Wins"
                    : "Player Wins";

    return (result);
}


