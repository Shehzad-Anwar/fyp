import connectDB from "../../../middleware/Connection";
import User from "../../../models/User";
import Admin from "../../../models/Admin";
import SuperAdmin from "../../../models/SuperAdmin";
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

export const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { email, password } = req.body;
      if ((email, password)) {
        let user, admin, superAdmin;
        user = await userAuth(email, password);
        if (user == false) {
          admin = await adminAuth(email, password);
          if (admin == false) {
            superAdmin = await superAdminAuth(email, password);
            if (superAdmin == false) {
              console.log("invalid");
              return res
                .status(401)
                .json({ status: false, message: "Invalid User session." });
            } else return res.status(200).json(superAdmin);
          } else return res.status(200).json(admin);
        } else return res.status(200).json(user);
      } else
        return res
          .status(501)
          .json({ status: false, Error: "Invalid arguments" });
    } catch (error) {
      res.status(500).json({ status: "internal server error" });
    }
  } else
    return res
      .status(500)
      .json({ status: "internal server error. (Method not allowed)" });
};

const userAuth = async (email, password) => {
  console.log("User Auth");
  let user = await User.findOne({ email: email });
  if (user) {
    const bytes = CryptoJS.AES.decrypt(
      user.password,
      `${process.env.PASSWORD_SECRET_KEY}`
    );
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
    console.log(decryptedPassword === password);
    if (password === decryptedPassword) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        `${process.env.JWT_SECRET_KEY}`
      );
      return {
        status: true,
        type:'user',
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        // id: user._id,
        token,
      };
    } else return false;
  } else {
    return false;
  }
};

const adminAuth = async (email, password) => {
  console.log("Admin Auth");
  let admin = await Admin.findOne({ email: email });
  if (admin) {
    const bytes = CryptoJS.AES.decrypt(
      admin.password,
      `${process.env.ADMIN_PASSWORD_SECRET_KEY}`
    );
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (password === decryptedPassword) {
      const token = jwt.sign(
        {
          email: admin.email,
          id: admin._id,
          firstName: admin.firstName,
          lastName: admin.lastName,
        },
        `${process.env.ADMIN_JWT_SECRET_KEY}`
      );
      return {
        status: true,
        type: "admin",
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,
        id: admin._id,
        token,
      };
    } else return false;
  } else {
    return false;
  }
};

const superAdminAuth = async (email, password) => {
  console.log("SuperAdmin Auth");
  let superAdmin = await SuperAdmin.findOne({ email: email });
  if (superAdmin) {
    const bytes = CryptoJS.AES.decrypt(
      superAdmin.password,
      `${process.env.SUPER_ADMIN_PASSWORD_SECRET_KEY}`
    );
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
    console.log(decryptedPassword === password);
    if (password === decryptedPassword) {
      const token = jwt.sign(
        {
          email: superAdmin.email,
          id: superAdmin._id,
          firstName: superAdmin.firstName,
          lastName: superAdmin.lastName,
        },
        `${process.env.SUPER_ADMIN_JWT_SECRET_KEY}`
      );
      return {
        status: true,
        type: "superAdmin",
        email: superAdmin.email,
        firstName: superAdmin.firstName,
        lastName: superAdmin.lastName,
        id: superAdmin._id,
        token,
      };
    } else return false;
  } else {
    return false;
  }
};

export default connectDB(handler);
