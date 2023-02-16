const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
import SuperAdmin from "../models/SuperAdmin";

mongoose.set("strictQuery", true);

const AdminAuth = (handler) => async (req, res) => {
  try {
    console.log("Super-Admin-Auth");
    return new Promise((resolve, reject) => {
      let token = req.headers.authorization;
      jwt.verify(
        token,
        process.env.SUPER_ADMIN_JWT_SECRET_KEY,
        async (err, decoded) => {
          if (err) {
            res
              .status(401)
              .json({ status: false, Error: "Invaid User session Token" });
            reject(err);
          } else if (decoded.id) {
            let superAdmin = await SuperAdmin.findOne({ _id: decoded.id });
            if (superAdmin) {
              console.log("Verified")
              req.superAdminId = decoded.id;
              handler(req, res);
              resolve();
            }
            else {
              return res
                .status(501)
                .json({ status: false, Error: "Invalid Session" });
            }
          }
        }
      );
    });
  } catch (error) {
    console.error({ error: error });
    return res
      .status(500)
      .json({ status: false, Error: "Internal Srever Error" });
  }
 
};

export default AdminAuth;
