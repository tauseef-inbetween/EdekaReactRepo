jest.dontMock('../screen/homeScreen/menuBar/MenuBar')
    .dontMock('../screen/homeScreen/menuBar/MenuStore')
    .dontMock('../screen/homeScreen/menuBar/MenuActions')
    .dontMock('../screen/homeScreen/menuBar/MenuStoreModel')
    .dontMock('../views/menuView/MenuItemView')
    .dontMock('../libraries/js/flux/MicroEvent');

describe('Menu Bar', function () {

    var React = require('react/addons');
    var MenuBar = require('../screen/homeScreen/menuBar/MenuBar');
    var MenuItemView = require('../views/menuView/MenuItemView');

    var MenuStore = require('../screen/homeScreen/menuBar/MenuStore');
    var MenuActions = require('../screen/homeScreen/menuBar/MenuActions');
    var MenuStoreModel = require('../screen/homeScreen/menuBar/MenuStoreModel');

    var TestUtils = React.addons.TestUtils;

    it('must be a composite component', function () {

        var menuBar = TestUtils.renderIntoDocument(
            <MenuBar store={MenuStore} />
        );

        var elem = React.createElement('div');
        expect(TestUtils.isElement (elem)).toBe(true);

        expect(TestUtils.isElement (menuBar)).not.toBe(true);
        expect(TestUtils.isDOMComponent (menuBar)).not.toBe(true);
        expect(TestUtils.isCompositeComponent  (menuBar)).toBe(true);

    });

    it('should allow to click on Menu Item', function () {

        var menuBar = TestUtils.renderIntoDocument(
            <MenuBar store={MenuStore} />
        );
        console.log(menuBar.getDOMNode());

        /*var menuItem = menuBar.refs.item0.getDOMNode();

        TestUtils.Simulate.click(menuItem);

        expect(menuItem.props.menuItem.isActive).toBe(true);*/
    });

});
