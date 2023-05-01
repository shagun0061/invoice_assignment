import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import { FcSearch } from "react-icons/fc";
import {useNavigate} from "react-router-dom"

const Enteries = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  console.log(data);
  function getData(url) {
    axios.get(url).then((res) => {
      setData(res.data.user);
    });
  }

  function handelSearch() {
    alert("dh");
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
      console.log(res.data);
      getData("http://localhost:5000/invoice");
    });
  }

  function handelDetails(id){
    alert(id)
    navigate(`/enteries/${id}`)
  }
  useEffect(() => {
    getData("http://localhost:5000/invoice");
  }, []);
  return (
    <div className="main_enteries_div">
      <div className="search_box">
        <input type="text" placeholder="search by invoice name " />
        <button
          style={{
            backgroundColor: "rgb(29, 179, 228)",
            borderRadius: "10px",
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
                    <td onClick={()=>{handelDetails(ele._id)}}>{<FcSearch />}</td>
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
