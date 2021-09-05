import {CLOSE,OPEN} from './types'
import dataJSON from '../data.json'
const initialState = [
   ...dataJSON
]
export const dataReducer = (state = initialState,action) =>{
   switch(action.type){
      case CLOSE:{
         if(action.payload === state[state.length - 1].name){
            const newstate = state.pop()
            return [
               ...state.map(i => ({name : i.name})),
               newstate
            ]
         }
      }
      case OPEN:{
            return [
               ...dataJSON
            ]
      }
      default: return state
   }
}