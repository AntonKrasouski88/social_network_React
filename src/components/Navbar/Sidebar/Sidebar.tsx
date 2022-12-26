import React from 'react'

export type SidebarProps = {
    name: string
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <div>
        <div><img src="" alt="" /></div>
        <div>{props.name}</div>
    </div>
    
  )
}
