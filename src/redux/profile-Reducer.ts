import {ActionsType, PostsType, ProfilePageType} from "./store";

export type AddPostACType = ReturnType <typeof addPostAC>
export type UpdateNewPostACType = ReturnType <typeof updateNewPostAC>

export const addPostAC = (post: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            post
        }
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

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hello my friend!', countLikes: 5},
        {id: 2, message: 'How are you?', countLikes: 7},
        {id: 3, message: 'Do you look a new movie?', countLikes: 15},
        {id: 4, message: 'Yes, I do', countLikes: 21},
    ],
    newPost: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newTextPost: PostsType = {id: new Date().getTime(), message: action.payload.post, countLikes: 0}
            state.posts.push(newTextPost);
            state.newPost = ''
            return state
        case 'UPDATE-NEW-POST':
            state.newPost = action.payload.textPost;
            return state
        default:
            return state
    }
}

export default profileReducer