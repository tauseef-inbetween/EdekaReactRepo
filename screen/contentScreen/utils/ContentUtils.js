var $ = require('jquery');
require('jquery-ui');

var ContentUtils = (function () {

    var getUniqueId = function () {
        var currentDate = new Date();
        return currentDate.getFullYear() + ""
            + currentDate.getMonth() + ""
            + currentDate.getDay() + ""
            + currentDate.getHours() + ""
            + currentDate.getMinutes() + ""
            + currentDate.getSeconds() + ""
            + currentDate.getMilliseconds();
    }

    return {
        createDummyProduct: function () {
            var id = getUniqueId();
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
                "image": ["views/contentView/thumbnailView/images/pouch.png"],
                "multimedia": [{
                    "image": "views/contentView/thumbnailView/images/pouch.png",
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
        },

        createDummyNote: function (note) {
            var newNote = {};
            newNote.type = note.label;
            newNote.id = '' + (new Date().getTime());
            newNote.groupName = note.groupName;
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
            for (var iContentCount = 0; iContentCount < note.contents.length; iContentCount++) {
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
        },

        destroyLayout: function (containerSelector) {
            var $C = $(containerSelector);
            if ($C.data("layoutContainer"))
                $C.layout().destroy();
        }
    }
})();

module.exports = ContentUtils;