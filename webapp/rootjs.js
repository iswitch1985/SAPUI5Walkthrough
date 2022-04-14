sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(myComponentContainer) {
    "use strict";

    new myComponentContainer({
        name: "mydemos.walkthrough",
        settings:{
            id: "mydemo"
        },
        async: true
    }).placeAt("mycontent");
});