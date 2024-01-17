import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CommentList({postId}) {
    const [comments , setComments] = useState([]);

    useEffect(() => {
        fetchComments()
    })

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(res.data)
    }

  return (
    <ul className='list-disc'>
        {
            comments.map((comment) => {
                return (
                    <li className='ml-8' key={comment.id}><h1>{comment.content}</h1></li>
                )
            })
        }
    </ul>
  )
}

export default CommentList