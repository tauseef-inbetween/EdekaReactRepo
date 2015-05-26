jest.dontMock('jquery')
    .dontMock('../views/contentView/thumbnailView/carousel/CarouselActionControl')
    .dontMock('../views/contentView/thumbnailView/ContentThumbnail')
    .dontMock('../views/contentView/thumbnailView/carousel/CarouselItem')
    .dontMock('../libraries/js/flux/MicroEvent')
    .dontMock('../views/contentView/thumbnailView/carousel/Carousel');

var React = require('react/addons');
var ReactJestUtil = require('react-jest-util');
var TestUtils = React.addons.TestUtils;
var ContentThumbnail = require('../views/contentView/thumbnailView/ContentThumbnail');
var Carousel = require('../views/contentView/thumbnailView/carousel/Carousel');
var CarouselActionControl = require('../views/contentView/thumbnailView/carousel/CarouselActionControl');
var carouselItem = require('../views/contentView/thumbnailView/carousel/carouselItem');
var _ = require('underscore');
var $ = require('jquery');
var Component;
var productItems;
var selectedIndex;
var carouselPosition;

describe('When we call "Carousel" component',function(){

  beforeEach(function() {
    productItems = getProductItems (productList);
    selectedIndex = 0;
    carouselPosition = {"leftPosition":0,"previousLeftPosition":0};
    Component = TestUtils.renderIntoDocument(
        <Carousel items={productItems} selectedIndex={selectedIndex} key="carousel"
        carouselPosition={carouselPosition}/>
    );
  });

  it("has 'carouselContainer' class ",function(){
    expect($(Component.getDOMNode()).hasClass('carouselContainer')).toBeTruthy();
  });

  it("has 7 carousel items",function(){
    expect($(Component.getDOMNode()).find('.carouselItem').length).toEqual(7);
  });

  it("has only one selected carousel items",function(){
    expect($(Component.getDOMNode()).find('.selectedItem').length).toEqual(1);
  });

  it('contains "carouselController" div',function(){
    expect($(Component.getDOMNode()).find('.carouselController').length).toBeTruthy();
  });

  describe("then In carouselController div ",function(){
    it("contains two span",function(){
      expect($(Component.getDOMNode()).find('.carouselController span').length).toEqual(2);
      expect($(Component.getDOMNode()).find('.carouselController span').eq(0).hasClass('previousController')).toBeTruthy();
      expect($(Component.getDOMNode()).find('.carouselController span').eq(1).hasClass('nextController')).toBeTruthy();
    });
  });
});

describe("Order of products in Carousel",function(){
  beforeEach(function() {
    productItems = getProductItems (productList);
    selectedIndex = 0;
    carouselPosition = {"leftPosition":0,"previousLeftPosition":0};
    Component = TestUtils.renderIntoDocument(
        <Carousel items={productItems} selectedIndex={selectedIndex} key="carousel"
        carouselPosition={carouselPosition}/>
    );
  });

  it("contains product of id '19' at first position",function(){
    //ReactJestUtil.log($(Component.getDOMNode()).find('.PIMThumbContainer').eq(0).data('product-id'),2);
    expect($(Component.getDOMNode()).find('.PIMThumbContainer').eq(0).data('product-id')).toEqual(19);
  });

  it("contains product of id '18' at Second position",function(){
    expect($(Component.getDOMNode()).find('.PIMThumbContainer').eq(1).data('product-id')).toEqual(18);
  });
});


function getProductItems (productList) {
  var contentViewStyle = "thumbnail";
  return _.map(productList, function (item, i) {
    return (
        <ContentThumbnail key={item.id}
        product={item}
        contentViewStyle={contentViewStyle}/>
    );
  });
}

