import Product from "../../../models/Product";
import connectDB from "../../../middleware/Connection";
// import AdminAuth from "../../../middleware/AdminAuth";
import AllAuth from "../../../middleware/AllAuth";

// First AdminAuth will run to verify the user.
// After that it will add the product.

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

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let slug = makeid(6);
    try {
      let product = {
        adminId: req.id,
        addedBy: req.name,
        title: req.body.title,
        brand: req.body.brand,
        slug: slug,
        desc: req.body.desc,
        img: req.body.img,
        category: req.body.category,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        availableQty: req.body.availableQty,
        rating: req.body.rating,
        tax: req.body.tax,
        sale: 0,
        bestSeller: req.body.bestSeller,
        top: req.body.top,
        newCollection: req.body.newCollection,
      };
      let p = new Product(product);
      await p.save();
      console.log(p)
      
      // for (let i = 0; i < req.body.length; i++) {
      //   let slug = makeid(6);
      //   let p = new Product({
      //     adminId: req.id,
      //     addedBy: req.name,
      //     title: req.body[i].title,
      //     brand: req.body[i].brand,
      //     slug: slug,
      //     desc: req.body[i].desc,
      //     img: req.body[i].img,
      //     category: req.body[i].category,
      //     price: req.body[i].price,
      //     size: req.body[i].size,
      //     color: req.body[i].color,
      //     availableQty: req.body[i].availableQty,
      //     rating: req.body[i].rating,
      //     tax: req.body[i].tax,
      //     sale: 0,
      //     bestSeller: req.body.bestSeller,
      //     top: req.body.top,
      //     newCollection: req.body.newCollection,
      //   });
      //   let check = await p.save();
      // }
      // console.log(product);
      return res.status(200).json({ status: true, message: "Success" });
    } catch (error) {
      console.log(error);
      return res.status(501).json({ Error: error });
    }
  } else return res.status(500).json({ Error: "This method is not allowed" });
};

export default connectDB(AllAuth(handler));
