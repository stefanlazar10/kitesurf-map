import React, { useState, useEffect } from "react";
import Datatable from "./Datatable";
import axios from "axios";
import "./Dashboard.css";

const url = "https://6074418c066e7e0017e79725.mockapi.io/spot";
const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url).then((response) => setData(response.data));
  }, []);
  return (
    <>
      <div className="table margin-top">
        <Datatable data={data} />
      </div>
    </>
  );
};
export default Data;
