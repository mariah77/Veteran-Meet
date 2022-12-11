import "./topnavbar.css"
import React from 'react'
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Notifications from '@mui/icons-material/Notifications';
import Stars from '@mui/icons-material/Stars';
import AddCircle from '@mui/icons-material/AddCircle';
export default function TopNavBar() {
  return (
    <body>
    <div className="containert">
       <div className = "leftt">
           <span className="logot">VeteranMeet</span>
       </div>
       <div className = "centert">
           <div className="search-bart">
               <Search className="searchicont" />
               <input placeholder="Search..." className="search-inputt"/>
           </div>
       </div>
       <div className = "rightt">
           <div className="linkst">
               
           </div>
           <div className="Iconst">
           <div className="topnavbar-icont">
               <Person/>
               <span className="Icon-numbert">1</span>
           </div>
           <div className="topnavbar-icont">
               <Notifications/>
               <span className="Icon-numbert">1</span>
           </div>
           <div className="topnavbar-icont">
               <AddCircle/>
           </div>
           <div className="topnavbar-icont">
               <Stars/>
               <span className="textn">Silver Veteran</span>
          
           </div>
           </div>
       <img src="/assets/1.jpg" className="img-topt" width="50px" height="50px"/>
           
       </div>
    </div>
    </body>
  )
}
