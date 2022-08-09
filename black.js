
let hasBlackjack=false
let isAlive=false
let message=''
let cards=[]
let sum= 0
let messageEl=document.
getElementById('message-el');
let sumEl=document.getElementById('sum-el')
let cardsEl=document.getElementById('cards-el')
let player={name:'preye',
chips:145}
let playerEl=document.getElementById('player-el')
playerEl.textContent=player.name+': $'+ player.chips
function startGame() {
  let isAlive=true;
  let firstCard=getRandomCard()
  let lastCard=getRandomCard()
  let sum= firstCard + lastCard;
  let cards=[firstCard,lastCard]
  renderGame()

}

function renderGame() {
if(sum<=20) {
  message='do you want to draw another card?'}

  else if(sum===21) {
    message="you've got Blackjack!"
    hasBlackjack=true;
  }
  else {
    message="you're out of the game!"
    isAlive=false
  }
messageEl.textContent=message;
sumEl.textContent='sum: '+ sum;

cardsEl.textContent='cards: '
for(let i=0; i<cards.length; i++){
  cardsEl.textContent+=cards[i] + ' '
}
}
function getRandomCard() {
  let randomNumber= Math.floor(Math.random()*13)+1
  if(randomNumber===1){
    return 11
  }
    else if(randomNumber>10) {
      return 10
    }else{
      return randomNumber
    }
  }

function newCard() {
  isAlive=true
  hasBlackjack=false
  if(isAlive===true && hasBlackjack===false) {
    let drawNewCard=getRandomCard()
  //console.log('drawing a new card from the deck!')
  sum+=drawNewCard
  cards.push(drawNewCard)
  renderGame()
  }
}


