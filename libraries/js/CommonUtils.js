var React = require('react');
var $ = require('jquery');

var CommonUtils = (function () {
    return {
      showLoader: function () {
          //$('#loaderContainer').addClass('loading');
      },

      hideLoader: function () {
          //$('#loaderContainer').removeClass('loading');
      }
    };
})();

module.exports = CommonUtils;
