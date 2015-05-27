jest.dontMock('jquery').dontMock('jquery-ui')
    .dontMock('../../../libraries/js/jquery/jquery.layout.js').dontMock('lodash')
    .dontMock('../../../views/contentView/contentNoteView/ContentNoteView.js')
    .dontMock('../../../views/contentView/contentNoteView/NoteList')
    .dontMock('../../../views/contentView/contentNoteView/NoteRow')
    .dontMock('../../../screen/contentScreen/ContentStore')
    .dontMock('../../../screen/contentScreen/ContentAction')
    .dontMock('../../../screen/contentScreen/utils/ContentUtils')
    .dontMock('../../../screen/contentScreen/ContentApplicationData')
    .dontMock('../../../screen/contentScreen/ContentComponentProperties')
    .dontMock('../../../screen/contentScreen/ContentScreenController')
    .dontMock('../../../tacks/MockDataForProducts.json')
    .dontMock('../../../tacks/MockDataForContent.js')
    .dontMock('../../../screen/contentScreen/utils/ContentCallbacks')
    .dontMock('../../../libraries/js/flux/MicroEvent');


var React = require('react/addons');
var ReactJestUtil = require('react-jest-util');
var TestUtils = React.addons.TestUtils;
var ContentStore = require('../../../screen/contentScreen/ContentStore');
var MockDataForProducts = require('../../../tacks/MockDataForProducts.json');
var MockData = require('../../../tacks/MockDataForContent.js');
var ContentComponentProperties = require('../../../screen/contentScreen/ContentComponentProperties');
var ContentCallbacks = require('../../../screen/contentScreen/utils/ContentCallbacks');
var ContentNoteView = require('../../../views/contentView/contentNoteView/ContentNoteView.js');
var products = [];

describe("Content Note view", function () {

    beforeEach(function () {
        products = JSON.stringify(MockDataForProducts);
        ContentCallbacks.getAllProductsCallBack(products);
        setSelectedProduct(19, 0);

        this.data = ContentStore.getData();
        this.contentViewMode = this.data.componentProps.getContentViewMode();
        this.selectedProps = this.data.componentProps.getSelectedProps();
        this.productClasses = MockData.productClasses;

        this.contentNoteView = TestUtils.renderIntoDocument(
            <ContentNoteView contentViewMode={this.contentViewMode} selectedProps={this.selectedProps} productClasses={this.productClasses} />
        );
    });

    it("is composite component", function () {
        expect(TestUtils.isCompositeComponent  (this.contentNoteView)).toBe(true);
    });

    it('have have selected product', function () {
        expect(this.contentNoteView.refs.noteList.props.selectedProduct.id).toBe(19);
    });

    it('have notes in it', function () {
        expect(this.contentNoteView.refs.noteList.props.selectedProduct.notes.length).toBeGreaterThan(0);
    });

    it('must change note value on change', function () {
        //Gives array of elements having class textBox in contentNoteView Component
        var notes = TestUtils.scryRenderedDOMComponentsWithClass(this.contentNoteView, "textBox");
        expect(this.selectedProps.selectedProduct.notes[0].values[0].value).toBe("Untitled_19");
        TestUtils.Simulate.change(notes[0].getDOMNode(),{target: {value: 'New value'}});
        expect(this.selectedProps.selectedProduct.notes[0].values[0].value).toBe("New value");
    });
    it('click on add to show popover', function () {

        expect(this.selectedProps.selectedProduct.notes.length).toBe(1);

        var addButton = TestUtils.findRenderedDOMComponentWithClass(this.contentNoteView, 'btnAddNote');
        TestUtils.Simulate.click(addButton.getDOMNode());

        //Can not use scryRenderedDOMComp in this case because popover gets rendered after click of button [can be accessed through refs]
        var addTitle = TestUtils.scryRenderedDOMComponentsWithClass(this.contentNoteView, 'productClassGroup');

        addTitle = this.contentNoteView.refs.noteList.refs.popup0;
        TestUtils.Simulate.click(addTitle.getDOMNode());

        this.selectedProps = this.data.componentProps.getSelectedProps();
        //console.log(this.selectedProps.selectedProduct.notes);
        expect(this.selectedProps.selectedProduct.notes.length).toBe(2);
    });
});

function setSelectedProduct(productId, index) {
    ContentStore.setSelectedProduct(ContentStore.getProductById(productId));
    ContentStore.setSelectedIndex(index);
    ContentStore.setContentViewModeWithTrigger('editMode');
}