import React from "react";

const PriceMovie = () => {
  <>
    <div className="container mx-auto px-4 py-8">
      {/*  */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Payment
        </button>
      </div>
      {/*  */}
      <div className="mt-8">
        {/*  */}
        {/* {cart.length > 0 ? renderTodo : renderFaild} */}
      </div>
      {/*  */}
      <div className="flex justify-end items-center mt-8">
        <span className="text-gray-600 mr-4">Subtotal:</span>
        {/* <span className="text-xl font-bold">{`$${money}`}</span> */}
        <span className="text-xl font-bold">{444}</span>
      </div>
    </div>
  </>;
};

export default PriceMovie;

// return (
//   <>
//     <div id="popup-cart-desktop" className="clearfix">
//       {/* <div className="title-popup-cart">
//     <img src="//bizweb.dktcdn.net/100/347/923/themes/742041/assets/icon-check.png?1675482347581" alt="WearVN"> <span className="your_product">Bạn đã thêm <span className="cart_name_style">[ <span className="cart-popup-name"><a href="/giay-converse-chuck-70-club-house-a05681c title=" giày="" converse="" chuck="" 70="" club="" house="" -="" a05681c="" size="" 3.0us="" 35.0vn="" 22.0cm"="">Giày Converse Chuck 70 Club House - A05681C - Size 3.0US - Size 35.0VN - 22.0CM</a> </span>]</span> vào giỏ hàng thành công ! </span>
//   </div> */}
//       <div className="wrap_popup">
//         <div className="title-quantity-popup">
//           <span className="cart_status">
//             Giỏ hàng của bạn có <span className="cart-popup-count">3</span>{" "}
//             sản phẩm{" "}
//           </span>{" "}
//           <i className="fa fa-caret-right" aria-hidden="true"></i>
//         </div>
//         <div className="content-popup-cart">
//           <div className="thead-popup">
//             <div style={{ width: "53%" }} className="text-left">
//               Sản phẩm
//             </div>
//             <div style={{ width: "15%" }} className="text-center">
//               Đơn giá
//             </div>
//             <div style={{ width: "15%" }} className="text-center">
//               Số lượng
//             </div>
//             <div style={{ width: "17%" }} className="text-center">
//               Thành tiền
//             </div>
//           </div>
//           <div className="tbody-popup scrollbar-dynamic">
//             <div className="item-popup productid-102825089">
//               <div
//                 style={{ width: "13%" }}
//                 className="border height image_ text-left"
//               >
//                 <div className="item-image">
//                   <a
//                     className="product-image"
//                     // href="/giay-converse-chuck-70-club-house-a05681c"
//                     title="Giày Converse Chuck 70 Club House - A05681C - Size 3.0US - Size 35.0VN - 22.0CM"
//                   >
//                     <img
//                       alt="Giày Converse Chuck 70 Club House - A05681C - Size 3.0US - Size 35.0VN - 22.0CM"
//                       // src="https://bizweb.dktcdn.net/100/347/923/products/a05681c-13.jpg?v=1700027166807"
//                       width="90"
//                     />
//                   </a>
//                 </div>
//               </div>
//               <div style={{ width: "39.8%" }} className="height text-left" />
//               <div className="item-info">
//                 <p className="item-name">
//                   <a
//                     className="text2line textlinefix"
//                     // href="/giay-converse-chuck-70-club-house-a05681c"
//                     title="Giày Converse Chuck 70 Club House - A05681C - Size 3.0US - Size 35.0VN - 22.0CM"
//                   >
//                     Giày Converse Chuck 70 Club House - A05681C
//                   </a>
//                 </p>
//                 <span className="variant-title-popup">
//                   Size 3.0US - Size 35.0VN - 22.0CM
//                 </span>
//                 <a
//                   href="javascript:;"
//                   className="remove-item-cart"
//                   title="Xóa"
//                   data-id="102825089"
//                 >
//                   <i className="fa fa-close"></i>&nbsp;&nbsp;Xoá
//                 </a>
//                 <p
//                   className="addpass"
//                   style={{ color: "#fff", margin: "0px" }}
//                 >
//                   <span className="add_sus" style={{ color: "#898989" }}>
//                     <i
//                       style={{
//                         marginRight: "5px",
//                         color: "#43b743",
//                         fontSize: "13px",
//                       }}
//                       className="fa fa-check"
//                       aria-hidden="true"
//                     ></i>
//                     Sản phẩm vừa thêm!
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div
//               style={{ width: "14.9%" }}
//               className="border height text-center"
//             >
//               <div className="item-price">
//                 <span className="price">2.000.000₫</span>
//               </div>
//             </div>
//             <div
//               style={{ width: "15.1%" }}
//               className="border height text-center"
//             >
//               <div className="qty_h check_">
//                 <input
//                   className="variantID"
//                   type="hidden"
//                   name="variantId"
//                   value="102825089"
//                 />
//                 <button
//                   className="num1 reduced items-count btn-minus"
//                   type="button"
//                 >
//                   -
//                 </button>
//                 <input
//                   type="text"
//                   maxLength={12}
//                   min="0"
//                   className="input-text number-sidebar qtyItemP102825089"
//                   id="qtyItemP102825089"
//                   name="Lines"
//                   size={4}
//                   value="3"
//                 />
//                 <button
//                   className="num2 increase items-count btn-plus"
//                   type="button"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <div
//               style={{ width: "17.2%" }}
//               className="border height text-center"
//             >
//               <span className="cart-price">
//                 {" "}
//                 <span className="price">6.000.000₫</span>{" "}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="tfoot-popup">
//           <div className="tfoot-popup-1 a-right clearfix">
//             <span className="total-p popup-total">
//               Tổng tiền thanh toán:{" "}
//               <span className="total-price">6.000.000₫</span>
//             </span>
//           </div>
//           <div className="tfoot-popup-2 clearfix">
//             <a
//               className="button buy_ btn-proceed-checkout"
//               title="Thực hiện thanh toán"
//               // href="/checkout"
//             >
//               <span>Thực hiện thanh toán</span>
//             </a>
//             <a
//               className="button checkout_ btn-proceed-checkout"
//               title="Tiếp tục mua hàng"
//             >
//               <span>
//                 <span>Tiếp tục mua hàng</span>
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//       <a title="Close" className="close-window">
//         <i className="fa fa-close"></i>
//       </a>
//     </div>
//     ;
//   </>
// );
