var createDummyProduct = function () {
    var length = ContentListStore.data.length;
    var id = ContentListStore.data[length - 1].id + 100;
    return {
        "notes": [
            {
                "type": "Title & Teaser",
                "id": id,
                "values": [
                    {
                        "label": "Title",
                        "value": "Untitled_" + id
                    },
                    {
                        "label": "Teaser",
                        "value": "",
                        "type": "Description"
                    }
                ],
                "tags": {
                    "Brand": [],
                    "Market Cluster": [],
                    "Category": [],
                    "Region": [],
                    "Content Score": [],
                    "Communication channel": [],
                    "Quality": []
                }
            }
        ],
        "label": "Untitled_" + id,
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
        "id": id,
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
        "title": "Untitled_" + id,
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
};


var destroyLayout = function( containerSelector ) {
    var $C = $(containerSelector);
    if ($C.data("layoutContainer"))
        $C.layout().destroy();

};