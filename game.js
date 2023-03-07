  /*----- constants -----*/
const windowValues = [2, 8, 5]

  /*----- state variables -----*/
let scores;

let balance;



  /*----- cached elements  -----*/


  /*----- event listeners -----*/
document.querySelector('#spinButton').addEventListener('click', spin);
document.querySelector('#betButton').addEventListener('click', bet)
document.querySelector('#cashOutButton').addEventListener('click', cashingOut)

  /*----- functions -----*/
 init();


  function init() {
     scores = { 
        win: 0,
        lost: 0
     };
     balance = 0
     render();
  }

  function spin (
//Spin needs to make the spin button cyle through the windowValues array in each window

  )

  function bet() {
//bet needs to ask the player how much they want to bet from
//their available balance in incriments of 20$ up to 100$
  }

  function cashingOut() {
//cashingOut need to essentially take the players current balance and cash it out
//(end the game and reset)
  }