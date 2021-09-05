import {data} from '../data'
const initialState = [
   ...data
]
export const dataReducer = (state = initialState,action) =>{
   switch(action.type){
      default: return state
   }
}