$(document).ready(function () {

    loadContent();

});

function loadContent() {

    var $mainContainer = $('#MainContainerBody').get(0);
    React.render(<MainContainer />, $mainContainer);

}