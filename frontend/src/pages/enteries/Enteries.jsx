import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./style.scss";
import { ImCross } from "react-icons/im";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Enteries = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [searchInvoice, setSearchInvoice] = useState(false);

  const navigate = useNavigate();
  const searchModalRef = useRef();

  function getData(url) {
    axios.get(url).then((res) => {
      setData(res.data.user);
    });
  }

  function handelSearch() {
    setSearchInvoice(true);
    console.log(searchValue);
    let Sd = {
      invoice: `${searchValue}`,
    };
    axios
      .get("http://localhost:5000/invoiceSearch", {
        headers: {
          invoice: searchValue,
        },
      })
      .then((res) => {
        setSearchData(res.data);
      });
  }
  function handelupdate(ele) {
    const updateData = {
      id: ele._id,
      data: {
        status: `${!ele.status}`,
      },
    };
    axios.patch(`http://localhost:5000/invoice`, updateData).then((res) => {
      getData("http://localhost:5000/invoice");
    });
  }

  function handeldelete(id) {
    axios.delete(`http://localhost:5000/invoice/${id}`).then((res) => {
       
      getData("http://localhost:5000/invoice");
    });
  }

  function handelDetails(id) {
    navigate(`/enteries/${id}`);
  }
  useEffect(() => {
    getData("http://localhost:5000/invoice");
  }, []);

  if (data.length < 1) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "270px",
        }}
      >
        <h1>.......Loading Please wait</h1>  
        <h5 style={{ color: "gray"}}>
          if data is not comming ,plese add some invoice
        </h5>
      </div>
    );
  }
  return (
    <div className="main_enteries_div">
      <div className="search_box">
        <div className="search_bar">
          <input
            type="text"
            placeholder="search by invoice name"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <button
            style={{
              backgroundColor: "rgb(29, 179, 228)",
              borderRadius: "0px 10px 10px 0px",
              border: "none",
              fontSize: "28px",
              display: "flex",
              alignItems: "center",
            }}
            onClick={handelSearch}
          >
            Search
            <FcSearch />
          </button>
        </div>
        {searchInvoice ? (
          <div
            ref={searchModalRef}
            style={{
              width: "100%",
              height: "400px",
              position: "absolute",
              borderRadius: "0px 0px 10px 10px",
              top: "50px",
              backgroundColor: "#6c9bcf",
              left: "0",
            }}
          >
            {searchData && (
              <table
                style={{
                  marginTop: "50px",
                }}
              >
                <tbody>
                  {searchData &&
                    searchData.map((ele) => {
                      return (
                        <tr>
                          <td>{ele.invoice}</td>
                          <td>{ele.email}</td>
                          <td>{ele.mobile_no}</td>
                          <td>{ele.adress}</td>
                          <td id={ele.status ? "green" : "red"}>
                            {ele.status ? "Compleated" : "pending"}
                          </td>

                          <td
                            onClick={() => {
                              handelDetails(ele._id);
                            }}
                          >
                            {<FcSearch />}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
            <div
              style={{
                position: "absolute",
                right: "8px",
                top: "10px",
              }}
            >
              <button
                onClick={() => {
                  setSearchInvoice(false);
                }}
                style={{
                  color: "red",
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "25px",
                }}
              >
                <ImCross />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="enteries_tabel_div">
        {data && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile 3</th>
                <th>Adress</th>
                <th>Status</th>
                <th>Action</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele) => {
                return (
                  <tr>
                    <td>{ele.invoice}</td>
                    <td>{ele.email}</td>
                    <td>{ele.mobile_no}</td>
                    <td>{ele.adress}</td>
                    <td id={ele.status ? "green" : "red"}>
                      {ele.status ? "Compleated" : "pending"}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handelupdate(ele);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handeldelete(ele._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td
                      onClick={() => {
                        handelDetails(ele._id);
                      }}
                    >
                      {<FcSearch />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Enteries;
