import "./sidebar.css"
import React from 'react'
import RssFeed  from "@mui/icons-material/RssFeed"
import Fitbit from '@mui/icons-material/Fitbit';
import Group from "@mui/icons-material/Group"
import Event from '@mui/icons-material/Event';
import CalendarToday from '@mui/icons-material/CalendarToday';
import EventAvailable from '@mui/icons-material/EventAvailable';
import AccessTime from '@mui/icons-material/AccessTime';
import HelpOutline  from "@mui/icons-material/HelpOutline"
import WorkOutline  from "@mui/icons-material/WorkOutline"
import School  from "@mui/icons-material/School"
import Groups from '@mui/icons-material/Groups';
import PlayCircleFilledOutlined  from "@mui/icons-material/PlayCircleFilledOutlined"
import Apartment from '@mui/icons-material/Apartment';
import AccountBox from '@mui/icons-material/AccountBox';
import Forest from '@mui/icons-material/Forest';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Gite from '@mui/icons-material/Gite';
import  {Users}  from "../../user-data"
import  {Posts}  from "../../user-data"
export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="wrapper">
        <ul className="list">
        
          <li className="list-object">
            <RssFeed className="icon" />
            <span className="text">Feed</span>
          </li>
          <li className="list-object">
            <Fitbit className="icon" />
            <span className="text">Hobbies</span>
          </li>
          <li className="list-object">
            <Apartment className="icon" />
            <span className="text">Organizations</span>
          </li>
        
          <li className="list-object">
            <Event className="icon" />
            <span className="text">Events</span>
          </li>
          <li className="list-object">
            <AccountBox className="icon" />
            <span className="text">Edit Profile Info</span>
          </li>
        </ul>
        
        <div clasName="add-space"></div>
        <ul className="community">
        <ul className="list">
        <li className="list-object">
            <Group className="icon"/>
            <p className="heading">Friends</p>
          </li>
        </ul>
          
            <li className="friend">
            
            
            <span className="friend-name">{Users[0].username}</span>
            </li>
       
         
        </ul>
        
        <div className="upcoming-events">
        <ul className="list">
        <li className="list-object">
            <EventAvailable className="icon"/>
            <p className="heading">Upcoming Events</p>
          </li>
        </ul>
          
          
          <Forest className="icon" />
          <span className="text">Plantation Drive</span><br/>
          <Gite className="icon"/>
          <span className="text">Organizer : SOS</span><br/>
          <CalendarToday className="icon"/>
          <span className="text">Date: 2nd January 2023</span><br/>
          <AccessTime className="icon"></AccessTime>
          <span className="text">Time : 11:00 AM</span><br/>
          <FavoriteBorder className="icon"/>
          <span className="text">Interested</span>

        </div>
      </div>
    </div>
  )
}
