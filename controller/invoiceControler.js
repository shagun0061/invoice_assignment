const InvoiceModel = require("../model/invoiceModel");

module.exports.addInvoice = async (req, res, next) => {
  let attchment = req.file ? req.file.filename : null;

  console.log("bodyObj", req.body);

  try {
    const {
      invoice,
      date,
      email,
      amount,
      billing_detail,
      adress,
      corporate_name,
      mobile_no,
      invoice_no,
      postal_code,
    } = req.body;

    const user = await InvoiceModel.create({
      invoice,
      date,
      email,
      amount,
      billing_detail,
      adress,
      corporate_name,
      mobile_no,
      attchment,
      invoice_no,
      postal_code,
    });

    return res.send({ status: true, user: user });
  } catch (error) {
    res.send({ status: false, message: error });
  }
};

module.exports.invoice = async (req, res, next) => {
  try {
    const user = await InvoiceModel.find();

    return res.send({ status: true, user: user });
  } catch (error) {
    res.send({ status: false, message: error });
  }
};

module.exports.invoicedel = async (req, res, next) => {
  const id = req.body.id;
  try {
    const user = await InvoiceModel.findByIdAndRemove(id);
    return res.send({ status: true, user: user });
  } catch (error) {
    res.send({ status: false, message: error });
  }
};

module.exports.invoiceupdate = async (req, res, next) => {
  const id = req.body.id;
  const data = req.body.data;
  try {
    const user = await InvoiceModel.findByIdAndUpdate(id, data);
    return res.send({ status: true, user: user });
  } catch (error) {
    res.send({ status: false, message: error });
  }
};

module.exports.invoiceSearch = async (req, res, next) => {
  const invoice = req.body.invoice;
  const email = req.body.email;
  try {
    const user = await InvoiceModel.find({
      $or: [{ invoice: { $regex: invoice, $options: "i" } }],
    });

    return res.send(user);
  } catch (error) {
    res.send({ status: false, message: error });
  }
};
