import React from 'react';
import person from '../../../img/logo/person.png'
import s from './Sidebar.module.css'
import { SidebarPropsType } from './SidebarContainer';

/* type SidebarFrindsProps = {
  friends: FriendsType[]
} */

export const Sidebar = (props: SidebarPropsType) => {
  const lookFriends = props.friends.map(el=> {
    return (
      <div key = {el.id}>
        <div className={s.blockImg}><img src={person} alt="img_person" /></div>
        <div className={s.name}>{el.name}</div>
      </div>
        
    )
  })
  return (
    <>
    {lookFriends}
    </>
    
    )
}
