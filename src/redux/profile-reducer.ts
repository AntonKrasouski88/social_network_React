import { ActionsType } from "./redux-store"


export type AddPostACType = ReturnType <typeof addPostAC>
export type UpdateNewPostACType = ReturnType <typeof updateNewPostAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const updateNewPostAC = (textPost: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        payload: {
            textPost
        }
    } as const
}

export type PostsType = {
    id: number,
    message: string,
    countLikes: number,
}

export type ProfilePageType = {
    posts: PostsType[],
    newPost: string,
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hello my friend!', countLikes: 5},
        {id: 2, message: 'How are you?', countLikes: 7},
        {id: 3, message: 'Do you look a new movie?', countLikes: 15},
        {id: 4, message: 'Yes, I do', countLikes: 21},
    ] as PostsType[],
    newPost: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            if(state.newPost.trim() !== '') {
                return {...state, 
                    posts: [...state.posts, {id: new Date().getTime(), message: state.newPost, countLikes: 0}],
                    newPost: ''};
            } else {
                return state
            }
            
        case 'UPDATE-NEW-POST':
            return {...state, newPost: action.payload.textPost}
        default:
            return state
    }
}
export default profileReducer