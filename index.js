const express = require("express");
const { connect } = require("./config/conncetDB");
const cors = require("cors");
const app = express();
const invoiceRouter = require("./routes/invoiceRoute");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));
app.use("/", invoiceRouter);

app.listen(5000, async () => {
  try {
    await connect;
    console.log("Connect to DB 🚩");
  } catch (error) {
    console.log("error is ", error);
  }
  console.log("server is running  on 5000");
});
