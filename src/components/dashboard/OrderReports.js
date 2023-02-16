/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Example({ orders }) {
  const convert = () => {
    let tablePending = [["Order Id", "Order By", "Email", "Status", "Amount"]];
    let tableDelivered = [
      ["Order Id", "Order By", "Email", "Status", "Amount"],
    ];
    let tableShipped = [["Order Id", "Order By", "Email", "Status", "Amount"]];
    // let tableInitiate = [["Order Id", "Order By", "Email", "Status", "Amount"]];
    let tablePlaced = [["Order Id", "Order By", "Email", "Status", "Amount"]];
    let tableSubtotal = [["Subtotal", "Amount"]];
    let subtotal = 0;
    orders.map((order) => {
      if (order.status == "Pending") {
        tablePending.push([
          order.orderID,
          order.name,
          order.email,
          order.status,
          "Pkr " + order.amount,
        ]);
        subtotal += order.amount;
      } else if (order.status == "Placed") {
        tablePlaced.push([
          order.orderID,
          order.name,
          order.email,
          order.status,
          "Pkr " + order.amount,
        ]);
        subtotal += order.amount;
      } else if (order.status == "Shipped") {
        tableShipped.push([
          order.orderID,
          order.name,
          order.email,
          order.status,
          "Pkr " + order.amount,
        ]);
        subtotal += order.amount;
      } else if (order.status == "Delivered") {
        tableDelivered.push([
          order.orderID,
          order.name,
          order.email,
          order.status,
          "Pkr " + order.amount,
        ]);
        subtotal += order.amount;
      }
    });
    tableSubtotal.push(["Subtotal", ` Pkr ${subtotal}`]);

    const pdf = new jsPDF();
    pdf.autoTable(tablePending[0], tablePending.slice(1), {
      startY: 20,
      head: [tablePending[0]],
      body: tablePending.slice(1),
    });
    pdf.autoTable(tablePlaced[0], tablePlaced.slice(1), {
      startY: pdf.lastAutoTable.finalY + 20,
      head: [tablePlaced[0]],
      body: tablePlaced.slice(1),
    });
    pdf.autoTable(tableShipped[0], tableShipped.slice(1), {
      startY: pdf.lastAutoTable.finalY + 20,
      head: [tableShipped[0]],
      body: tableShipped.slice(1),
      theme: "striped",
    });
    pdf.autoTable(tableDelivered[0], tableDelivered.slice(1), {
      startY: pdf.lastAutoTable.finalY + 20,
      head: [tableDelivered[0]],
      body: tableDelivered.slice(1),
      theme: "grid",
    });
    pdf.autoTable(tableSubtotal[0], tableSubtotal.slice(1), {
      startY: pdf.lastAutoTable.finalY + 20,
      head: [tableSubtotal[0]],
      body: tableSubtotal.slice(1),
      theme: "plain",
    });

    // pdf.autoTable({
    //   head: [["Order Id", "Order By", "Email", "Status", "Amount"]],
    //   body: tableData,
    //   startY: 20,
    //   columnWidths: [100, 50, 50],
    //   theme: "grid",
    // });
    pdf.save("All Orders.pdf");
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">All orders</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the orders.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={convert}
          >
            Download PDF
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Order Id
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Order By
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {orders.map((order) => (
                    <tr key={order.orderID}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {order.orderID}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.firstName + " " + order.lastName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm bg text-gray-500">
                        <span
                          style={{
                            backgroundColor:
                              order.status == "Pending"
                                ? "#03c9d7"
                                : order.status == "Placed"
                                ? "#fb9678"
                                : order.status == "Delivered"
                                ? "#00c292"
                                : order.status == "Shipped"
                                ? "#e46a76"
                                : "",
                          }}
                          className="px-1.5 py-0.5 rounded-md text-white font-sati text-xs"
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Pkr {order.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
