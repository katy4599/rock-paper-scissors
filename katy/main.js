const winner = document.getElementById("win-statement");
const cselect = document.getElementById("cselect");
const pselect = document.getElementById("pselect");
// const wins = 0;
// const losses = 0;
// const draws = 0;

 //function greet() {
    //     const name = prompt('What is your name?');
    //     alert(`Hello ${name}, nice to see you! I can\t wait to beat you at Rock, Paper, Scissors`);
    //   };
    // playerImage = "url('./assests/niceweather.jpg')";
    // winImage = "url('./assests/niceweather.jpg')";
    // compImage = "url('./assests/niceweather.jpg')";
    
    let wins = document.getElementById("wins");
    let losses = document.getElementById("losses");
    let draws = document.getElementById("draws");
        draws.innerText = 0;
        losses.innerText = 0;
        wins.innerText = 0;
    

    // if (sessionStorage.getItem("autosave")) {
    //     // Restore the contents of the text field
    //     draws.innerText = sessionStorage.getItem("autosave");
    //     losses.innerText = sessionStorage.getItem("autosave");
    //     wins.innerText = sessionStorage.getItem("autosave");
    //   }
    //   draws.innerText.addEventListener("change", function() {
    //     // And save the results into the session storage object
    //     sessionStorage.setItem("autosave", draws.innerText);
    //     });
    //     losses.innerText.addEventListener("change", function() {
    //     sessionStorage.setItem("autosave", losses.innerText);
    //     });
    //     wins.innerText.addEventListener("change", function() {
    //     sessionStorage.setItem("autosave", wins.innerText);
    //     });
    
    //   draws.innerText = sessionStorage.getItem('draws.innerText');
    //   losses.innerText = sessionStorage.getItem('losses.innerText');
    //   wins.innerText = sessionStorage.getItem('wins.innerText');
      
      const buttons = document.getElementsByClassName("buttons");
      for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", (event) => {
              const compInput = Math.floor(Math.random() * 3);
              console.table({wins, losses, draws});
              let playerImage = document.getElementById("player-image");
              let winImage = document.getElementById("win-image");
              let compImage = document.getElementById("comp-image");
              // let draws = document.getElementById("draws");
              // let losses = document.getElementById("losses");
              // let wins = document.getElementById("wins");
              
              switch (event.target.value) {
                  case 'rock':
                      playerImage.src = '../assets/rock.jpg';
                      if (compInput === 0) {
                          compImage.src = '../assets/rock.jpg';
                          winImage.src = '../assets/draw.jpg';
                          winner.innerHTML = "It's a draw!";
                          draws.innerText = parseInt(draws.innerText)+1;
                        } else if (compInput === 1) {
                            compImage.src = '../assets/paper.jpg';
                            winImage.src = '../assets/papercoversrock.jpg';
                            winner.innerHTML = "Computer Wins!";
                            losses.innerText = parseInt(losses.innerText)+1;
                        } else {
                            compImage.src = '../assets/scissors.jpg';
                winImage.src = '../assets/rockbeatsscissors.jpg';
                winner.innerHTML = "Player Wins!";
                wins.innerText = parseInt(wins.innerText)+1;
            }
            break;
            case 'paper':
                playerImage.src = '../assets/paper.jpg';
            if (compInput === 0) {
                compImage.src = '../assets/rock.jpg';
                winImage.src = '../assets/papercoversrock.jpg';
                winner.innerHTML = "Player Wins!";
                wins.innerText = parseInt(wins.innerText)+1;
            } else if (compInput === 1) {
                compImage.src = '../assets/paper.jpg';
                winImage.src = '../assets/draw.jpg';
                winner.innerHTML = "It's a draw!";
                draws.innerText = parseInt(draws.innerText)+1;
            } else {
                compImage.src = '../assets/scissors.jpg';
                winImage.src = '../assets/scissorsbeatpaper.jpg';
                winner.innerHTML = "Computer Wins!";
                losses.innerText = parseInt(losses.innerText)+1;
            }
            break;
        case 'scissors':
            playerImage.src = '../assets/scissors.jpg';
            if (compInput === 0) {
                compImage.src = '../assets/rock.jpg';
                winImage.src = '../assets/rockbeatsscissors.jpg';
                winner.innerHTML = "Computer Wins!";
                losses.innerText = parseInt(losses.innerText)+1;
            } else if (compInput === 1) {
                compImage.src = '../assets/paper.jpg';
                winImage.src = '../assets/scissorsbeatpaper.jpg';
                winner.innerHTML = "Player Wins!";
                wins.innerText = parseInt(wins.innerText)+1;
            } else {
                compImage.src = '../assets/scissors.jpg';
                winImage.src = '../assets/draw.jpg';
                winner.innerHTML = "It's a draw!";
                draws.innerText = parseInt(draws.innerText)+1;
            }
            break;
            
        }
    })
}


// function reset() {
//     sessionStorage.clear();
// }