import React from 'react'
import './Card.css'
const Comment = ({postId, id, name, email, body}) => {
  return (
    <div className='card'>
        <h1>postId: {postId}, userId: {id}</h1>
        <h2>userName: {name}</h2>
        <h2>Email: {email}</h2>
        <h3>{body}</h3>
    </div>
  )
}

export default Comment