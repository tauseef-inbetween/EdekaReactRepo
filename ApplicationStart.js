var $ = require('jquery');
var React = require('react');

require("./libraries/css/bootstrap/bootstrap.css");
require("./libraries/css/font-awesome.css");
require("./libraries/css/alertify/alertify.core.css");
require("./libraries/css/alertify/alertify.bootstrap.css");

require("./screen/homeScreen/css/style.css");


var HomeScreenController = require('./screen/homeScreen/HomeScreenController');
var HomeScreenStore = require('./screen/homeScreen/HomeScreenStore');

$(document).ready(function () {
    loadContent();
});


function loadContent() {
    var $mainContainer = $('#MainContainerBody').get(0);
    React.render(<HomeScreenController store={HomeScreenStore}/>, $mainContainer);
}