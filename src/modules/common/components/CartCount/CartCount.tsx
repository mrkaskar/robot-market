import React from 'react';
import { ReactComponent as Cart } from './assets/cart.svg';
import styles from './CartCount.module.css';

function CartCount(): React.ReactElement {
  return (
    <div className={styles.cart}>
      <Cart />
    </div>
  );
}

export default CartCount;
