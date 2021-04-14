import React from "react";
import Data from "./Data";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "../Table.css";

export default function Datable({ data }) {
  return (
    <Table className="tbl">
      <Thead>
        <Tr className="tr">
          <Th className="th">Name</Th>
          <Th className="th">Country</Th>
          <Th className="th">Latitude</Th>
          <Th className="th">Longitude</Th>
          <Th className="th">Wind prob</Th>
          <Th className="th">When to go </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((data) => {
          return (
            <Tr>
              <Td className="td">{data.name}</Td>
              <Td className="td">{data.country}</Td>
              <Td className="td">{data.lat}</Td>
              <Td className="td">{data.long}</Td>
              <Td className="td">{data.probability}%</Td>
              <Td className="td">{data.month}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
