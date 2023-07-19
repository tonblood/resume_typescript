import React from 'react'

const CardReducer = (state=[],action:any) => {
  switch(action.type) {
      case 'ADD_CARD' :

      case 'EDIT_CARD' :

      
      case 'DELETE_CARD' :
      default :
        return state
  }
}

export default CardReducer