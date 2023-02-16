import Order from "../../../models/Order";
import connectDB from "../../../middleware/Connection";
import AllAuth from "../../../middleware/AllAuth";
import Admin from "../../../models/Admin";
import SuperAdmin from "../../../models/SuperAdmin";

// AdminAuth will verify the admin user to make sure only admin user can update the product.
// After that it will update the product by id (using req.query / req.body).

const handler = async (req, res) => {
  if (req.method == "POST" && req.id) {
    try {
      const { orderID } = req.query;
      console.log(req.id);
      const { status } = req.body;
      console.log(status);
      if (req.body && orderID) {
        const admin = await Admin.findById(req.id);
        const superAdmin = await SuperAdmin.findById(req.id);

        if (admin || superAdmin) {
          console.log('Checked')
          let updated = await Order.findOneAndUpdate({ orderID }, { status });
          // console.log(updated)
          return res
            .status(200)
            .json({ status: true, message: "Updated Success" });
        }
      }
    } catch (error) {
      console.error(error);
      return res
        .status(401)
        .json({ Error: "Invalid request to (updateProducts)", status: false });
    }
  } else
    return res.status(400).json({
      Error: "Invalid request to method (updateProducts)",
      status: false,
    });
};

export default connectDB(AllAuth(handler));
