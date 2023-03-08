  /*----- constants -----*/
const WINDOW_VALUES = [2, 8, 5,]

  /*----- state variables -----*/
let scores;

let balance;

let bet;


  /*----- cached elements  -----*/
const slotWindowEls = Array.from(document.querySelectorAll('.slotMachine'));
const betBtnEl = document.querySelector('#betButton')
const scoresEl = document.querySelector('#scores')
const balanceEl = document.querySelector('#balance')

  /*----- event listeners -----*/
document.querySelector('#spinButton').addEventListener('click', spin);
// document.querySelector('#betButton').addEventListener('click', bet)
// document.querySelector('#cashOutButton').addEventListener('click', cashingOut)

  /*----- functions -----*/
  init();


   function init() {
      scores = { 
            win: 0,
            lost: 0
      };
     balance = 500

      bet = 0
     render();
  }

   function spin() {
//Spin needs to make the spin button cyle through the windowValues array in each window
for (let i = 0; i < slotWindowEls.length; i++){
         let randomNum = WINDOW_VALUES[Math.floor(Math.random() * WINDOW_VALUES.length)]
         slotWindowEls[i].innerText = randomNum  
     } 
     function winLoss() {
         let s1 = slotWindowEls[0];
         let s2 = slotWindowEls[1];
         let s3 = slotWindowEls[2];
         if (s1 === s2 && s1 === s3) {
            console.log('you win')
         }
         
         

  }
winLoss();
}
  function betAmount() {
//bet needs to allow to player to bet 5$ or 10$ from their available balance
    

//    let s2 = randomNum[1]
//    let s3 = randomNum[2]

//   console.log()
//   if (s1 === s2 && s1 === s3) {
//     return 
    

//   }
 }


  function cashingOut() {
//cashingOut need to essentially take the players current balance and cash it out
//(end the game and reset)
  }

  function render() {
    spin();
    
    
  }