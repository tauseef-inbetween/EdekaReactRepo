jest.dontMock('jquery').dontMock('jquery-ui').dontMock('lodash')
    .dontMock('../../../screen/contentScreen/ContentStore')
    /*.dontMock('../../../screen/contentScreen/ContentAction')*/
    .dontMock('../../../screen/contentScreen/ContentApplicationData')
    .dontMock('../../../screen/contentScreen/ContentComponentProperties')
    .dontMock('../../../screen/contentScreen/ContentScreenController')
    .dontMock('../../../libraries/js/flux/MicroEvent')
    .dontMock('../../../screen/contentScreen/utils/ContentUtils')
    .dontMock('../../../screen/contentScreen/utils/ContentCallbacks')
    .dontMock('../../../tacks/MockDataForProducts.json')
    .dontMock('../../../tacks/MockDataForContent')
    .dontMock('../../../views/contentView/contentInfoScreenView/ContentInfoScreenView')
    .dontMock('../../../views/contentView/thumbnailView/ThumbnailView')
    .dontMock('../../../views/contentView/contentBasicInfoFormView/ContentBasicInfoFormView')
    .dontMock('../../../views/contentView/carouselView/CarouselActionControlView')
    .dontMock('../../../views/contentView/carouselView/CarouselView')
    .dontMock('../../../views/contentView/thumbnailView/ContentThumbnail')
    .dontMock('../../../views/contentView/contentNoteView/ContentNoteView')
    .dontMock('../../../views/contentView/contentNoteView/NoteList')
    .dontMock('../../../views/contentView/contentNoteView/NoteRow');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var MockData = require('../../../tacks/MockDataForContent.js');
var $ = require('jquery');
var ContentScreenController = require('../../../screen/contentScreen/ContentScreenController');
var ContentStore = require('../../../screen/contentScreen/ContentStore');
var ContentCallbacks = require('../../../screen/contentScreen/utils/ContentCallbacks');
var MockDataForProducts = require('../../../tacks/MockDataForProducts.json');
var ContentAction = require('../../../screen/contentScreen/ContentAction');
var ContentBasicInfoFormView = require('../../../views/contentView/contentBasicInfoFormView/ContentBasicInfoFormView');
var Carousel = require('../../../views/contentView/carouselView/CarouselView');
var ReactJestUtil = require('react-jest-util');
var ContentNoteView = require('../../../views/contentView/contentNoteView/ContentNoteView.js');

var Component;
var products;
var owlCarousel;
var contentNote;

