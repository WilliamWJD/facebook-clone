import React from 'react'

function PostItem({ author, date, content, comments }){
  return(
    <div className="post">
      <div className="post-header">
          <img src={author.avatar} className="avatar" alt="Avatar"/>
          <div className="header-details">
            <span>{author.name}</span>
            <span className="post-date">{date}</span>
          </div>
      </div>

      <p className="post-content">{content}</p>

      <div className="post-comments">
        <div className="divider"></div>
        {comments.map(comment=>(
          <div className="comment" key={comment.id}>
            <img src={comment.author.avatar} className="avatar" alt=""/>
            <p><span>{comment.author.name}</span> {comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostItem