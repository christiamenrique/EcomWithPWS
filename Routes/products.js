//////////////////////////////////////////
///   api endpoints for managing productss //
////////////////////////////////////////
const router = require('express').Router();
let Products = require('../models/products.models');

// 1. get all products on record

router.get('/:type/:price', async (req, res) => {
  const { type, price } = req.params
  const filter = type === "null" || type === "Category" ? {} : {typeOfproducts: type}
  const products = await Products.find(filter)
  products.sort((a, b) => a.price - b.price)
  price === "descend" && products.reverse()
  console.log(type)
  res.json(products)
 
})

router.get('/filter/:id', async (req, res) => {
  const products = await Products.find({$product_name})
  res.json(products)
})

// 2. add a new product
  router.post('/add', async ({body}, res) => {
      Products.create(body)
      .then(dbProducts => {
        res.json(dbProducts)
      })
  .catch(err => {
    res.json(err)
  })

  })

  // 3. delete a product
router.delete("/:id",async (req, res) => {
  const products = await Products.deleteOne({_id: req.params.id})
  res.send(products)
})

// 4. retrieve a specific product and update information
router.post("/update/:id", (req, res) => {
    let id = req.param.id
    console.log(id)
    Products.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                quantity: req.body.quantity,
                img: req.body.img,
                typeOfproduct: req.body.typeOfproduct,
                quantity: req.body.quantity,
                price: req.body.price,
            }

        }, { new: true }
    ).then(data => res.json(data).catch(err => console.error(err)))
});


module.exports = router;