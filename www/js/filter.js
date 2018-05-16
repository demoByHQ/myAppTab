/**
 * Created by admin
 */
'use strict';
angular.module('handMobile')
  .filter("dateFilter", function ($filter) {
    return function (oldDate) {
      var newDate = new Date(oldDate);
      return $filter('date')(newDate, "yyyy-MM-dd");
    };
  })
  .filter("dateTimeFilter", function ($filter) {
    return function (oldDate) {
      var newDate = new Date(oldDate);
      //转成指定格式
      return $filter('date')(newDate, 'yyyy-MM-dd HH:mm');
    };
  })

  //转换成html格式
  .filter('trustHtml', function ($sce) {
    return function (input) {
      return $sce.trustAsHtml(input);
    }
  })
  //合同审批记录特殊处理
  .filter('special', function ($sce) {
    return function (input) {
      var list = input.split('@@##@@');
      return list;
    }
  })
  //地方外事特殊处理 ；
  .filter('to_tru', function ($sce) {
    return function (text) {
      if (text === '' || text === "" || text === null) {
        return $sce.trustAsHtml(text);
      } else {
        var test = text.replace(/;/g, "<br/>");
        return $sce.trustAsHtml(test);
      }
    }
  });