describe("Content Screen Controller", function () {

  /*---------------------Carousel test------------------------*/
  describe("Carousel UI Test", function () {

    beforeEach(function () {
      products = JSON.stringify(MockDataForProducts);
      ContentCallbacks.getAllProductsCallBack(products);
      setSelectedProduct(19, 0);
      Component = TestUtils.renderIntoDocument(
          <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
      );
      owlCarousel = TestUtils.findRenderedComponentWithType(Component, Carousel);
    });

    it("has 'carouselContainer' class ", function () {
      expect($(owlCarousel.getDOMNode()).hasClass('carouselContainer')).toBeTruthy();
    });

    it("has 19 carousel items", function () {
      expect($(owlCarousel.getDOMNode()).find('.carouselItem').length).toEqual(19);
    });

    it("has only one selected carousel items", function () {
      expect($(owlCarousel.getDOMNode()).find('.selectedItem').length).toEqual(1);
    });

    it('contains "carouselController" div', function () {
      expect($(owlCarousel.getDOMNode()).find('.carouselController').length).toBeTruthy();
    });

    describe("In carouselController div ", function () {
      it("contains two span", function () {
        expect($(owlCarousel.getDOMNode()).find('.carouselController span').length).toEqual(2);
        expect($(owlCarousel.getDOMNode()).find('.carouselController span').eq(0).hasClass('previousController')).toBeTruthy();
        expect($(owlCarousel.getDOMNode()).find('.carouselController span').eq(1).hasClass('nextController')).toBeTruthy();
      });
    });

    describe("Order of products in Carousel", function () {

      it("contains product of id '19' at first position", function () {
        //ReactJestUtil.log($(Component.getDOMNode()).find('.PIMThumbContainer').eq(0).data('product-id'),2);
        expect($(owlCarousel.getDOMNode()).find('.PIMThumbContainer').eq(0).data('product-id')).toEqual(19);
      });

      it("contains product of id '18' at Second position", function () {
        expect($(owlCarousel.getDOMNode()).find('.PIMThumbContainer').eq(1).data('product-id')).toEqual(18);
      });
    });

  });

  describe("Carousel Event Test", function () {

    describe("1. When click on next button", function () {

      it("will call 'carouselPositionChanged' methods", function () {
        var nextClick = owlCarousel.refs.controller.refs.nextBtn.getDOMNode();
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(0);
        TestUtils.Simulate.click(nextClick);
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(1);
        expect(ContentAction.carouselPositionChanged).toBeCalled();
        /*/!*Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.
         Often this is useful when you want to clean up a mock's usage data between two assertions.*!/*/
        ContentAction.carouselPositionChanged.mockClear();
      });

    });

    describe("2. when click on previous controller", function () {

      it("will call 'carouselPositionChanged' methods", function () {
        var prevClick = owlCarousel.refs.controller.refs.previousBtn.getDOMNode();
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(0);
        TestUtils.Simulate.click(prevClick);
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(1);
        expect(ContentAction.carouselPositionChanged).toBeCalled();
        ContentAction.carouselPositionChanged.mockClear();
      });
    });

    describe("When we click on next button 5 times then",function(){

      it("will call 'carouselPositionChanged' methods",function(){
        //ReactJestUtil.log(Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.refs.controller,1);

        var nextBtn = owlCarousel.refs.controller.refs.nextBtn;
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(0);
        TestUtils.Simulate.click(nextBtn.getDOMNode());
        TestUtils.Simulate.click(nextBtn.getDOMNode());
        TestUtils.Simulate.click(nextBtn.getDOMNode());
        TestUtils.Simulate.click(nextBtn.getDOMNode());
        TestUtils.Simulate.click(nextBtn.getDOMNode());
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(5);
        expect(ContentAction.carouselPositionChanged).toBeCalled();
        ContentAction.carouselPositionChanged.mockClear();
      });
    });

    describe("1. When we click on previous button 5 times then",function(){

      it("will call 'carouselPositionChanged' methods",function(){
        var previousBtn = owlCarousel.refs.controller.refs.previousBtn;
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(0);
        TestUtils.Simulate.click(previousBtn.getDOMNode());
        TestUtils.Simulate.click(previousBtn.getDOMNode());
        TestUtils.Simulate.click(previousBtn.getDOMNode());
        TestUtils.Simulate.click(previousBtn.getDOMNode());
        TestUtils.Simulate.click(previousBtn.getDOMNode());
        TestUtils.Simulate.click(previousBtn.getDOMNode());
        expect(ContentAction.carouselPositionChanged.mock.calls.length).toEqual(6);
        expect(ContentAction.carouselPositionChanged).toBeCalled();
      });
    });

    describe("Simulate Wheel(i.e. scroll)", function () {
      it("calls onWheel",function(){
        owlCarousel.wheeling = jest.genMockFn();
        owlCarousel.wheeling();
        expect(Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.wheeling).toBeCalled();
      });
    });
  });

  /*---------------------Content Basic Info test------------------------*/
  describe("Content Basic Information Test", function () {

    beforeEach(function () {
      products = JSON.stringify(MockDataForProducts);
      ContentCallbacks.getAllProductsCallBack(products);
      setSelectedProduct(19, 0);
      Component = TestUtils.renderIntoDocument(
          <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
      );
      owlCarousel = TestUtils.findRenderedComponentWithType(Component, Carousel);
    });

    describe("Content Basic Section check", function () {

      it("Will check id of Content", function () {
        expect(Component.state.componentProps.getSelectedProps().selectedProduct.id).toEqual(19);
      });

      it("Will check name of Content", function () {
        expect(Component.state.componentProps.getSelectedProps().selectedProduct.label).toEqual('Untitled_19');
      });

      it("Will check type of Content", function () {
        expect(Component.state.componentProps.getSelectedProps().selectedProduct.type).toEqual('Structured');
      });

      it("Will check WorkflowStatus of Content", function () {
        expect(Component.state.componentProps.getSelectedProps().selectedProduct.workflowStatus).toEqual('Created');
      });

      it("Will check Class of Content", function () {
        expect(Component.state.componentProps.getSelectedProps().selectedProduct.class).toEqual('Standard');
      });

      it("Will check Comments of Content", function () {
        expect(Component.state.componentProps.getSelectedProps().selectedProduct.comments).toBe('');
      });

    });


  });
  /*----------------------------Content Note Test-----------------------------*/
  describe("Content Note view", function () {

    beforeEach(function () {
      products = JSON.stringify(MockDataForProducts);
      ContentCallbacks.getAllProductsCallBack(products);
      setSelectedProduct(19, 0);
      Component = TestUtils.renderIntoDocument(
          <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
      );
      contentNote = TestUtils.findRenderedComponentWithType(Component, ContentNoteView);
    });

    /*beforeEach(function () {
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
*/
    it("is composite component", function () {
      expect(TestUtils.isCompositeComponent  (contentNote)).toBe(true);
    });

    it('have have selected product', function () {
      expect(contentNote.refs.noteList.props.selectedProduct.id).toBe(19);
    });

    it('have notes in it', function () {
      expect(contentNote.refs.noteList.props.selectedProduct.notes.length).toBeGreaterThan(0);
    });

    it('must change note value on change', function () {
      //Gives array of elements having class textBox in contentNoteView Component
      var notes = TestUtils.scryRenderedDOMComponentsWithClass(contentNote, "textBox");
      expect(contentNote.props.selectedProps.selectedProduct.notes[0].values[0].value).toBe("Untitled_19");
      TestUtils.Simulate.change(notes[0].getDOMNode(),{target: {value: 'New value'}});
      expect(contentNote.props.selectedProps.selectedProduct.notes[0].values[0].value).toBe("New value");
    });

    /*it('click on add to show popover', function () {

      expect(contentNote.props.selectedProps.selectedProduct.notes.length).toBe(1);

      var addButton = TestUtils.findRenderedDOMComponentWithClass(contentNote, 'btnAddNote');
      TestUtils.Simulate.click(addButton.getDOMNode());

      //Can not use scryRenderedDOMComp in this case because popover gets rendered after click of button [can be accessed through refs]
      var addTitle = TestUtils.scryRenderedDOMComponentsWithClass(contentNote, 'productClassGroup');

      addTitle = contentNote.refs.noteList.refs.popup0;
      TestUtils.Simulate.click(addTitle.getDOMNode());
      //this.selectedProps = this.data.componentProps.getSelectedProps();
      //console.log(this.selectedProps.selectedProduct.notes);
      expect(contentNote.props.selectedProps.selectedProduct.notes.length).toBe(2);
    });*/
  });

});


function setSelectedProduct(productId, index) {
  ContentStore.setSelectedProduct(ContentStore.getProductById(productId));
  ContentStore.setSelectedIndex(index);
  ContentStore.changeContentViewMode('editMode');
}