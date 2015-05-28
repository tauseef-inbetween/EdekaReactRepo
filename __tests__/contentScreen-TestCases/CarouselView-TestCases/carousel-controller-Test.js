//ContentScreenController
jest.dontMock('jquery').dontMock('jquery-ui').dontMock('lodash')
    .dontMock('../../../screen/contentScreen/ContentStore')
    .dontMock('../../../screen/contentScreen/ContentApplicationData')
    .dontMock('../../../screen/contentScreen/ContentComponentProperties')
    .dontMock('../../../views/contentView/carouselView/CarouselView')
    .dontMock('../../../screen/contentScreen/ContentScreenController')
    .dontMock('../../../libraries/js/flux/MicroEvent')
    .dontMock('../../../views/contentView/contentInfoScreenView/ContentInfoScreenView')
    .dontMock('../../../views/contentView/thumbnailView/ThumbnailView')
    .dontMock('../../../screen/homeScreen/menuBar/MenuActions')
    .dontMock('../../../screen/contentScreen/utils/ContentUtils')
    .dontMock('../../../screen/homeScreen/utils/ModuleDataLoader')
    .dontMock('../../../screen/contentScreen/utils/ContentCallbacks')
    .dontMock('../../../views/contentView/carouselView/CarouselActionControlView')
    .dontMock('../../../views/contentView/carouselView/CarouselItem')
    .dontMock('../../../tacks/MockDataForProducts.json');

var React = require('react/addons');
var ReactJestUtil = require('react-jest-util');
var TestUtils = React.addons.TestUtils;
var $ = require('jquery');
var ContentAction = require('../../../screen/contentScreen/ContentAction');
var MenuAction = require('../../../screen/homeScreen/menuBar/MenuActions');
var loadDataFromNetwork = require('../../../screen/homeScreen/utils/ModuleDataLoader');
var ContentScreenController = require('../../../screen/contentScreen/ContentScreenController');
var ContentStore = require('../../../screen/contentScreen/ContentStore');
var ContentCallbacks = require('../../../screen/contentScreen/utils/ContentCallbacks');
var MockDataForProducts = require('../../../tacks/MockDataForProducts.json');
var ContentComponentProperties = require('../../../screen/contentScreen/ContentComponentProperties');
var Component;
var products;

describe("Content Store", function () {
  beforeEach(function() {
    products = JSON.stringify(MockDataForProducts);
    ContentCallbacks.getAllProductsCallBack(products);
    ContentComponentProperties.contentViewMode = 'editMode';
    Component = TestUtils.renderIntoDocument(
        <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
    );
  });


  it("has '19' Products",function(){
    expect(Component.state.appData.allProducts.length).toEqual(19);
  });
});


describe("When we click on next button 5 times then",function(){
  beforeEach(function() {
    Component = TestUtils.renderIntoDocument(
        <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
    );
  });
  it("will call 'carouselPositionChanged' methods",function(){
    //ReactJestUtil.log(Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.refs.controller,1);

    var nextBtn = Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.refs.controller.refs.nextBtn;
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
  beforeEach(function() {
    products = JSON.stringify(MockDataForProducts);
    ContentCallbacks.getAllProductsCallBack(products);
    Component = TestUtils.renderIntoDocument(
        <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
    );
  });
  it("will call 'carouselPositionChanged' methods",function(){
    var previousBtn = Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.refs.controller.refs.previousBtn;
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
  beforeEach(function() {
    products = JSON.stringify(MockDataForProducts);
    ContentCallbacks.getAllProductsCallBack(products);
    Component = TestUtils.renderIntoDocument(
        <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
    );
  });

  it("calls onWheel",function(){
    Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.wheeling = jest.genMockFn();
    Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.wheeling();
    expect(Component.refs.contentInfoScrnView.refs.northDOM.refs.owlCarousel.wheeling).toBeCalled();
  });
});

