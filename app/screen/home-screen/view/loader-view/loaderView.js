var React = require('react');
var CircularProgress = require('material-ui').CircularProgress;
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');

var Loader = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    componentWillMount: function() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
    },

    render: function() {

        var containerStyle = {
            'height': '100%',
            'width': '100%',
            'position': 'absolute'
        };

        var maskStyle = {
            'height': '100%',
            'width': '100%',
            'position': 'absolute',
            'backgroundColor': 'black',
            'opacity': '0.8',
            'top': '0'
        };

        var progressStyle = {
            'top': '50%',
            'left': '50%'
        };

        return (
            <div style={containerStyle}>
                <div className="loaderMask" style={maskStyle}></div>
                <CircularProgress style={progressStyle} mode="indeterminate" size={1} />
            </div>
        );
    },

});

module.exports = Loader;