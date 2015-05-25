var $ = require('jquery');
var React = require('react');

var HomeScreenController = require('./screen/homeScreen/HomeScreenController');
var HomeScreenStore = require('./screen/homeScreen/HomeScreenStore');

$(document).ready(function () {
    loadContent();
});

function loadContent() {
    var $mainContainer = $('#MainContainerBody').get(0);
    React.render(<HomeScreenController store={HomeScreenStore}/>, $mainContainer);
}