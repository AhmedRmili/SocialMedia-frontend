import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar' 
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
export default function Home() {
  return (
    <div>
<Topbar/>
<div className='homecontainer'>
<Sidebar/>
<Feed/>
<Rightbar/>
    </div>
    </div>
  )
}
