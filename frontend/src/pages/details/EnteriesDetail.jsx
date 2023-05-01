import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";

const EnteriesDetail = () => {
  const params = useParams();
  const [data, setData] = useState("");


  function getData(url) {
    axios.get(`http://localhost:5000/invoice/${params.id}`).then((res) => {
      setData(res.data.user[0]);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="detail_Main_div">
      <h5>Invoice Details</h5>

      <div className="details">
        <div className="data_div">
          <h1>
            invoice : <span>{data && data?.invoice}</span>
          </h1>
          <h3>
            createdAt : <span>{data && data?.createdAt}</span>
          </h3>
          <h3>
            updatedAt : <span>{data && data?.updatedAt}</span>
          </h3>
          <h3>
            email : <span>{data && data?.email}</span>
          </h3>
          <h3>
            billing_detail : <span>{data && data?.billing_detail}</span>
          </h3>
          <h3>
            corporate_name : <span>{data && data?.corporate_name}</span>
          </h3>
          <h3>
            date : <span>{data && data?.date}</span>
          </h3>
          <h3>
            invoice_no : <span>{data && data?.invoice_no}</span>
          </h3>
          <h3>
            mobile_no : <span>{data && data?.mobile_no}</span>
          </h3>
          <h3>
            postal_code : <span>{data && data?.postal_code}</span>
          </h3>
          <h3>
            amount : <span>{data && data?.amount}</span>
          </h3>
          <h3>
            adress : <span>{data && data?.adress}</span>
          </h3>
        </div>
        <div className="img_div">
        <h3>Attahment File 👇</h3>
          <img
            src={`http://localhost:5000/uploads/${data.attchment}`}
            alt="attachment"
          />
        </div>
      </div>
    </div>
  );
};

export default EnteriesDetail;
