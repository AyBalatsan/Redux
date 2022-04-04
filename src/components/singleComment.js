import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { commentUpdate, commentDel } from '../redux/actions'

function SingleComment({date}) {
  const [commentText, setCommentText] = useState('')
  const {text, id} = date
  const dispatch = useDispatch()
  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handelUpdate = (e) =>{
    e.preventDefault()
    dispatch(commentUpdate(commentText, id))
  }

  const handelDelCommit = (e) =>{
    e.preventDefault()
    dispatch(commentDel(id))
  }

  return(
      <form 
        className="comments-item"
        onSubmit={handelUpdate}
      >
        <div 
          className="comments-item-delete"
          onClick={handelDelCommit}
        >&times;</div>
        <input type='text' value={commentText} onChange={(e)=> setCommentText(e.target.value)}/>
        <input type='submit' hidden/>
      </form>  
  )
}
export default SingleComment