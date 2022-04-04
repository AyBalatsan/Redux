import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DEL } from "./types"

export function incrementLikes (){
  return{
    type: INCREMENT
  }
}
export function decrementLikes (){
  return{
    type: DECREMENT
  }
}
export function inputText (text){
  return{
    type: INPUT_TEXT,
    text
  }
}
export function commentCreate (text, id){
  return{
    type: COMMENT_CREATE,
    date: {text, id}
  }
}
export function commentUpdate (text, id){
  return{
    type: COMMENT_UPDATE,
    date: {text, id}
  }
}
export function commentDel (id){
  return{
    type: COMMENT_DEL,
    id
  }
}