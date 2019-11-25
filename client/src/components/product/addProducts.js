// import React, { Component } from 'react';
// import axios from 'axios';

// export default class CreateUser extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeImg = this.onChangeImg.bind(this);
//     this.onChangeProduct_name = this.onChangeProduct_name.bind(this);
//     this.onChangePrice = this.onChangePrice.bind(this);
//     this.onChangeQuantity = this.onChangeQuantity.bind(this);
//     this.onChangeProducts_description = this.onChangeProducts_description.bind(this);
//     this.onChangeTypeOfproducts = this.onChangeTypeOfproducts.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       img : '',
//       product_name:'',
//       product_description:'',
//       quantity: 0,
//       price: 0,
//       typeOfproducts:''
//     }
//   }

//   onChangeImg(e) {
//     this.setState({
//       img: e.target.value
//     })
//   }
//   onChangeProduct_name(e) {
//     this.setState({
//       product_name: e.target.value
//     })
//   }
//   onChangePrice(e) {
//     this.setState({
//       price: e.target.value
//     })
//   }
//   onChangeProducts_description(e) {
//     this.setState({
//       product_description: e.target.value
//     })
//   }


//   onChangeQuantity(e) {
//     this.setState({
//       quantity: e.target.value
//     })
//   }
//   onChangeTypeOfproducts(e) {
//     this.setState({
//       typeOfproducts: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const products = {
//       img: this.state.img,
//       product_name: this.state.product_name,
//       product_description: this.state.product_description,
//       price: this.state.price,
//       typeOfproducts: this.state.typeOfproducts
//     }

//     console.log(products)

//     axios.post('/api/products/add', products)
//       .then(res => console.log(res.data));

//     this.setState({
//       img : '',
//       product_name:'',
//       product_description:'',
//       quantity:'',
//       price:'',
//       typeOfproducts:''
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>Create Product</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group"> 
//             <label>Img </label>
//             <input type="text"
//                 required
//                 className="form-control"
//                 value={this.state.img}
//                 onChange={this.onChangeImg}
//                 />
//           </div>
//           <div className="form-group"> 
//             <label>Product Name: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.product_name}
//                 onChange={this.onChangeProduct_name}
//                 />
//           </div>
//           <div className="form-group"> 
//             <label>Products Description</label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.product_description}
//                 onChange={this.onChangeProducts_description}
//                 />
//           </div>
//           <div className="form-group"> 
//             <label>Price: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.price}
//                 onChange={this.onChangePrice}
//                 />
//           </div>
//           <div className="form-group"> 
//             <label>Quantity: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.quantity}
//                 onChange={this.onChangeQuantity}
//                 />
//           </div>
//           <div className="form-group"> 
//             <label>Type: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.typeOfproducts}
//                 onChange={this.onChangeTypeOfproducts}
//                 />
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Create product" className="btn btn-primary" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }