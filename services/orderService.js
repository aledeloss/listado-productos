const uuid = require('uuid'); //
const Order = require('../models/Order');
const Product = require('../models/Product');
// const { createTicket } = require("../utils/pdfGen");

const newOrder = async (req) => {
  const { clientId, items } = req.body;

  const validateOrder = items.map((item) => {});
  const newOrder = new Order({
    uuid: uuid(),
    clientId,
    items,
  });
};

const approveOrderProducts = async (items) => {
  await Promise.all(
    items.map(async (item) => {
      await Product.findById(item.id, function (err, data) {
        if (data.stock >= item.quantity && data.price === item.price) {
          console.log('ok');
          // approvedProduct.push(true);
        } else {
          res
            .status(400)
            .json({ message: 'Datos ingresados incorrectos', product: item });
        }
      });
    })
  ).then(() => {
    return true;
  });
};
// const approvedOrder = Promise.all(productsArray);
// approvedOrder.then(console.log('ahora sì', approvedOrder));
// return approvedOrder;
// if ((await approvedOrder).length === products.length) return true;
// return false;
// console.log(product);
// res.json({ result: product });
// };

//   const [approvePurchaseResult] = await Promise.all(productsArray); // []
//   if (approvePurchaseResult.length) console.log('orden ok'); // [[]]
//   console.log('orden mal'); // return false;
// };

// const approveOrderProducts = async (products) => {
//   const productsArray = products.map(({ id, price, quantity }) =>
//     Product.find({
//       _id: id,
//       price: price,
//       stock: { $gte: quantity },
//       enable: true,
//     })
//   );
// };

const updateStock = async (products) => {
  console.log(products);
  try {
    const result = products.map(({ id, quantity }) => {
      Product.updateOne(
        { _id: id },
        {
          $inc: { stock: -quantity },
        }
      );
    });
    const [updatedStock] = await Promise.all(result);
    console.log(updatedStock);
    return;
  } catch (e) {
    console.error(e);
  }
};
module.exports = {
  newOrder,
  approveOrderProducts,
};