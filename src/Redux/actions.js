import {ACTIVETRUE,ACTIVEFALSE, CLOSE,SHOW} from './types'

export const activeTrue = () =>{
   return {
      type:ACTIVETRUE
   }
}
export const activeFalse = () =>{
   return {
      type:ACTIVEFALSE
   }
}
export const closeTest = (title) =>{
   return {
      type:CLOSE,
      payload:title
   }
}
export const showTest = (title) =>{
   return {
      type:SHOW,
      payload:title
   }
}