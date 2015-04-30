var createDummyProduct = function () {
    var totalProducts = ContentListStore.getData().getAppData().getAllProducts();
    var length = totalProducts.length;
    var id = totalProducts[length - 1].id + 100;
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

var createDummyNote = function (note) {
    var newNote = {};
    newNote.type = note.label;
    newNote.id = '' + (new Date().getTime());
    newNote.tags = {
        "Brand": [],
        "Market Cluster": [],
        "Category": [],
        "Region": [],
        "Content Score": [],
        "Communication channel": [],
        "Quality": []
    };
    newNote.values = [];
    for(var iContentCount = 0; iContentCount < note.contents.length; iContentCount++) {
        newNote.values.push(
            {
                "label": note.contents[iContentCount].label,
                "value": "",
                "type": note.contents[iContentCount].type,
                //defaultValues: note.contents[iContentCount].defaultValues
            }
        );
    }
    return newNote;
};

var destroyLayout = function( containerSelector ) {
    var $C = $(containerSelector);
    if ($C.data("layoutContainer"))
        $C.layout().destroy();

};