import React from 'react';
import { UsersContainerType } from './UsersContainer';
import style from './Users.module.css'

export const Users = (props: UsersContainerType) => {
    if(props.state.length === 0) {
        props.setUser([
            {
                id: 1, 
                fotoUser:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
                userName: 'Dmitry',
                follower: true,
                status: 'never give up',
                location: {
                    country: 'Canada',
                    sity: 'Toronto'
                }
            },
            {
                id: 2, 
                fotoUser:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                userName: 'Kristin',
                follower: false,
                status: 'never give up',
                location: {
                    country: 'Germany',
                    sity: 'Munich'
                }
            },
            {
                id: 3, 
                fotoUser:'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                userName: 'Jan',
                follower: true,
                status: 'never give up',
                location: {
                    country: 'Canada',
                    sity: 'Toronto'
                }
            },
        ])
    }
    
    
    const drawUsers = props.state.map(el=> {
        const onClikcHandlerUnfollow = ()=> {
            props.unfollow(el.id, false)
        }
        const onClikcHandlerFollow = ()=> {
            props.unfollow(el.id, true)
        }

        return (
            <div key = {el.id}>
            <span>
                <img src={el.fotoUser} className={style.foroUser} alt="user_foto" />
                {el.follower ? <button onClick={onClikcHandlerUnfollow}>Follow</button> :
                 <button onClick={onClikcHandlerFollow}>Unfollow</button>}
            </span>
            <span>
                <span>
                    <div>{el.userName}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                    <div>{el.location.country}</div>
                    <div>{el.location.sity}</div>
                </span>
            </span>
        </div>
        )
    })
    return (
        <div>
            {drawUsers}
        </div>
    );
};