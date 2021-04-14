import { AgGridReact, sort } from "ag-grid-react";
import React, { useState, useEffect } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { console } from "google-maps-react/dist/lib/windowOrGlobal";
import axios from "axios";
import { Button } from "@material-ui/core";

const url = "https://6074418c066e7e0017e79725.mockapi.io/spot";

const AGgrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url).then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <AgGridReact
        className="margin-top"
        columnDefs={[
          {
            headerName: "Name",
            field: "name",
            filter: "agTextColumnFilter",
            sortable: true,
          },
          {
            headerName: "Country",
            field: "country",
            filter: "agTextColumnFilter",
            sortable: true,
          },
          {
            headerName: "Latitude",
            field: "lat",
            filter: "agTextColumnFilter",
            sortable: true,
          },
          {
            headerName: "Longitude",
            field: "long",
            filter: "agTextColumnFilter",
            sortable: true,
          },
          {
            headerName: "Wind probability",
            field: "probability",
            filter: "agTextColumnFilter",
            sortable: true,
          },
          {
            headerName: "When to go",
            field: "month",
            filter: "agTextColumnFilter",
            sortable: true,
          },
        ]}
        rowData={data}
      ></AgGridReact>
    </div>
  );
};
export default AGgrid;
