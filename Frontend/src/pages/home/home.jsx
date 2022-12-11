import React from 'react'
import SideBar from '../../components/sidebar/sidebar'
import TopNavBar from '../../components/topnavbar/topnavbar'
import Main from '../../components/main/main'
export default function Home() {
  return (
    <>
       <TopNavBar/>
       <div className="wrapper2">
           <SideBar/>
           <Main/>
       </div>
    </>
    
    
    
  )
}
