jest.dontMock('jquery').dontMock('jquery-ui').dontMock('lodash')
    .dontMock('../../../screen/contentScreen/ContentStore')
    .dontMock('../../../screen/contentScreen/ContentAction')
    .dontMock('../../../screen/contentScreen/ContentApplicationData')
    .dontMock('../../../screen/contentScreen/ContentComponentProperties')
    .dontMock('../../../screen/contentScreen/ContentScreenController')
    .dontMock('../../../libraries/js/flux/MicroEvent')
    .dontMock('../../../screen/contentScreen/utils/ContentUtils')
    .dontMock('../../../screen/contentScreen/utils/ContentCallbacks')
    .dontMock('../../../tacks/MockDataForProducts.json')
    .dontMock('../../../tacks/MockDataForContent')
    .dontMock('../../../views/contentView/contentBasicInfoFormView/ContentBasicInfoFormView');

var React = require('react/addons');
var ReactJestUtil = require('react-jest-util');
var TestUtils = React.addons.TestUtils;
var MockData = require('../../../tacks/MockDataForContent.js');
var $ = require('jquery');
var ContentScreenController = require('../../../screen/contentScreen/ContentScreenController');
var ContentStore = require('../../../screen/contentScreen/ContentStore');
var ContentCallbacks = require('../../../screen/contentScreen/utils/ContentCallbacks');
var MockDataForProducts = require('../../../tacks/MockDataForProducts.json');
var ContentBasicInfoFormView = require('../../../views/contentView/contentBasicInfoFormView/ContentBasicInfoFormView');
var Component;
var products;

describe("Content Basic Section check", function () {
  beforeEach(function () {
    products = JSON.stringify(MockDataForProducts);
    ContentCallbacks.getAllProductsCallBack(products);
    setSelectedProduct(19, 0);
    Component = TestUtils.renderIntoDocument(
        <ContentScreenController key="5" className='screen showScreen' store={ContentStore}/>
    );
  });

  it("Will check id of Content", function () {
    //ReactJestUtil.log(Component.state.componentProps.getSelectedProps().selectedProduct,2);
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

  it("find Thumb")

});

describe("Content Basic Section change Check", function () {

  jest.dontMock('../../../screen/contentScreen/ContentAction');
  describe("Change 'name' of content as 'product1'",function(){
    beforeEach(function() {
      products = JSON.stringify(MockDataForProducts);
       ContentCallbacks.getAllProductsCallBack(products);
       setSelectedProduct(19, 0);
       var selectedProduct = ContentStore.getData().componentProps.getSelectedProps().selectedProduct;
       var productWorkFlowStatus = MockData.productWorkflowStatus;
       var productTypes = MockData.productTypes;
       var productClasses = MockData.productClasses;
       Component = TestUtils.renderIntoDocument(
       <ContentBasicInfoFormView selectedProduct={selectedProduct}
       productWorkFlowStatus={productWorkFlowStatus}
       productTypes={productTypes}
       productClasses={productClasses}/>
       );
    });

    it("will set the content name 'product1'",function(){
      //ReactJestUtil.log(Component.props.selectedProduct.label,1);
      expect(Component.props.selectedProduct.label).toBe('Untitled_19');
      TestUtils.Simulate.change(Component.refs.productName,{target: { value: 'product1'}});
      expect(Component.props.selectedProduct.label).toBe('product1');
      //ReactJestUtil.log(Component.props.selectedProduct.label,1);
    });

  });

  describe("Change 'type' of content as 'CMS'",function(){
    beforeEach(function() {
      products = JSON.stringify(MockDataForProducts);
      ContentCallbacks.getAllProductsCallBack(products);
      setSelectedProduct(19, 0);
      var selectedProduct = ContentStore.getData().componentProps.getSelectedProps().selectedProduct;
      var productWorkFlowStatus = MockData.productWorkflowStatus;
      var productTypes = MockData.productTypes;
      var productClasses = MockData.productClasses;
      Component = TestUtils.renderIntoDocument(
          <ContentBasicInfoFormView selectedProduct={selectedProduct}
          productWorkFlowStatus={productWorkFlowStatus}
          productTypes={productTypes}
          productClasses={productClasses}/>
      );
    });

    it("will set the content name 'CMS'",function(){
      //ReactJestUtil.log(Component.props.selectedProduct.type,1);
      expect(Component.props.selectedProduct.type).toBe('Structured');
      TestUtils.Simulate.change(Component.refs.productType,{target: { value: 'CMS'}});
      expect(Component.props.selectedProduct.type).toBe('CMS');
      //ReactJestUtil.log(Component.props.selectedProduct.type,1);
    });

  });

});


function setSelectedProduct(productId, index) {
  ContentStore.setSelectedProduct(ContentStore.getProductById(productId));
  ContentStore.setSelectedIndex(index);
  ContentStore.setContentViewModeWithTrigger('editMode');
}