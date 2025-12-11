import * as actions from "../actions/logicActions"
import { isGameOver } from "../utils/card"
import { readScoreFromLocal, saveScoreToLocal } from '../utils/auth'

const defaultHolderState = {
  enable: false,
  cardsData: [],
};
export const initialState = {
  score: 0,
  gameOver: false,
  holdersState: [],
  firstSelectedId: -1,
  secondSelectedId: -1,
  spareCardsState: [],
  scoreHistory: readScoreFromLocal() || []
}

export default function logicReducer(state = initialState, action) {
  var cardsDataTemp = [];
  var removedCard;
  var scoreTemp;

  switch(action.type) {
    
      
    case actions.RESET_CARDS_STATUS:
     
      var holderStatesTemp = [];
      var holderStateTemp;
      for(let i=0; i<15; i++) {
      
        holderStateTemp = {};
        Object.assign(holderStateTemp, defaultHolderState);
        holderStateTemp.cardsData = action.payload.cardData[i];
        if(i<10) holderStateTemp.enable = true;
        holderStatesTemp.push(holderStateTemp);
      }
      
      holderStatesTemp.push({...defaultHolderState, enable: true});

      return {
        ...state,
        score: 0,
        gameOver: false,
        firstSelectedId: -1,
        secondSelectedId: -1,
        spareCardsState: action.payload.spareCardData,
        holdersState: holderStatesTemp,
      }
      
    
     
    case actions.RESET_PICKUP_CARD:
      
      return {
        ...state,
        firstSelectedId: -1,
        secondSelectedId: -1
      }

    
     
    case actions.PICKUP_FIRST_CARD:
      

      return {
        ...state,
        firstSelectedId: action.payload
      }

    
    
    case actions.PICKUP_SECOND_CARD:
      if(state.firstSelectedId === action.payload) {
        
        return state;
      }
      
      return {
        ...state,
        secondSelectedId: action.payload
      }

    
     
    case actions.REMOVE_FIRST_CARD:
      cardsDataTemp = []
      Object.assign(cardsDataTemp, state.holdersState[action.payload].cardsData);
      removedCard = cardsDataTemp.pop();
      
      scoreTemp = state.score;
     
      if(cardsDataTemp.length === 0) {
        if((action.payload > 9) & (action.payload < 15)) {
          scoreTemp += 10000;
        } else if(action.payload !== 15) {
          scoreTemp += 1000;
        }
      }
      return {
        ...state,
        score: scoreTemp,
        firstSelectedId: -1,
        holdersState: [...state.holdersState.slice(0, action.payload),
        {...state.holdersState[action.payload], cardsData: cardsDataTemp},
      ...state.holdersState.slice(action.payload+1,state.holdersState.length)]
      }

    
     
    case actions.REMOVE_SECOND_CARD:
      cardsDataTemp = [];
      Object.assign(cardsDataTemp, state.holdersState[action.payload].cardsData);
      removedCard = cardsDataTemp.pop();
      
      scoreTemp = state.score;
      
      if(cardsDataTemp.length === 0) {
        if((action.payload > 9) & (action.payload < 15)) {
          scoreTemp += 10000;
        } else if(action.payload !== 15) {
          scoreTemp += 1000;
        }
      }
      return {
        ...state,
        score: scoreTemp,
        secondSelectedId: -1,
        holdersState: [...state.holdersState.slice(0, action.payload),
        {...state.holdersState[action.payload], cardsData: cardsDataTemp},
      ...state.holdersState.slice(action.payload+1,state.holdersState.length)]
      }
    
   
     
    case actions.OPEN_CENTER_CARD:
      for(let i=0; i<5; i++) {
        if((state.holdersState[i].cardsData.length === 0) && 
        (state.holdersState[i+5].cardsData.length === 0)) {
          if(state.holdersState[i+10].enable === false) {
            
            return {
              ...state,
              holdersState: [...state.holdersState.slice(0, i+10),
                {...state.holdersState[i+10], enable: true},
              ...state.holdersState.slice(i+11,state.holdersState.length)]
            }
          }
        }
      }
      return state;
    
    
     
    case actions.SEND_SPARE_CARD_TO_LAST_HOLDER:
      if(state.spareCardsState.length === 0) {
        

        return {
          ...state,
          firstSelectedId: -1,
          secondSelectedId: -1,
          spareCardsState: state.holdersState[15].cardsData,
          holdersState: [...state.holdersState.slice(0,15), {...state.holdersState[15], cardsData: []}]
        }
      } else {
        const lastCardHolderState = [...state.holdersState[15].cardsData, state.spareCardsState[0]]
        return {
          ...state,
          firstSelectedId: -1,
          secondSelectedId: -1,
          spareCardsState: [...state.spareCardsState.slice(1, state.spareCardsState.length)],
          holdersState: [...state.holdersState.slice(0,15), {...state.holdersState[15], cardsData: lastCardHolderState}]
        }
      }

    
    case actions.CHECK_GAME_OVER:
      if(isGameOver(state.holdersState, state.spareCardsState)) {
        console.log("[Action] GAME OVER!");
        return {
          ...state,
          gameOver: true
        }
      }
      return state;

   
    case actions.APPEND_SCORE_HISTORY:
      saveScoreToLocal([...state.scoreHistory, action.payload])
      return {
        ...state,
        scoreHistory: [...state.scoreHistory, action.payload]
      }

    
    case actions.CLEAR_SCORE_HISTORY:
      saveScoreToLocal([])
      return {
        ...state,
        scoreHistory: []
      }

    default:
      return state;
  }
}
