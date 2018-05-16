'use strict';
angular.module('handMobile')
  .factory('contactService', ['$http', '$q',
    function ($http, $q) {

      var contactList = [{
        id: 0,
        name: '张三',
        age: '21',
        sex: '男',
        phone: '15755367854',
        email: '343523131@qq.com',
      }, {
        id: 1,
        name: '李四',
        age: '17',
        sex: '男',
        phone: '15755367854',
        email: '343523131@qq.com',
      }, {
        id: 2,
        name: '王武',
        age: '21',
        sex: '男',
        phone: '15755367854',
        email: '343523131@qq.com',
      }, {
        id: 3,
        name: '小六',
        age: '24',
        sex: '男',
        phone: '15755367854',
        email: '343523131@qq.com',
      }
      ];
      return {
        allList: function () {
          return contactList;
        },

        add:function(){
          contactList.push(  {
            id: 1,
            name: '李四',
            age: '17',
            sex: '男',
            phone: '15755367854',
            email: '343523131@qq.com',
          });
          console.log(contactList);
          return  contactList;
        }
      }
    }]);
