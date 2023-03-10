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
import React, { useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
import { useRouter } from "next/router";
import Link from "next/link";
import PopOver from "../../../components/dashboard/PopOver";

const AllProducts = ({ Products, title }) => {
  let id = 1;
  const [Check, setCheck] = useState(false);
  const [products, setproducts] = useState(Products);
  const router = useRouter();

  const deleteProduct = async (id, index) => {
    const token = localStorage.getItem("token");
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/Product/remove?id=${id}`,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    response = await response.json();
    console.log(response);
    if (response.status == true) {
      console.log(index - 2);
      console.log(products[index - 2]);
      delete products[index - 2];
      console.log(products[index - 2]);
      // setproducts({...products,[index - 2]:null})
      window.location.reload(true);
    }

    // useRouter({/})
  };

  return (
    <BaseCard title={!title ? "Product Perfomance" : title}>
      <Table
        aria-label="simple table"
        sx={{
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                ID
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Slug
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Image
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Quantity
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Category
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Price
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Delete
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Update
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.slug}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {id++}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product.title}
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
                        {product.slug}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "11px",
                          display: "flex",
                          fontWeight: "bold",
                        }}
                      >
                        <button
                          className={`border-2 ml-1 bg-white text-x rounded-lg px-2 font-bold font-sati w-auto h-8 focus:outline-none`}
                        >
                          {product.size}
                        </button>
                        <button
                          className={`border-2 ml-1  bg-white rounded-full w-9 h-9 focus:outline-none opacity-70`}
                          style={{ backgroundColor: product.color }}
                        ></button>
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    <img
                      style={{ borderRadius: 10 }}
                      src={
                        product.img.length < 40
                          ? `../../Products/${product.img}`
                          : product.img
                      }
                      width={"30px"}
                      alt=""
                    />
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center" color="textSecondary" variant="h6">
                    {product.availableQty}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: () => {
                        switch (product.category) {
                          case "T-shirt":
                            return "success.main";
                          case "Hoodies":
                            return "primary.main";
                          case "Mugs":
                            return "secondary.main";
                          case "Sticker":
                            return "error.main";
                        }
                      },
                      color: "#fff",
                    }}
                    size="small"
                    label={product.category}
                  ></Chip>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">${product.price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">
                    {/* <span onClick={() => deleteProduct(product._id, id)}> */}
                    <PopOver
                      title={"Delete Alert!"}
                      action={deleteProduct}
                      children={<DeleteForeverRoundedIcon
                        sx={{ color: "error.main", cursor: "pointer" }}
                      />}
                      message={
                        "Are you sure to delete this product, this will parmanently delete this product."
                      }
                      id={product._id}
                      index={id}
                    />

                    {/* </span> */}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">
                    <Link
                      key={products._id}
                      href={`/Admin/UpdateProduct?id=${product._id}`}
                    >
                      <SystemUpdateAltRoundedIcon
                        sx={{ color: "primary.main", cursor: "pointer" }}
                      />
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default AllProducts;