var productList3 = [

  {"notes":[{"type":"Title & Teaser","id":"0a1d66a5","values":[{"label":"Title","value":"Untitled_19"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_19","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","SAP-CP":"","SAP-RP":"","SAP-Status":"","SAP-Stock":"","SAP-SubSystem":"","SAPId":"","Sales channel":"","currentPrice":"","description":"","discount":"","grill":"","id":19,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[{"id":"3bae5501","text":""}],"isFolder":"","previousPrice":"","type":"Structured","workflowStatus":"Created","Category":"","title":"Untitled_19","blockData":"","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"55001d9ea826b351a4684e23"}},

  {"notes":[{"type":"Title & Teaser","id":"0a1d66a6","values":[{"label":"Title","value":"Untitled_18"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_18","image":["views/contentView/thumbnailView/images/delete-20.png","views/contentView/thumbnailView/images/pouch.png","views/contentView/thumbnailView/images/LeftCircularSmall.png","views/contentView/thumbnailView/images/RightCircularSmall.png","views/contentView/thumbnailView/images/psNext.png","views/contentView/thumbnailView/images/psPrev.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","Sales channel":"","currentPrice":"","discount":"","grill":"","id":18,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[],"isFolder":"","previousPrice":"","type":"Structured","workflowStatus":"Created","Category":"","title":"Untitled_18","blockData":"","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"55001d00a826b351a4684e21"}},

  {"notes":[{"type":"Title & Teaser","id":"0a1d66a7","values":[{"label":"Title","value":"Untitled_17"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_17","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","Sales channel":"","currentPrice":"","discount":"","grill":"","id":17,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[],"isFolder":"","previousPrice":"","type":"Impulse","workflowStatus":"Created","Category":"","title":"Untitled_17","blockData":"{\"data\":[]}","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"55001c80a826b351a4684e1f"}}

];

var productList = [
  {"notes":[{"type":"Title & Teaser","id":"0a1d66a5","values":[{"label":"Title","value":"Untitled_19"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_19","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","SAP-CP":"","SAP-RP":"","SAP-Status":"","SAP-Stock":"","SAP-SubSystem":"","SAPId":"","Sales channel":"","currentPrice":"","description":"","discount":"","grill":"","id":19,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[{"id":"3bae5501","text":""}],"isFolder":"","previousPrice":"","type":"Structured","workflowStatus":"Created","Category":"","title":"Untitled_19","blockData":"","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"55001d9ea826b351a4684e23"}},
  {"notes":[{"type":"Title & Teaser","id":"0a1d66a6","values":[{"label":"Title","value":"Untitled_18"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_18","image":["views/contentView/thumbnailView/images/delete-20.png","views/contentView/thumbnailView/images/pouch.png","views/contentView/thumbnailView/images/LeftCircularSmall.png","views/contentView/thumbnailView/images/RightCircularSmall.png","views/contentView/thumbnailView/images/psNext.png","views/contentView/thumbnailView/images/psPrev.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","Sales channel":"","currentPrice":"","discount":"","grill":"","id":18,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[],"isFolder":"","previousPrice":"","type":"Structured","workflowStatus":"Created","Category":"","title":"Untitled_18","blockData":"","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"55001d00a826b351a4684e21"}},
  {"notes":[{"type":"Title & Teaser","id":"0a1d66a7","values":[{"label":"Title","value":"Untitled_17"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_17","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","Sales channel":"","currentPrice":"","discount":"","grill":"","id":17,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[],"isFolder":"","previousPrice":"","type":"Impulse","workflowStatus":"Created","Category":"","title":"Untitled_17","blockData":"{\"data\":[]}","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"55001c80a826b351a4684e1f"}},
  {"notes":[{"type":"Title & Teaser","id":"0a1d66a8","values":[{"label":"Title","value":"Untitled_16"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_16","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","Sales channel":"","currentPrice":"","discount":"","grill":"","id":16,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[],"isFolder":"","previousPrice":"","type":"Semi-structured","workflowStatus":"Created","Category":"","title":"Untitled_16","blockData":"{\"data\":[]}","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"55001ac7a826b351a4684e1d"}},
  {"notes":[{"type":"Title & Teaser","id":"0a1d66a9","values":[{"label":"Title","value":"Untitled_15"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_15","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","SAP-CP":"","SAP-RP":"","SAP-Status":"","SAP-Stock":"","SAP-SubSystem":"","SAPId":"","Sales channel":"","currentPrice":"","description":"","discount":"","grill":"","id":15,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[{"id":"739c9595","text":""}],"isFolder":"","previousPrice":"","type":"Structured","workflowStatus":"Created","Category":"","title":"Untitled_15","blockData":"","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"550018f5a826b351a4684e1b"}},
  {"notes":[{"type":"Title & Teaser","id":"0a1d66a0","values":[{"label":"Title","value":"Untitled_14"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_14","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","SAP-CP":"","SAP-RP":"","SAP-Status":"","SAP-Stock":"","SAP-SubSystem":"","SAPId":"","Sales channel":"","currentPrice":"","description":"","discount":"","grill":"","id":14,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[{"id":"f873487b","text":""}],"isFolder":"","previousPrice":"","type":"Structured","workflowStatus":"Created","Category":"","title":"Untitled_14","blockData":"","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"5500187da826b351a4684e19"}},
  {"notes":[{"type":"Title & Teaser","id":"0a1d66b1","values":[{"label":"Title","value":"Untitled_13"},{"label":"Teaser","value":"","type":"Description"}],"tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}}],"label":"Untitled_13","image":["views/contentView/thumbnailView/images/pouch.png"],"multimedia":[{"image":"views/contentView/thumbnailView/images/pouch.png","tags":{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]},"name":""}],"imageTags":[{"Brand":[],"Market Cluster":[],"Category":[],"Region":[],"Content Score":[],"Communication channel":[],"Quality":[]}],"comments":"","class":"Standard","Channel":"","Target Group":"","Brand":"","Market Cluster":"","Content Score":"","Communication Channel":"","Promotion":"","Quality":"","Region":"","Division":"","SAP-CP":"","SAP-RP":"","SAP-Status":"","SAP-Stock":"","SAP-SubSystem":"","SAPId":"","Sales channel":"","currentPrice":"","description":"","discount":"","grill":"","id":13,"imageGrill":"","imageOrganicStamp":"","imageQRCode":"","imageSuperKnuller":"","imageWatchStamp":"","impulse":[{"id":"84cbc65a","text":""}],"isFolder":"","previousPrice":"","type":"Structured","workflowStatus":"Created","Category":"","title":"Untitled_13","blockData":"","blockNotes":[],"richTextData":"","markers":{"Brand":{},"Market Cluster":{},"Category":{},"Region":{},"Content Score":{},"Communication channel":{},"Quality":{}},"_id":{"$oid":"5500175ca826b351a4684e17"}}
];