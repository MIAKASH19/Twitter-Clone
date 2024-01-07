import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material';
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublicIcon from '@mui/icons-material/Public'


const Post = forwardRef(({
    displayName, 
    username,
    verified,
    text, 
    image,
    avatar
}, ref) => {
  return (
    <div className='post' ref={ref}>
      <div className="post-avatar">
      <Avatar src={avatar}/>
      </div>
      <div className="post-body">
        <div className="post-header">
            <div className="post-headerText">
                <h3>{displayName}{" "} 
                    <span className="post-headerspecial">
                        {verified && <VerifiedIcon className="post-badge"/>}
                        @{username}
                    </span>
                </h3>
            </div>
            <div className="post-headerdesc">
                <p>{text}</p>
            </div>
        </div>
        <img src={image} alt="" />
        <div className="post-footer">
          <ChatBubbleOutlineOutlinedIcon />
          <EventRepeatIcon />
          <FavoriteBorderIcon />
          <PublicIcon />
        </div>
      </div>
    </div>
  )
});

export default Post