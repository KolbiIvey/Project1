  /*----- constants -----*/
const WINDOW_VALUES = [2, 8, 5,]

  /*----- state variables -----*/
let balance = 100;

  /*----- cached elements  -----*/
const slotWindowEls = Array.from(document.querySelectorAll('.slotMachine'));
const betBtnEl = document.querySelector('#betButton')
const balanceEl = document.querySelector('#balance')
const wonEl = document.querySelector('#win')
const lostEl = document.querySelector('#Lost')

  /*----- event listeners -----*/
 document.querySelector('#betButton').addEventListener('click', spin)
// document.querySelector('#cashOutButton').addEventListener('click', cashingOut)

  /*----- functions -----*/
  init();


   function init() {
     balance = 100
     balanceEl.innerText = `Current Balance: $${balance}`
     render();
  }

   function spin() {
    
//Spin needs to make the spin button cyle through the windowValues array in each window
for (let i = 0; i < slotWindowEls.length; i++){
         let randomNum = WINDOW_VALUES[Math.floor(Math.random() * WINDOW_VALUES.length)]
         slotWindowEls[i].innerText = randomNum  
     } 
     winLoss();
     youLose();
     wonEl.style.visibilty = 'hidden';
     lostEl.style.visibilty = 'hidden';
}

function winLoss() {
    let s1 = slotWindowEls[0].innerText;
    let s2 = slotWindowEls[1].innerText;
    let s3 = slotWindowEls[2].innerText;
    if (s1 === s2 && s1 === s3) {
        balance += 15;
             wonEl.innerText = `YOU WIN! Congrats your new balance is $${balance}`;
             wonEl.style.visibilty = 'visible';
    } else {
        balance -= 10
    }
    balanceEl.innerText = `Current Balance: $${balance}`
}


function cashingOut() {
}

function youLose() {
    if (balance <= 0) {
        lostEl.style.visibilty = 'visible';
    } else {
        return;
    }
}
//cashingOut need to essentially take the players current balance and cash it out
//(end the game and reset)

  function render() {
    
    
  }