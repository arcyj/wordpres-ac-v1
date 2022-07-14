import React from 'react';
import axios from 'axios';
import Heading from '../heading';

let cellHeadingStyles = "px-4 text-left py-2 bg-gray-50 border-y ";
let cellStyles = "px-4 text-left py-3";

const renderTableBody = (data) =>{
  return (
    <tbody>
      {data.map(function(item, index){
        return (
          <tr key={index}>
            <td className={`${index%2==0 ? "" : "bg-gray-50"} ${cellStyles}`}>{item.number}</td>
            <td className={`${index%2==0 ? "" : "bg-gray-50"} ${cellStyles}`}>${item.total}</td>
            <td className={`${index%2==0 ? "" : "bg-gray-50"} ${cellStyles}`}>{item.due_date ? item.due_date : "-"}</td>
            <td className={`${index%2==0 ? "" : "bg-gray-50"} ${cellStyles}`}><a href={item.invoice_pdf} target="_blank">Download</a></td>
          </tr>
        )
      })}
    </tbody>
  )
}
const InvoiceTable = (props) => {
  return (
    <div>
      <h2 className="px-4 py-6 text-lg">Previous Invoices</h2>
      <table className="table-fixed w-full">
        <thead>
          <tr className="">
            <th className={`${cellHeadingStyles}`}>Invoice #</th>
            <th className={`${cellHeadingStyles}`}>Amount</th>
            <th className={`${cellHeadingStyles}`}>Due Date</th>
            <th className={`${cellHeadingStyles}`}>Action</th>
          </tr>
        </thead>

          {props.data.length != 0 ?
            renderTableBody(props.data) :
            <th className={`${cellStyles}`}>Loading invoices!</th>
          }

      </table>
    </div>
  )
}

export default InvoiceTable;
