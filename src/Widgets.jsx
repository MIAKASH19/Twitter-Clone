import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';

import { 
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <div className="widgets-searchIcon">
          <SearchIcon />
        </div>
        <input type="text" placeholder='Search Twitter' />
      </div>
      <div className="widgets-widgetscontainer">
      <h2>What's happening?</h2>
      <TwitterTweetEmbed tweetId={"1742938882092695736"} />
      <TwitterTimelineEmbed 
      sourceType='profile'
      screenName='ElonMuskAOC'
      options={{heigth: 200}} />

      <TwitterShareButton url={"https://www.facebook.com/mazaharul.islam.98434"} options={{ text: "#this clone is awesome", via: "miakash"}}/>


      </div>
    </div>
  )
}

export default Widgets

