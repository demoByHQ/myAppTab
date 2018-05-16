'use strict';
angular.module('handMobile')
  .factory('loginService', ['$http', '$q',
    function ($http, $q) {

      var userList = [
        {
          id: 0,
          username: 'admin',
          password: 'admin',
        },
        {
          id: 1,
          username: '111111',
          password: '111111',
        },
        {
          id: 2,
          username: '222222',
          password: '222222',
        },
        {
          id: 3,
          username: '333333',
          password: '333333',
        }];

      var response = {
        "success": "",
        "message": ""
      };
      return {
        getUser: function (params) {
          for (var i = 0; i < userList.length; i++) {
            if (params.username === userList[i].username) {
              if (params.password === userList[i].password) {
                response.success = true;
                response.message = "登录成功";
              } else {
                response.success = false;
                response.message = "密码错误";
              }
              return response
            }
          }
          response.success = false;
          response.message = "用户名不存在";
          return response;
        }
      }
    }]);
