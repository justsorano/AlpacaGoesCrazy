import {ADDNEWDATA, CLOSE,OPEN} from './types'
import dataJSON from '../data.json'
const initialState = [
   ...dataJSON,
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
         return state
      }
      case OPEN:{
            return [
               ...dataJSON
            ]
      }
      case ADDNEWDATA:{
         const arr = [...state.map(i => i.name)]
         if(arr.includes(action.payload.name)){
            state.filter(i => {
            if(i.name.includes(action.payload.name)){
            return i.children[0].children = i.children[0].children.concat(action.payload.children)
            }
         })
         } else {
            return [...state.concat({name:action.payload.name,children:[{name:`${action.payload.name} region`,children:[...action.payload.children]}]})]
         }
   }
      default: return state
   }
}