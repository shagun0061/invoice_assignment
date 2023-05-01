import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  let data = {
    invoice: "",
    date: "",
    email: "",
    amount: "",
    billing_detail: "",
    adress: "",
    corporate_name: "",
    mobile_no: "",
    attchment: "",
    invoice_no: "",
    postal_code: "",
  };

  const [value, setvalue] = useState(data);

  const handelChange = (event) => {
    event.preventDefault();
    setvalue({ ...value, [event.target.name]: event.target.value });
  };

  function handelattAchment(event) {
    setvalue({ ...value, attchment: event.target.files[0] });
  }
  const handelSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();

    formdata.append("invoice", value.invoice);
    formdata.append("date", value.date);
    formdata.append("email", value.email);
    formdata.append("amount", value.amount);
    formdata.append("billing_detail", value.billing_detail);
    formdata.append("adress", value.adress);
    formdata.append("corporate_name", value.corporate_name);
    formdata.append("mobile_no", value.mobile_no);
    formdata.append("invoice_no", value.invoice_no);
    formdata.append("postal_code", value.postal_code);
    formdata.append("myFile", value.attchment, value.attchment.name);

    const { data } = await axios.post(
      "http://localhost:5000/invoice",
      formdata
    );
    if (data.status == true) {
      console.log(data.user);
      toast(` Invoice add Sucessfull 🥰`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/enteries");
      }, 3000);
    } else {
      console.log(data);
      toast.error(data.message);
    }
  };

  return (
    <div className="homeManiDiv">
      <form
        onSubmit={(event) => {
          handelSubmit(event);
        }}
      >
        <div className="upper_form_div">
          <div></div>
          <div>
            <label>Add Invoices </label>
            <br></br>
            <input
              type="text"
              required="true"
              name="invoice"
              value={value.invoice}
              onChange={(event) => {
                handelChange(event);
              }}
            />
          </div>
        </div>
        <div className="lower_form_div">
          <div>
            <label> Date of Invoice</label>
            <br></br>
            <input
              required="true"
              type="date"
              name="date"
              value={value.date}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>

            <label>Email</label>
            <br></br>
            <input
              type="email"
              required="true"
              name="email"
              value={value.email}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>

            <label>Amount</label>
            <br></br>
            <input
              type="number"
              name="amount"
              required="true"
              value={value.amount}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>

            <label>Billing and Service details</label>
            <br></br>
            <input
              required="true"
              type="text"
              name="billing_detail"
              value={value.billing_detail}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>

            <label>Adress</label>
            <br></br>
            <input
              required="true"
              type="text"
              name="adress"
              value={value.adress}
              onChange={(event) => {
                handelChange(event);
              }}
            />
          </div>
          <div>
            <label>Corporate Name</label>
            <br></br>
            <input
              required="true"
              type="text"
              name="corporate_name"
              value={value.corporate_name}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>

            <label>Mobile</label>
            <br></br>
            <input
              required="true"
              type="number"
              name="mobile_no"
              value={value.mobile_no}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>

            <label>Attacments</label>
            <br></br>
            <input
              type="file"
              required="true"
              name="attachment"
              onChange={(event) => {
                handelattAchment(event);
              }}
            />
            <br></br>

            <label>Invoice No</label>
            <br></br>
            <input
              type="number"
              required="true"
              name="invoice_no"
              value={value.invoice_no}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>

            <label>Postal Code</label>
            <br></br>
            <input
              type="text"
              required="true"
              name="postal_code"
              value={value.postal_code}
              onChange={(event) => {
                handelChange(event);
              }}
            />
            <br></br>
          </div>
        </div>
        <input type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Home;
