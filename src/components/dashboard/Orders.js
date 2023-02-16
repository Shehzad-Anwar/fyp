import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Link from "next/link";

const Orders = ({ title, orders }) => {
  return (
    <BaseCard title={!title ? "Product Perfomance" : title}>
      <Table
        aria-label="simple table"
        sx={{
          // mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Order Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Order By
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Delivery
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                View Details
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderID}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {order.orderID}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {order.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {order.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Pkr {order.amount}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    color: "#fff",
                    backgroundColor:
                      order.status == "Pending"
                        ? "secondary.main"
                        : order.status == "Placed"
                        ? "primary.main"
                        : order.status == "Delivered"
                        ? "success.main"
                        : order.status == "Shipped"
                        ? "error.main"
                        : "",
                  }}
                  size="small"
                  label={order.status}
                ></Chip>
              </TableCell>
              <TableCell>
                <Typography variant="h6">
                  <Link
                    key={order.orderID}
                    href={`/Admin/OrderDetails?id=${order.orderID}`}
                  >
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      View Details
                    </Typography>
                  </Link>
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default Orders;
