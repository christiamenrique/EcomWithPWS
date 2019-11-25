const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        img: {
            type: String,
            unique: true
        },

        product_name: {
            type: String,
            required: true,
            trim: true,
        },

        product_description: {
            type: String,
            required: true,
            trim: true

        },

        quantity: {
            type: Number,
            trim: true,
        },
        price: {
            type: Number,
            trim: true
        },

        typeOfproducts: {
            type: String,
        },

    });

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;



// db.products.insertOne(
//     { "img" : "https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-2019-samsung-soundbar-systems_hw-r450_hw-r550_hw-r650_hw-q60r_1.jpg?itok=WgQnPCoH",
//     "product_name" : "Samsung Soundbar",
//     "products_description" : "A wireless subwoofer delivers powerful low-end bass to enhance movies and songs, while a game mode enhances sound effects in your favorite games.It has six speakers with a dedicated center channel to provide crisp, clear dialog.",
//     "quantity" : 34,
//     "price" : 399.99,
//     "typeOfproducts": "speakers"
//   }
//  ) 

//  db.products.insertOne(
//     { "img" : "https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-2019-samsung-soundbar-systems_hw-r450_hw-r550_hw-r650_hw-q60r_1.jpg?itok=WgQnPCoH",
//     "product_name" : "Samsung Soundbar",
//     "products_description" : "A wireless subwoofer delivers powerful low-end bass to enhance movies and songs, while a game mode enhances sound effects in your favorite games.It has six speakers with a dedicated center channel to provide crisp, clear dialog.",
//     "quantity" : 34,
//     "price" : 399.99,
//     "typeOfproducts": "speakers"
//   }
//  )