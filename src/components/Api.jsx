// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Api.css";

// const Api = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products?limit=10")
//       .then((res) => setProducts(res.data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//       <div className="menu">
//         <div className="menu__header">
//           <h1>Menu Selections</h1>

//           <div className="menu__buttons">
//             <button className="active">All</button>
//             <button>Cake</button>
//             <button>Ice Cream</button>
//             <button>Drinks</button>
//           </div>
//         </div>

//         <div className="menu__cards">
//           {products.map((item) => (
//             <div className="menu__card" key={item.id}>
//               <div className="menu__image">
//                 <img src={item.thumbnail} alt={item.title} />
//               </div>

//               <p className="menu__category">{item.category}</p>

//               <h3>{item.title}</h3>

//               <div className="menu__bottom">
//                 <div>
//                   <h2>${item.price}</h2>
//                 </div>

//                 <button className="menu__plus">+</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//   );
// };

// export default Api;
