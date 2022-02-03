import React from 'react';
import styles from 'modules/cart/components/CartItem/CartItem.module.css';
import { ICart } from 'modules/cart/state/cartState';

function CartItem({
  name,
  img,
  count,
  price,
}: ICart): React.ReactElement {
  return (
    <div className={styles.cart_item}>
      {name}
    </div>
  );
}

export default CartItem;
