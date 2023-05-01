const express = require("express");
const multer = require("multer");
const {
  addInvoice,
  invoice,
  invoicedel,
  invoiceupdate,
  invoiceSearch
} = require("../controller/invoiceControler");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const invoiceRouter = express.Router();

invoiceRouter.post("/invoice", upload.single("myFile"), addInvoice);
invoiceRouter.get("/invoice", invoice);
invoiceRouter.get("/invoiceSearch", invoiceSearch);
invoiceRouter.delete("/invoice", invoicedel);
invoiceRouter.patch("/invoice", invoiceupdate);

module.exports = invoiceRouter;
