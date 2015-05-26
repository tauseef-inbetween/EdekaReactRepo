jest.dontMock('../../views/menuView/MenuItemView');

describe('Menu Item', function () {

    var React = require('react/addons');
    var MenuItemView = require('../../views/menuView/MenuItemView');
    var TestUtils = React.addons.TestUtils;
    var menuItem = {title: "Calender", iconClass: "glyphicon glyphicon-calendar", isActive: true, canCreate: false};

    it('must be a composite component', function () {

        var myMethod = jest.genMockFunction().mockReturnThis();
        var MenuItem = TestUtils.renderIntoDocument(
            <MenuItemView menuItem={menuItem} onClick={myMethod}/>
        );

        expect(TestUtils.isElement (MenuItem)).not.toBe(true);
        expect(TestUtils.isDOMComponent (MenuItem)).not.toBe(true);
        expect(TestUtils.isCompositeComponent  (MenuItem)).toBe(true);

    });


    it('must call mocked function on click ', function () {
        //It creates a mocked function and return this
        var myMethod = jest.genMockFunction().mockReturnThis();
        var MenuItem = TestUtils.renderIntoDocument(
            <MenuItemView menuItem={menuItem} onClick={myMethod}/>
        );
        TestUtils.Simulate.click(MenuItem.getDOMNode());
        TestUtils.Simulate.click(MenuItem.getDOMNode());
        TestUtils.Simulate.click(MenuItem.getDOMNode());
        console.log("\nNumber of times mocked function is called : " + myMethod.mock.calls.length + "\n");
        expect(myMethod.mock.calls.length).toBeGreaterThan(0);
    });


});
