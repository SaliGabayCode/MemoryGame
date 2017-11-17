var gPrevElCard = null;
var gShownCouplesCount= 0;
var MAX_COUPLES = 4;


initGame();
function initGame() {

  if (gShownCouplesCount) {
    // All cards are shown, hide them all
    var elCards = document.querySelectorAll('.card');
    for (var i = 0; i < elCards.length; i++) {
      elCards[i].classList.remove('shown');
    }
    gShownCouplesCount = 0;
  }

  shuffleEls(document.querySelector('.board'));
}


function cardClicked(elCard) {

  if (elCard.classList.contains('shown')) return;
  elCard.classList.add('shown');


  if (gPrevElCard) {
    console.log('Second Card');

    var dataCard1 = elCard.getAttribute('data-card');
    var dataCard2 = gPrevElCard.getAttribute('data-card');

    if (dataCard1 === dataCard2) {
      console.log('Same Card!');
      gShownCouplesCount++;
      gPrevElCard = null;
      if (gShownCouplesCount === MAX_COUPLES) {
        alert('Winner!!!');
        initGame();
      }

    } else {
      console.log('Not Same!');
      setTimeout(function () {
        elCard.classList.remove('shown');
        gPrevElCard.classList.remove('shown');
        gPrevElCard = null;

      }, 500);


    }



  } else {
    console.log('First Card');
    gPrevElCard = elCard;
  }


}
function shuffleEls(parent) {

  for (var i = parent.children.length; i >= 0; i--) {
    var rand = parseInt(Math.random() * i);
    var child = parent.children[rand];
    parent.appendChild(child);
  }
}
