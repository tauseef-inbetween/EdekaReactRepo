jest.dontMock('../views/menuView/MenuItemView');
describe('Menu Item', function () {
    it('should be called', function () {

        var React = require('react/addons');
        var MenuItemView = require('../views/menuView/MenuItemView');
        var TestUtilities = require('../TestUtilities');

        var TestUtils = React.addons.TestUtils;

        var menuItem = {title: "Calender", iconClass: "glyphicon glyphicon-calendar", isActive: true, canCreate: false};

        // Render a checkbox with label in the document
        var MenuItem = TestUtils.renderIntoDocument(
            <MenuItemView menuItem={menuItem} onClick={TestUtilities.menuItemClicked}/>
        );

        TestUtils.Simulate.click(MenuItem.getDOMNode());

        expect(TestUtilities.menuItemClicked).toBeCalled();
        expect(TestUtilities.menuItemClicked).not.toBeCalled();

    });
});



