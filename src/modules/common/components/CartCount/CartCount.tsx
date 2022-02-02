import React from 'react';
import { ReactComponent as Cart } from './assets/cart.svg';
import styles from './CartCount.module.css';

interface ICartCount {
  count: number;
  onClick: () => void;
}

function CartCount({ count, onClick }: ICartCount): React.ReactElement {
  return (
    <div
      aria-hidden
      onClick={() => onClick()}
    >
      <div
        className={styles.cart}
        aria-hidden
      >
        <div className={styles.cart__number_back}>
          {count}
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default CartCount;
