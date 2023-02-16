// import AdminInfo from '../../../model/AdminInfo';
import connectDB from "../../../middleware/Connection";
import SuperAdminAuth from "../../../middleware/SuperAdminAuth";
import User from "../../../models/User";
import Admin from "../../../models/Admin";
import SuperAdmin from "../../../models/SuperAdmin";
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { firstName, lastName, email, password } = req.body;
      if ((firstName, lastName, email, password)) {
        let check = await checkUserInDB(email);
        if (check) {
          const cyperText = CryptoJS.AES.encrypt(
            password,
            process.env.ADMIN_PASSWORD_SECRET_KEY
          ).toString();
          const resetToken = makeid(24);
          let admin = new Admin({
            firstName,
            lastName,
            email,
            password: cyperText,
            superAdminId: req.superAdminId,
            resetToken,
          });
          let { _id } = await admin.save();
          console.log(_id);
          // let adminInfo = new AdminInfo({ adminId: _id, name, phone })
          // await adminInfo.save()
          return res
            .status(200)
            .json({ status: true, Message: "Account created" });
        } else {
          return res
            .status(403)
            .json({ status: false, Error: "Invalid Credentials" });
        }
      } else
        return res
          .status(401)
          .json({ status: false, Error: "Invalid arguments" });
    } catch (error) {
      console.error({ error: error });
      return res
        .status(501)
        .json({ status: false, Error: "Internal Srever Error" });
    }
  } else {
    return res
      .status(500)
      .json({ status: false, Error: "This method is not allowed" });
  }
};

const checkUserInDB = async (email) => {
  const PromiseUser = User.findOne({ email });
  const PromiseAdmin = Admin.findOne({ email });
  const PromiseSuperAdmin = SuperAdmin.findOne({ email });

  const user = await PromiseUser;
  const admin = await PromiseAdmin;
  const superAdmin = await PromiseSuperAdmin;
  if (user || admin || superAdmin) return false;
  else return true;
};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export default connectDB(SuperAdminAuth(handler));
