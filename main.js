const winner = document.getElementById("win-statement");
const cselect = document.getElementById("cselect");
const pselect = document.getElementById("pselect");

 function greet() {
    losses.innerText = sessionStorage.getItem('losses.innerText');
    wins.innerText = sessionStorage.getItem('wins.innerText');
    draws.innerText = sessionStorage.getItem('draws.innerText');
        
      const buttons = document.getElementsByClassName("buttons");
      for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", (event) => {
              const compInput = Math.floor(Math.random() * 3);
              console.table({wins, losses, draws});
              let playerImage = document.getElementById("player-image");
              let winImage = document.getElementById("win-image");
              let compImage = document.getElementById("comp-image");
              
              switch (event.target.value) {
                  case 'rock':
                      playerImage.src = './rock.jpg';
                      if (compInput === 0) {
                          compImage.src = './rock.jpg';
                          winImage.src = './draw.jpg';
                          winner.innerHTML = "It's a draw!";
                          draws.innerText = Number(draws.innerText)+1;
                          window.sessionStorage.setItem("draws.innerText", draws.innerText.toString());
                        } else if (compInput === 1) {
                            compImage.src = './paper.jpg';
                            winImage.src = './papercoversrock.jpg';
                            winner.innerHTML = "Try Again!";
                            losses.innerText = Number(losses.innerText)+1;
                            window.sessionStorage.setItem("losses.innerText", losses.innerText.toString());
                        } else {
                            compImage.src = './scissors.jpg';
                            winImage.src = './rockbeatsscissors.jpg';
                            winner.innerHTML = "Player Wins!";
                            wins.innerText = Number(wins.innerText)+1;
                            window.sessionStorage.setItem("wins.innerText", wins.innerText.toString());
                        }
                        break;
                        case 'paper':
                            playerImage.src = './paper.jpg';
                        if (compInput === 0) {
                            compImage.src = './rock.jpg';
                            winImage.src = './papercoversrock.jpg';
                            winner.innerHTML = "Player Wins!";
                            wins.innerText = Number(wins.innerText)+1;
                            window.sessionStorage.setItem("wins.innerText", wins.innerText.toString());
                        } else if (compInput === 1) {
                            compImage.src = './paper.jpg';
                            winImage.src = './draw.jpg';
                            winner.innerHTML = "It's a draw!";
                            draws.innerText = Number(draws.innerText)+1;
                            window.sessionStorage.setItem("draws.innerText", draws.innerText.toString());
                        } else {
                            compImage.src = './scissors.jpg';
                            winImage.src = './scissorsbeatpaper.jpg';
                            winner.innerHTML = "Try Again!";
                            losses.innerText = Number(losses.innerText)+1;
                            window.sessionStorage.setItem("losses.innerText", losses.innerText.toString());
                        }
                        break;
                        case 'scissors':
                            playerImage.src = './scissors.jpg';
                            if (compInput === 0) {
                                compImage.src = './rock.jpg';
                                winImage.src = './rockbeatsscissors.jpg';
                                winner.innerHTML = "Try Again!";
                                losses.innerText = Number(losses.innerText)+1;
                                window.sessionStorage.setItem("losses.innerText", losses.innerText.toString());
                            } else if (compInput === 1) {
                                compImage.src = './paper.jpg';
                                winImage.src = './scissorsbeatpaper.jpg';
                                winner.innerHTML = "Player Wins!";
                                wins.innerText = Number(wins.innerText)+1;
                                window.sessionStorage.setItem("wins.innerText", wins.innerText.toString());
                            } else {
                                compImage.src = './scissors.jpg';
                                winImage.src = './draw.jpg';
                                winner.innerHTML = "It's a draw!";
                                draws.innerText = Number(draws.innerText)+1;
                                window.sessionStorage.setItem("draws.innerText", draws.innerText.toString());
                            }
                            break;
                           
        }
    })
}
}


function reset() {
    let winImage = document.getElementById("win-image");
    losses.innerText = 0;
    wins.innerText = 0;
    draws.innerText = 0;
    winner.innerHTML = "";
    winImage.src = './default1.jpg';
    
    window.sessionStorage.setItem("losses.innerText", 0);
    window.sessionStorage.setItem("wins.innerText", 0);
    window.sessionStorage.setItem("draws.innerText", 0);
}
