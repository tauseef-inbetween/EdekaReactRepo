var MainContainer = React.createClass({

    propTypes: {

    },

    getInitialState: function () {
        return {
            screens: []
        }
    },

    listStateChanged: function () {
        this.setState({screens: MainContainerStore.getAllData()});
    },

    componentWillMount: function () {
        this.setState({screens: MainContainerStore.getAllData()});
    },

    componentDidMount: function () {

        MainContainerStore.bind('change', this.listStateChanged);
    },

    componentWillUnmount: function () {
        MainContainerStore.unbind('change', this.listStateChanged);
    },

    render: function () {
        var screenDisplayClasses = _.map(this.state.screens, function (item) {
            return ('screen ' + (item.isSelected ? 'showScreen' : 'hideScreen'));
        });
        return (
            <div id="MainContainer">
                <div id="menuContainer">
                    <Menu ref="menuBar"/>
                </div>
                <div id="moduleContainer">
                    <Calender ref="calenderScreen" key="0" className={screenDisplayClasses[0]}/>
                    <Campaign ref="campaignScreen" key="1" className={screenDisplayClasses[1]}/>
                    <Template ref="templateScreen" key="2" className={screenDisplayClasses[2]}/>
                    <Promotion ref="promotionScreen" key="3" className={screenDisplayClasses[3]}/>
                    <Assortment ref="assortmentScreen" key="4" className={screenDisplayClasses[4]}/>
                    <Content ref="contentScreen" key="5" className={screenDisplayClasses[5]}/>
                    <Target ref="targetScreen" key="6" className={screenDisplayClasses[6]}/>
                    <Report ref="reportScreen" key="7" className={screenDisplayClasses[7]}/>
                </div>
            </div>
        );
    }
});