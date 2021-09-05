import {ACTIVETRUE,ACTIVEFALSE} from './types'

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