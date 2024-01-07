import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from '@mui/material/Button';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}
        <TwitterIcon className='twitter-icon'/>

        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notification"/>
        <SidebarOption Icon={MailOutlineIcon} text="Message"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweet */}
        <Button variant="outlined" className="sidebar-tweet" fullWidth >Tweet</Button>
    </div>
  )
}

export default Sidebar
