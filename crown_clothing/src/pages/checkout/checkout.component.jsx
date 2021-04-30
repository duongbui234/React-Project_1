import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  cartItemsSelector,
  cartItemsPriceTotal,
} from '../../components/redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styled.scss';

const CheckoutPage = ({ total, cartItems }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: cartItemsPriceTotal,
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CheckoutPage);