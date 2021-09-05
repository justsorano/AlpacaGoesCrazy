import {CLOSE,OPEN} from './types'
export const closeCollapsing = (title) =>{
   return {
      type:CLOSE,
      payload:title
   }
}
export const openCollapsing = (title) =>{
   return {
      type:OPEN,
      payload:title
   }
}