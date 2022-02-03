import React from 'react';
import styles from 'modules/cart/components/DesktopCart/DesktopCart.module.css';
import CartWrapper from '../CartWrapper/CartWrapper';

function DesktopCart(): React.ReactElement {
  return (
    <div className={styles.cart__desktop}>
      <CartWrapper />
    </div>
  );
}

export default DesktopCart;
