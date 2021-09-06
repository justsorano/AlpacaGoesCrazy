import {SHOWALERT,HIDEALERT} from './types'
const initialState = {
   alert:false
}
export const appReducer = (state = initialState,action) =>{
   switch(action.type){
      case SHOWALERT:
         return {
            ...state,
            alert:true
         }
         case HIDEALERT:
            return  {
               ...state,
               alert:false
            }
      default: return state
   }

}