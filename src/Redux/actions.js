import {CLOSE,OPEN,ADDNEWDATA,SHOWALERT,HIDEALERT} from './types'
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
export const addData = (data) =>{
   return {
      type:ADDNEWDATA,
      payload:data
   }
}
export const showAlert = () =>{
   return {
      type:SHOWALERT
   }
}
export const hideAlert = () =>{
   return {
      type:HIDEALERT
   }
}
