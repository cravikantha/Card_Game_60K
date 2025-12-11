export function getCardFromNumber(n) {
  let suit, number, value;
  switch(Math.floor((n-1)/13)) {
    case 0:
      suit = "h";
      break;
    case 1:
      suit = "s";
      break;
    case 2:
      suit = "d";
      break;
    case 3:
      suit = "c";
      break;
    default:
      suit = ""
      break;
  }
  number = ((n-1) % 13) + 1;
  if(number === 1) {
    value = "a"
  } else if(number === 11) {
    value = "j"
  } else if(number === 12) {
    value = "q"
  } else if(number === 13) {
    value = "k"
  } else {
    value = number;
  }
  return {suit: suit, number: value}
}

export function swapTwoElement(numberArray, firstIndex, secondIndex) {
  let c = numberArray[firstIndex];
  numberArray[firstIndex] = numberArray[secondIndex];
  numberArray[secondIndex] = c;
}

export function isGameOver(cardArray, spareCardsList) {
  let i, j;
  
  j = 0;
  for(i=0; i<cardArray.length; i++) {
    if(cardArray[i].cardsData.length === 0) {
      j++;
    }
  }
  if(j === cardArray.length) {
    return true;
  }

  
  for(i=0; i<cardArray.length-1; i++) {
    if(cardArray[i].cardsData.length === 0) {
      continue;
    }
    if(cardArray[i].enable === false) {
      continue;
    }

    for(j=i+1; j<cardArray.length-1; j++) {
      if(cardArray[j].cardsData.length === 0) {
        continue;
      }
      if(cardArray[j].enable === false) {
        continue;
      }
      
      if(cardArray[i].cardsData[cardArray[i].cardsData.length-1].number === 
        cardArray[j].cardsData[cardArray[j].cardsData.length-1].number) {
         
        return false;
      }
    }
    
    for(j=0; j<cardArray[cardArray.length-1].cardsData.length; j++) {
      if(cardArray[i].cardsData[cardArray[i].cardsData.length-1].number === cardArray[cardArray.length-1].cardsData[j].number) {
         
        return false;
      } 
    }

    for(j=0; j<spareCardsList.length; j++) {
      if(cardArray[i].cardsData[cardArray[i].cardsData.length-1].number === spareCardsList[j].number) {
       
        return false;
      }
    }
  }

  return true;
}

export default function initCardArray(){
  var cardData = new Array(15);
  let cardDataInit = [];
  let n, firstId, secondId;
  let holderNo;

  for(n=0; n<52; n++) {
    cardDataInit[n] = n+1;
  }
  
  for(n=0; n<52; n++) {
    firstId = Math.floor(Math.random() * 52);
    secondId = Math.floor(Math.random() * 52);
    swapTwoElement(cardDataInit, firstId, secondId);
  }
  firstId = 0;
  for(holderNo=0; holderNo<15; holderNo++) {
    const threeCards = new Array(3);
    for(n=0; n<3; n++) {
      threeCards[n] = getCardFromNumber(cardDataInit[firstId++]);
    }
    cardData[holderNo] = threeCards;
  }
  
  
  const spareCardData = new Array(7);
  n = 0;
  while(firstId < 52) {
    spareCardData[n++] = getCardFromNumber(cardDataInit[firstId++]);
  }

  return {cardData, spareCardData};
}
