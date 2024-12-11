sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var that = this;

            },
            handleSearch1: function (oEvent) {
                var sQuery =
                    oEvent.getParameter("value") || oEvent.getParameter("newValue"),
                    sId = oEvent.getParameter("id"),
                    oFilters = [];
                // Check if search filter is to be applied
                sQuery = sQuery ? sQuery.trim() : "";//hgvhgv

                if (sId.includes("LocS")) {
                    if (sQuery !== "") {
                        oFilters.push(
                            new Filter({
                                filters: [
                                    new Filter("DEMAND_LOC", FilterOperator.Contains, sQuery),
                                    new Filter("DEMAND_DESC", FilterOperator.Contains, sQuery),
                                ],
                                and: false,
                            })
                        );
                    }
                    that.oLocList = sap.ui.getCore().byId("LocSlctListCPS")
                    that.oLocList.getBinding("items").filter(oFilters);
                    if (that.oLocList.getItems().length == 0) {
                        that.oLocList.setNoDataText("No Data");
                    }
                }

                if (sId.includes("prod")) {
                    if (sQuery !== "") {
                        oFilters.push(
                            new Filter({
                                filters: [
                                    new Filter("PRODUCT_ID", FilterOperator.Contains, sQuery),
                                    new Filter("PROD_DESC", FilterOperator.Contains, sQuery),
                                ],
                                and: false,
                            })
                        );//commit
                    }
                    that.oProdList.getBinding("items").filter(oFilters);
                }
            },
        });
    });
