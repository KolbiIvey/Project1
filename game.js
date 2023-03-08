  /*----- constants -----*/
const WINDOW_VALUES = [2, 8, 5,]

  /*----- state variables -----*/
let scores;

let balance = 100;

// let bet;


  /*----- cached elements  -----*/
const slotWindowEls = Array.from(document.querySelectorAll('.slotMachine'));
const betBtnEl = document.querySelector('#betButton')
// const scoresEl = document.querySelector('#scores')
const balanceEl = document.querySelector('#balance')
const wonEl = document.querySelector('#win')
const lostEl = document.querySelector('#Lost')
  /*----- event listeners -----*/
document.querySelector('#spinButton').addEventListener('click', spin);
 document.querySelector('#betButton').addEventListener('click', betAmount)
// document.querySelector('#cashOutButton').addEventListener('click', cashingOut)

  /*----- functions -----*/
  init();


   function init() {
      scores = { 
            win: 0,
            lost: 0
      };
     balance = 100
     render();
  }

   function spin() {
    wonEl.style.visibility = 'hidden';
    lostEl.style.visibility = 'hidden';
//Spin needs to make the spin button cyle through the windowValues array in each window
for (let i = 0; i < slotWindowEls.length; i++){
         let randomNum = WINDOW_VALUES[Math.floor(Math.random() * WINDOW_VALUES.length)]
         slotWindowEls[i].innerText = randomNum  
     } 
     winLoss();

}
  function betAmount() {
//betAmount should take 10$ from players current balance before they can spin
// if player wins player gets original 10$ back, plus an extra 10$
//if player loses they lose the 10$ all together
   
     let newBet = balance - 10;
     console.log(newBet)
  }
      
      
 function winLoss() {
          let s1 = slotWindowEls[0].innerText;
          let s2 = slotWindowEls[1].innerText;
          let s3 = slotWindowEls[2].innerText;
          if (s1 === s2 && s1 === s3) {
             wonEl.style.visibility = 'visible';
            //  wonEl.innerText = `You won ${}`
             return;
          }else {
            lostEl.style.visibility = 'visible';
            // lostEl.innerText = `You lost ${}`
          }
          
          
 
   }



  function cashingOut() {
//cashingOut need to essentially take the players current balance and cash it out
//(end the game and reset)
  }

  function render() {
    spin();
    
    
  }