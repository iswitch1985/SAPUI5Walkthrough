sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (myUIComponent, myJSONModel, myResourceModel) {
    "use strict";
    return myUIComponent.extend("mydemos.walkthrough.Component",{
// metadata
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "mydemos.walkthrough.Views.main",
                "type": "XML",
                /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
                "id":"mydemoapp"
            }
        },
// define init function
        init: function () {
// call init method of super class
            myUIComponent.prototype.init.apply(this, arguments);
            // JSON DATA 
            var odata = {
                person: {
                    name1: "Frankie",
                    name2: "Huang"
                } 
            };
            // create JSONModel and bind with JSON Data
            var oModel = new myJSONModel(odata);
            // bind component with myJSONModel
            this.setModel(oModel);
            
            // create Resource Model which points to a i18n path
            var oResourceModel = new myResourceModel({
                bundleName: "mydemos.walkthrough.i18nsss.i18n123"
            });
            // bind component with myResourceModel whose alias is myi18n
            this.setModel(oResourceModel, "myi18n");
        }
    })
});
