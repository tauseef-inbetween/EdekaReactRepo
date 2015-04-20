var ProductEditInfoScreen = React.createClass({
    componentDidMount: function () {
        initialiseLayouts();
    },
    render: function () {
        return (
            <div id="ProductEditInfoScreen" ref="ProductEditInfoScreen">
                <div id="centerDOM" className="ui-layout-center" ref="centerDOM" key="1">Center</div>
                <div id="northDOM" className="ui-layout-north" ref="northDOM" key="2">
                    <div id="centerOwlContainer"></div>
                    <div id="basicProductInfoContainer"></div>
                </div>
                <div id="eastDOM" className="ui-layout-east" ref="eastDOM" key="4">East</div>
                <div id="westDOM" className="ui-layout-west" ref="westDOM" key="5">West</div>

            </div>
        );
    }
});