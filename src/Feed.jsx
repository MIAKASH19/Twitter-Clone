import React, {useEffect, useState} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase.js'
import FlipMove from 'react-flip-move'

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  },[])

  return (
    <div className="feed">
      {/* Header */}
        <div className="feed-header">
            <h2>Home</h2>
        </div>
      {/* TweetBox */}
        <TweetBox />
      <FlipMove>
      {posts.map(post => (
          <Post 
          key={post.username}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.images}
        />
      ))}
      </FlipMove>
    </div>
  )
}

export default Feed
