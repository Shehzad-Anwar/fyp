const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  // if (req.method == 'POST') {
  try {
    let token = req.headers.authorization;
    let user, admin, superAdmin;
    user = await userVerify(token);
    // console.log(user);
    if (user == false) {
      admin = await adminVerify(token);
      if (admin == false) {
        superAdmin = await superAdminVerify(token);
        if (superAdmin == false) {
          console.log("invalid");
          res
            .status(401)
            .json({ status: false, message: "Invalid User session." });
        } else return res.status(200).json(superAdmin);
      } else return res.status(200).json(admin);
    } else return res.status(200).json(user);
  } catch (error) {
    console.error({ error: error });
    return res
      .status(401)
      .json({ status: false, Error: "Internal Srever Error" });
  }
  // }
  // else return res.status(403).json({ status: false, Error: 'This method is not allowed' })
};

let userVerify = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      console.log("Not user");
      return false;
    } else if (decoded.id) {
      console.log("Authorized user");
      return {
        status: true,
        email: decoded.email,
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        userId: decoded.id,
        type: "user",
      };
    }
  });
};
let adminVerify = async (token) => {
  return jwt.verify(
    token,
    process.env.ADMIN_JWT_SECRET_KEY,
    async (err, decoded) => {
      if (err) {
        console.log("Not admin");
        return false;
      } else if (decoded.id) {
        console.log("Authorized admin");
        return {
          status: true,
          email: decoded.email,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          userId: decoded.id,
          type: "admin",
        };
      }
    }
  );
};
let superAdminVerify = async (token) => {
  return jwt.verify(
    token,
    process.env.SUPER_ADMIN_JWT_SECRET_KEY,
    async (err, decoded) => {
      if (err) {
        console.log("Not super Admin");
        return false;
      } else if (decoded.id) {
        console.log("Authorized super Admin");
        return {
          status: true,
          email: decoded.email,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          userId: decoded.id,
          type: "superAdmin",
        };
      }
    }
  );
};

export default handler;
