const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoice: {
      type: String,
      required: true,
    },
    billing_detail: {
      type: String,
      required: true,
    },
    corporate_name: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    attchment: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgBWbSH3w-xh3MDUV9ARmjVGaYr5SqRC6fg&usqp=CAU",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    mobile_no: {
      type: Number,
      required: true,
    },
    invoice_no: {
      type: Number,
      required: true,
    },
    postal_code: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const InvoiceModel = mongoose.model("invoice_assignment", invoiceSchema);
module.exports = InvoiceModel;
