var HomeScreenController = React.createClass({

    propTypes: {
        store: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            screens: []
        }
    },

    listStateChanged: function () {
        this.setState({screens: this.props.store.getData()});
    },

    componentWillMount: function () {
        this.setState({screens: this.props.store.getData()});
    },

    //Binding Store to state change on Mount of Component
    componentDidMount: function () {
        this.props.store.bind('change', this.listStateChanged);
    },

    //UnBinding Store to state change on UnMount of Component
    componentWillUnmount: function () {
        this.props.store.unbind('change', this.listStateChanged);
    },

    render: function () {

        var screenDisplayClasses = _.map(this.state.screens, function (item) {
            return ('screen ' + (item.isSelected ? 'showScreen' : 'hideScreen'));
        });

        return (
            <div id="MainContainer">
                <div id="menuContainer">
                    <MenuBar ref="menuBar" store={MenuStore}/>
                </div>
                <div id="moduleContainer">
                    <CalendarScreenController ref="calenderScreen" key="0" className={screenDisplayClasses[0]}/>
                    <CampaignScreenController ref="campaignScreen" key="1" className={screenDisplayClasses[1]}/>
                    <TemplateScreenController ref="templateScreen" key="2" className={screenDisplayClasses[2]}/>
                    <PromotionScreenController ref="promotionScreen" key="3" className={screenDisplayClasses[3]}/>
                    <AssortmentScreenController ref="assortmentScreen" key="4" className={screenDisplayClasses[4]}/>
                    <ContentScreenController ref="contentScreen" key="5" className={screenDisplayClasses[5]} store={ContentStore}/>
                    <TargetScreenController ref="targetScreen" key="6" className={screenDisplayClasses[6]}/>
                    <ReportScreenController ref="reportScreen" key="7" className={screenDisplayClasses[7]}/>
                </div>
            </div>
        );
    }
});