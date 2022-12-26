export const state = {
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
      }
  }