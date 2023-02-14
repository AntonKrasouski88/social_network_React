import React from 'react'
import { StoreContext } from '../../../StoreContext'
import { Sidebar } from './Sidebar'

export const SidebarContainer = () => {
    return (
    <StoreContext.Consumer>
        {(store)=>{
            return (<Sidebar friends ={store.getState().sidebar.friends}/>)
        }}
        </StoreContext.Consumer>
    )}