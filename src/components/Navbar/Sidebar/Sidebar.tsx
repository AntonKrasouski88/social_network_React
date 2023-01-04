import React from 'react';
import person from '../../../img/logo/person.png'
import s from './Sidebar.module.css'

export type SidebarProps = {
    name: string
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <div className='s.wrapper'>
        <div className={s.blockImg}><img src={person} alt="img_person" /></div>
        <div className={s.name}>{props.name}</div>
    </div>
    
  )
}
