export type DialogsType = {
  id: number,
  name: string,
}
export type MessagesType = {
  id: number,
  message: string,
}

export type PostsType = {
  id: number,
  message: string,
  countLikes: number,
}
export type FriendsType = {
  id: number,
  name: string,
}
export type DialogsPageType = {
  dialogs: DialogsType[],
  messages: MessagesType[],
}
export type ProfilePageType = {
  posts: PostsType[],
}
export type SidebarType = {
  friends: FriendsType[]
}
export type RootStateType = {
  dialogsPage: DialogsPageType,
  profilePage: ProfilePageType,
  sidebar: SidebarType,
}


export const state: RootStateType = {
      dialogsPage: {
        dialogs: [
            {id: 1, name: 'Kristina'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Lina'},
            {id: 4, name: 'Bob'},
            {id: 5, name: 'Jan'},
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I will call you back'},
            {id: 4, message: 'YO!!!'},
            {id: 5, message: 'YO!!!'},
          ]
      },
      profilePage: {
        posts: [
          {id: 1, message: 'Hello my friend!', countLikes: 5},
          {id: 2, message: 'How are you?', countLikes: 7},
          {id: 3, message: 'Do you look a new movie?', countLikes: 15},
          {id: 4, message: 'Yes, I do', countLikes: 21},
        ]
      },
      sidebar: {
         friends: [
          {id: 1, name: 'Ilona'},
          {id: 2, name: 'Andrey'},
          {id: 3, name: 'Sveta'},
         ] 
      },
  }

export const addPost = (post: string) => {
  let newPost = {id: 5, message: post, countLikes: 0};
  state.profilePage.posts.push(newPost);
}

export const addMessage = (message: string) => {
  let newMessage = {id: 6, message: message};
  state.dialogsPage.messages.push(newMessage);
}