import {ACTIVETRUE,ACTIVEFALSE} from './types'
const initialState = {
   active:true
}
export const appReducer = (state = initialState,action) =>{
   switch(action.type){
      case ACTIVETRUE:
         return {
            ...state,
            active:true
         }
         case ACTIVEFALSE:
            return {
               ...state,
               active:false
            }
      default: return state
   }
}