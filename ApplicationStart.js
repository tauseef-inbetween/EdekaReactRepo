var $ = require('jquery');
var React = require('react/addons');

var HomeScreenController = require('./screen/homeScreen/HomeScreenController.js');
var HomeScreenStore = require('./screen/homeScreen/HomeScreenStore.js');

$(document).ready(function () {
    loadContent();
});

function loadContent() {
    var $mainContainer = $('#MainContainerBody').get(0);
    React.render(<HomeScreenController store={HomeScreenStore}/>, $mainContainer);
}