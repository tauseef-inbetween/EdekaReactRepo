var $ = require('jquery');
var React = require('react');
var ModuleDataLoader = require('./screen/homeScreen/utils/ModuleDataLoader');

require("./libraries/css/bootstrap/bootstrap.css");
require("./libraries/css/font-awesome.css");
require("./libraries/css/alertify/alertify.core.css");
require("./libraries/css/alertify/alertify.bootstrap.css");

require("./views/contentView/carouselView/css/carousel.css");
require("./screen/contentScreen/css/productScreen.css");

//require("./screen/homeScreen/css/style.css");

require("./libraries/scss/homescreen/home_screen.scss");


var HomeScreenController = require('./screen/homeScreen/HomeScreenController');
var HomeScreenStore = require('./screen/homeScreen/HomeScreenStore');
var Loader = require('./views/loaderView/loaderView');

$(document).ready(function () {
    loadContent();
    ModuleDataLoader.loadDataFromNetwork('Content');

    /*$('body').on('click', function(event) {
        var className = document.querySelector('body').className;
        if(className == 'dark'){
            document.querySelector('body').className = 'light';
        } else if(className == 'light'){
            document.querySelector('body').className = 'default';
        } else {
            document.querySelector('body').className = 'dark';
        }
    })*/
});


function loadContent() {
    var $mainContainer = $('#MainContainerBody').get(0);
    React.render(<HomeScreenController store={HomeScreenStore}/>, $mainContainer);
    React.render(<Loader />, $('#loaderContainer').get(0));
    loadTheme();
}