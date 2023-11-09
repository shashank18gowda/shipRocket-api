const express = require("express");


const { orderDetails } = require("./src/controllers/createOrder");
const { serviceAvailability } = require("./src/controllers/serviceAvailibility");
const { generateAWB } = require("./src/controllers/generateAWB");
const { requestShipment } = require("./src/controllers/requestForShipment");
const { printManifest } = require("./src/controllers/printManifest");
const { generateManifest } = require("./src/controllers/generateManifest");
const { generateLabel } = require("./src/controllers/generateLabel");
const { generateInvoice } = require("./src/controllers/generateInvoice");
const { trackShippment } = require("./src/controllers/trackShippment");

module.exports = (app) => {
    app.use(express.json());
  
    app.use("/orderDetails", orderDetails);
    app.use("/serviceAvailability", serviceAvailability);
    app.use("/generateAWB", generateAWB);
    app.use("/requestShipment", requestShipment);
    app.use("/printManifest", printManifest);
    app.use("/generateManifest", generateManifest);
    app.use("/generateLabel", generateLabel);
    app.use("/generateInvoice", generateInvoice);
    app.use("/trackShippment/:shipment_id", trackShippment);
  };
  
