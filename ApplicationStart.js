var $ = require('jquery');
var React = require('react');
var ModuleDataLoader = require('./screen/homeScreen/utils/ModuleDataLoader');

require("./libraries/css/bootstrap/bootstrap.css");
require("./libraries/css/font-awesome.css");
require("./libraries/css/alertify/alertify.core.css");
require("./libraries/css/alertify/alertify.bootstrap.css");

require("./views/contentView/carouselView/css/carousel.css");
require("./screen/homeScreen/css/style.css");
require("./screen/contentScreen/css/productScreen.css");

require("./screen/homeScreen/css/style.css");


var HomeScreenController = require('./screen/homeScreen/HomeScreenController');
var HomeScreenStore = require('./screen/homeScreen/HomeScreenStore');
var Loader = require('./views/loaderView/loaderView');

$(document).ready(function () {
    loadContent();
    ModuleDataLoader.loadDataFromNetwork('Content');
});


function loadContent() {
    var $mainContainer = $('#MainContainerBody').get(0);
    React.render(<HomeScreenController store={HomeScreenStore}/>, $mainContainer);
    React.render(<Loader />, $('#loaderContainer').get(0));
}