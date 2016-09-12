
angular.module('otherApp')
.factory('userListService', function () {
    var userListService = {
        users: [],
        userprofile: [{ id: 1, firstname: 'Lainel', middlename: 'John', lastname: 'Dela Cruz', age: 21, birthday: '12-05-1994' },
        ],
        newUserRegistration:{}, //this is where the new registered user data will be stored
        concerns: [],
        inbox: [],
        newConcern: [{ title: 'Hello', subject: 'Product', message: 'What the hell is this', username: '' }],
        slideImage: [],
        news: [],
        verification: [],
    };
    return userListService;
});