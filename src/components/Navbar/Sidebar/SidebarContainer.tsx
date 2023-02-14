import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'
import { FriendsType } from '../../../redux/sidebar-reducer'
import { Sidebar } from './Sidebar'

/* export const SidebarContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return (<Sidebar friends={store.getState().sidebar.friends} />)
            }}
        </StoreContext.Consumer>
    )
}
 */

type MapToStatePropsType = {
    friends: FriendsType[]
}

const mapToStatetoProps = (state: AppStateType) => {
    return (
        {
            friends: state.sidebar.friends
        }
    )
}

export type SidebarPropsType = MapToStatePropsType

export const SidebarContainer = connect(mapToStatetoProps)(Sidebar)