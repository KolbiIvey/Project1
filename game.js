  /*----- constants -----*/
const WINDOW_VALUES = [2, 8, 5]

  /*----- state variables -----*/
let scores;

let balance;

let bet;


  /*----- cached elements  -----*/
const slotWindowEls = document.querySelectorAll('.slotMachine');
const betBtnEl = document.querySelector('#betButton')

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
     let randomNum = WINDOW_VALUES[Math.floor(Math.random() * WINDOW_VALUES.length)]
      slotWindowEls.innerHTML = randomNum;
      return randomNum
  }

  function wagerAmount() {
//bet needs to allow to player to bet 5$ or 10$ from their available balance
    let newWager = 
  }

  function cashingOut() {
//cashingOut need to essentially take the players current balance and cash it out
//(end the game and reset)
  }

  function render() {
    spin();
  }