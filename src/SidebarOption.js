import React from 'react'
import "./SidebarOption"
import "./sidebaroption.css"
const SidebarOption = ({title, Icon}) => {
  return (
    <div className='sidebaroption'>
      {Icon && <Icon className = "sidebarOption__icons"/>}
      {Icon ? <h4>{title}</h4>:<p>{title}</p>}
    </div>
  )
}

export default SidebarOption