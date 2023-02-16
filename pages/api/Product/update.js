import Product from "../../../models/Product";
import connectDB from "../../../middleware/Connection";
import AllAuth from "../../../middleware/AllAuth";

// AllAuth will verify the admin user to make sure only admin user can update the product.
// After that it will update the product by id (using req.query / req.body).

const handler = async (req, res) => {
  if (req.method == "PUT" && req.id) {
    try {
      const { id } = req.query;
      if (req.body && id) {
        let updated = await Product.findByIdAndUpdate(id, req.body);
        return res
          .status(200)
          .json({ status: true, message: "Updated Success" });
      } else {
        return res
          .status(403)
          .json({ status: true, message: "Invalid request" });
      }
    } catch (error) {
      console.error(error);
      return res.status(501).json({ Error: "Invalid request.", status: false });
    }
  } else
    return res.status(500).json({
      Error: "Invalid request to method.",
      status: false,
    });
};

export default connectDB(AllAuth(handler));
