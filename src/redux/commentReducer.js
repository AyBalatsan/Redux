import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DEL } from "./types"

const initialState = {
  comments: []
}

export const commentReducer = (state = initialState, action) => {  
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.date]
          
      }
    case COMMENT_UPDATE:
      const {date} = action
      const {comments} = state
      const itemIndex = comments.findIndex(res => res.id === date.id)
      
      const newComments =  [
        ...comments.slice(0, itemIndex),
        date,
        ...comments.slice(itemIndex+1)
      ]
      return {
        ...state,
        comments: newComments
          
      }
    case COMMENT_DEL:
      return (() => {
        const { id } = action
        const { comments } = state
        const itemIndex = comments.findIndex(res => res.id === id)

        const newComments = [
          ...comments.slice(0, itemIndex),
          ...comments.slice(itemIndex + 1)
        ]
        return {
          ...state,
          comments: newComments
        }
      })();
    default:
      return state;
  }
}