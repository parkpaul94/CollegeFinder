module.exports = {

    isLoggedIn: () => {
        return {
            type: 'IS_LOGGED_IN'
          };
    },

    notLoggedIn: () => {
        return {
            type: 'NOT_LOGGED_IN'
          };
    },

    currentUser: (name, email) => {
        return {
            type: 'CURRENT_USER',
            name,
            email
          };
    },

    flashMessage: (messages) => {
        return {
            type: 'FLASH_MESSAGE',
            messages
          };
    },

    deleteMsg: (messages) => {
        return {
            type: 'DELETE_MESSAGE',
            messages
          };
    },

}
