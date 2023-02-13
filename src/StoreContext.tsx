import React from 'react'
import { StoreType } from './redux/store'

export const StoreContext = React.createContext({} as StoreType);

type ProviderType = {
    state: StoreType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value = {props.state}>
            {props.children}
        </StoreContext.Provider>
    )
}
