  /*----- constants -----*/
const WINDOW_VALUES = [7, '$', '#']

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
 document.querySelector('#cashOutButton').addEventListener('click', reset)

  /*----- functions -----*/
  init();

function init() {
    balance = 100;
     balanceEl.innerText = `Current Balance: $${balance}`;
     for (let i = 0; i < slotWindowEls.length; i++){
          slotWindowEls[i].innerText = '0';
     }
  }

function spin() { 
    for (let i = 0; i < slotWindowEls.length; i++){
         let randomNum = WINDOW_VALUES[Math.floor(Math.random() * WINDOW_VALUES.length)]
         slotWindowEls[i].innerText = randomNum  
     } 
     winLoss();
     youLose();
}

function winLoss() {
    let s1 = slotWindowEls[0].innerText;
    let s2 = slotWindowEls[1].innerText;
    let s3 = slotWindowEls[2].innerText;
    if (s1 === s2 && s1 === s3) {
        balance += 15;
             wonEl.innerText = `YOU WIN! Congrats you've won $15`;
             wonEl.style.visibility = 'visible';
            } else {
        balance -= 10
        wonEl.style.visibility = 'hidden';
    }
    balanceEl.innerText = `Current Balance: $${balance}`
}

function youLose() {
    if (balance <= 0) {
        lostEl.style.visibility = 'visible';
    }
}

function reset() {
    init();
    wonEl.style.visibility = 'hidden';
    lostEl.style.visibility = 'hidden';
}
