import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from "../redux/actions";
import uniqid from 'uniqid'
import SingleComment from "./singleComment";


function Comments(props) {
  const [textComment, setTextComment] = useState('')
  const comments = useSelector(state => {
    const {commentReducer} = state
    return commentReducer.comments
  })
  
  const dispatch = useDispatch()

  const handleInput = (e) =>{
    setTextComment(e.target.value)
  }

  const handelSubmit = (e) =>{
    e.preventDefault()
    if (textComment !== '') {
      const id = uniqid()
      dispatch(commentCreate(textComment, id))
      setTextComment('')      
    }
  }
  
  useEffect(() =>{
    dispatch(commentsLoad())
  }, [])

  return(
    <div className="card-comments">
      <form 
        className="comments-item-create"
        onSubmit={handelSubmit}
      >
        <input type='text' value={textComment} onChange={handleInput}/>
        <input type='submit' hidden/>
      </form>
      {!!comments.length && comments.map(res => {
        return <SingleComment key={res.id} date={res}/>
      })}
      
    </div> 
  )
}
export default Comments