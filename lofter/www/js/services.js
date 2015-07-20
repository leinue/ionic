angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Notifications',
    lastText: 'You on your way?',
    icon: 'ion-android-volume-up calm'
  }, {
    id: 1,
    name: 'Comments',
    lastText: 'Hey, it\'s me',
    icon: 'ion-android-chat balanced'
  }, {
    id: 2,
    name: 'Topics',
    lastText: 'I should buy a boat',
    icon: 'ion-android-document royal'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
