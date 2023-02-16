const jwt = require("jsonwebtoken");

// Authenticate Admin and SuperAdmin only.

const AllAuth = async (req, res) => {
  try {
    console.log("AllAuth");
    let token = req.headers.authorization;
    let admin, superAdmin;
    admin = verify(process.env.ADMIN_JWT_SECRET_KEY, token);
    if (admin == false) {
      console.log("Not Admin");
      superAdmin = verify(process.env.SUPER_ADMIN_JWT_SECRET_KEY, token);
      if (superAdmin == false) {
        console.log("Not Super Admin");
        return res
          .status(403)
          .json({ status: false, Error: "Invalid users session." });
      } else {
        console.log("Super Admin");
        req.id = superAdmin.id;
        req.name = superAdmin.firstName + " " + superAdmin.lastName;
        return res.status(200).json({ status: true });
      }
    } else {
      console.log("Admin");
      req.id = admin.id;
      req.name = admin.firstName + " " + admin.lastName;
      return res.status(200).json({ status: true });
    }
  } catch (error) {
    console.error({ error: error });
    return res.status(401).json({ status: false, Error: error });
  }
};

const verify = (sercret, token) => {
  let check = jwt.verify(token, sercret, function (err, decoded) {
    if (err) return false;
    else return decoded;
  });
  // console.log(check);
  return check;
};

export default AllAuth;
