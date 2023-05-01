const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://ss:ss@cluster0.s1px0wh.mongodb.net/invoice_manager?retryWrites=true&w=majority");

module.exports = {connect};

