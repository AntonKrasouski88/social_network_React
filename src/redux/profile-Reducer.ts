import {ActionsType, PostsType, ProfilePageType} from "./state";

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

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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