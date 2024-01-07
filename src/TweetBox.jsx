import React, {useState} from 'react'
import Button from '@mui/material/Button';
import './TweetBox.css'
import { Avatar } from '@mui/material';
import db from './firebase.js'

const TweetBox = () => {

  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e =>{
    e.preventDefault();

    db.collection('posts').add({
      displayName: "MI AKASH",
      username: "miakash199",
      verified: true,
      text: tweetMessage,
      images: tweetImage,
      avatar: "https://lh3.googleusercontent.com/ogw/ANLem4aakt8KrVED1iuOjSy2JFeYuY_BZLx32FejsAOnVw=s32-c-mo"
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
      <form >
        <div className="tweetbox-input">
            <Avatar src='https://pbs.twimg.com/profile_images/1742893784097239040/lKu91SLp_400x400.jpg'/>
            <input 
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            type="text" 
            placeholder="What's happening?"
            />
        </div>
          <input 
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          type="text" 
          placeholder='Optional: Enter Image URL' className='tweetbox-imageInput'
          />
        <Button variant="outlined" className="tweetbox-button" type="submit" onClick={sendTweet} >Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
