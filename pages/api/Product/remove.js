import Product from "../../../models/Product";
import connectDB from "../../../middleware/Connection";
import AllAuth from "../../../middleware/AllAuth";

const handler = async (req, res) => {
  if (req.method = 'DELETE' && req.id) {
    try {
      const { id } = req.query;
      if (req.body && !id) {
        for (let i = 0; i < req.body.length; i++) {
          await Product.findByIdAndDelete(req.body[i].id);
        }
        return res
          .status(200)
          .json({ status: true, message: "Delete Success" });
      } else if (id) {
        await Product.findByIdAndDelete(id);
        return res
          .status(200)
          .json({ status: true, message: "Delete Success" });
      }
    } catch (error) {
      console.error(error);
      return res.status(501).json({ Error: "Invalid request", error: error });
    }
  } else return res.status(500).json({ Error: "Invalid request to method" });
};

export default connectDB(AllAuth(handler));
