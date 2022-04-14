sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ],
  function (mycontroller, myMessageToast) {
    "use strict";
    mycontroller.extend("mydemos.walkthrough.Controllers.main", {
      onShowMessage: function () {
        // get i18n messages
        var oResource = this.getView().getModel("myi18n").getResourceBundle();
        var name1 = this.getView().getModel().getProperty("/person/name1");
        var name2 = this.getView().getModel().getProperty("/person/name2");
        var msg = oResource.getText("buttonShowMessage", [name1, name2]);
        // myMessageToast.show("Hello You and Me!");
        myMessageToast.show(msg);
      },
    });
  }
);
