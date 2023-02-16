import Product from "../../../models/Product";
import connectDB from "../../../middleware/Connection";

const handler = async (req, res) => {
  if (req.method == "GET") {
    const { category, slug, brand, color, size, newArivals, top } = req.query;
    let items = {};
    try {
      if (category && !brand && category.length <= 25 && !slug) {
        items = await productsByCategory(category);
      } else if (!category && !brand && slug && slug.length <= 10) {
        items = await Product.findOne(
          { slug },
          { _id: 0, sellQty: 0, adminId: 0, createdAt: 0, updatedAt: 0 }
        );
      } else if (!category && !slug && brand && brand.length <= 40) {
        items = await Product.find(
          { brand },
          { _id: 0, sellQty: 0, adminId: 0, createdAt: 0, updatedAt: 0 }
        );
      }
      return res.status(200).json({ status: true, items });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        error: error,
      });
    }
  }
};

const productsByCategory = async (category) => {
  let products = await Product.find(
    { category },
    { _id: 0, sellQty: 0, adminId: 0, createdAt: 0, updatedAt: 0 }
  ).sort({ _id: -1 });
  // let products = await Product.find({'availableQty': {$ne : 0}, category:"T-shirt"})
  let items = {};
  // Loop though all products {T-shirt},
  // if item in tshirt object, update its color and size array.
  //To findout which are avilable in what verients.
  for (let item of products) {
    if (item.title in items) {
      if (
        !items[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        items[item.title].color.push(item.color);
      }
      if (
        !items[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        items[item.title].size.push(item.size);
      }
    } else {
      items[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        items[item.title].color = [item.color];
        items[item.title].size = [item.size];
      } else {
        items[item.title].color = [];
        items[item.title].size = [];
      }
    }
  }
  return items;
};

export default connectDB(handler);
