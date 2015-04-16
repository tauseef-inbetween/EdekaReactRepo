var ScreenLoaderHelper = {
  "Calender": false,
  "Campaign": false,
  "Promotion": false,
  "Assortment": false,
  "Template": false,
  "Content": false,
  "Report": false,
  "Target": false
};

function loadMenuContent (screenName) {
  $('.entityScreen').hide();

  var $screen = $('#' + screenName.toLowerCase() + 'Screen');
  $screen.show();

  switch (screenName) {
    case 'Content':
      if(ScreenLoaderHelper[screenName]){
        ContentListStore.trigger('change');
      } else {
        var $moduleContainer = $screen.get(0);
        React.render(<ProductWrapper />, $moduleContainer);
        ScreenLoaderHelper[screenName] = true;
      }
      break;
    default:
      $screen.html('Nothing to display');
  }
}


function createDummyProduct () {
  var length = ContentListStore.data.length;
  return {
    "notes": [{
      "header": "Untitled_" + length,
      "description": "",
      "type": "Title & Teaser",
      "id": "2f913782",
      "tags": {
        "Brand": [],
        "Market Cluster": [],
        "Category": [],
        "Region": [],
        "Content Score": [],
        "Communication channel": [],
        "Quality": []
      }
    }],
    "label": "Untitled_" + length,
    "image": ["images/pouch.png"],
    "multimedia": [{
      "image": "images/pouch.png",
      "tags": {
        "Brand": [],
        "Market Cluster": [],
        "Category": [],
        "Region": [],
        "Content Score": [],
        "Communication channel": [],
        "Quality": []
      },
      "name": ""
    }],
    "imageTags": [{
      "Brand": [],
      "Market Cluster": [],
      "Category": [],
      "Region": [],
      "Content Score": [],
      "Communication channel": [],
      "Quality": []
    }],
    "comments": "",
    "class": "Standard",
    "Channel": "",
    "Target Group": "",
    "Brand": "",
    "Market Cluster": "",
    "Content Score": "",
    "Communication Channel": "",
    "Promotion": "",
    "Quality": "",
    "Region": "",
    "Division": "",
    "SAP-CP": "",
    "SAP-RP": "",
    "SAP-Status": "",
    "SAP-Stock": "",
    "SAP-SubSystem": "",
    "SAPId": "",
    "Sales channel": "",
    "currentPrice": "",
    "description": "",
    "discount": "",
    "grill": "",
    "id": length,
    "imageGrill": "",
    "imageOrganicStamp": "",
    "imageQRCode": "",
    "imageSuperKnuller": "",
    "imageWatchStamp": "",
    "impulse": [{"id": "72f29f41", "text": ""}],
    "isFolder": "",
    "previousPrice": "",
    "type": "Structured",
    "workflowStatus": "Created",
    "Category": "",
    "title": "Untitled_" + length,
    "blockData": "",
    "blockNotes": [],
    "richTextData": "",
    "markers": {
      "Brand": {},
      "Market Cluster": {},
      "Category": {},
      "Region": {},
      "Content Score": {},
      "Communication channel": {},
      "Quality": {}
    }
  }
}