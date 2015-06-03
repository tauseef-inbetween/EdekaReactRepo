/* ----------
 * Rendering our component server side
 */
var React = require('react');
require("node-jsx").install({ extension: ".js" });

var HomeScreenController = require('../screen/homeScreen/HomeScreenController');
var HomeScreenStore = require('../screen/homeScreen/HomeScreenStore');
var ModuleDataLoader = require('../screen/homeScreen/utils/ModuleDataLoader');
ModuleDataLoader.loadDataFromNetwork('Content');

// Since we're not using JSX here, we need to wrap the component in a factory
var HomeScreenControllerFactory = React.createFactory(HomeScreenController);

var renderedComponent = React.renderToString(
    HomeScreenControllerFactory({store: HomeScreenStore})
);



/* ----------
 * Injecting the rendered component in the Handlebars template
 */
var Handlebars = require('handlebars');
var fs = require('fs');

var fileData = fs.readFileSync(__dirname + '/templates/layout.handlebars').toString();
var layoutTemplate = Handlebars.compile(fileData);

var renderedLayout = layoutTemplate({
  content: renderedComponent
});



/* ----------
 * Serving up the rendered template
 */
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send(renderedLayout);
});

// NOTE: This route is last since we want to match the dynamic routes above
// first before attempting to match a static resource (js/css/etc)
app.use(express.static('./'));

app.listen(3200, function() {
  console.log("Listening on port 3200");
});
