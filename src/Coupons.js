import React from 'react';
import allCoupons from './allCoupons';


class Coupons extends React.Component {

claimCoupon(id) {
  console.log("Coupon claimed!" + id);
}


render() {

  let rows = allCoupons.map(coupon => {
    return ( 
      <div className="coupon" key={coupon.id}>
        <div className="coupon__offer">
        <div className="coupon__offerName">{coupon.name}</div> 
        <div className="coupon__offerDesc">{coupon.desc}</div>
        </div>
      <div className="coupon__prices">
        <div className="coupon__newPrices">{coupon.newPrice.toFixed(2)}</div>
        <div className="coupon__oldPrices">{coupon.oldPrice.toFixed(2)}</div>
      </div>
      <div className="coupon__button">
        <button onClick={() => {this.claimCoupon(coupon.id)}}>
        <div className="coupon__price">{coupon.price}</div>
        <div className="coupon__claim">Claim!</div>
        </button>
      </div>
      </div>
    );
  }

  );


    return (
        <>
        <div className="header">
      <h1>Coupons</h1>
      </div>
      <div className="content">
        {rows}
      </div>
      </>
          );
  }
}
export default Coupons;