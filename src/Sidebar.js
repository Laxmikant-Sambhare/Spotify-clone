import React from 'react'
import SidebarOption from './SidebarOption'
import './Sidebar.css'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './Datalayer'
const Sidebar = () => {
    const [{playlists}] = useDataLayerValue();
  return (
    <div className='Sidebar'>
       <img 
       className='sidbar__logo'
       src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt= "logo"/> 
       <SidebarOption Icon={HomeIcon} title="Home"/> 
       <SidebarOption Icon={SearchIcon} title="Search"/> 
       <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/> 

       <br/>
       <strong className='sidebar__title'>PLAYLIST</strong>
       <hr/>
       {
        playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name}/>
        ))
        }
    </div>
  )
}

export default Sidebar