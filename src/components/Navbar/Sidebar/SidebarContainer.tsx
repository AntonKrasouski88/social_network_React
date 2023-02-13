import React from 'react'
import { StoreContext } from '../../../StoreContext'
import { Sidebar } from './Sidebar'

export const SidebarContainer = () => {
    return (
    <StoreContext.Consumer>
        {(store)=>{
            return (store.getState().sidebar.friends.map(el=><Sidebar key ={el.id} id ={el.id} name={el.name}/>))
        }}
        </StoreContext.Consumer>
    )}