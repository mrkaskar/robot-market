import useCart from 'modules/cart/hooks/useCart';
import React from 'react';
import { ReactComponent as Cart } from 'modules/common/components/CartCount/assets/cart.svg';
import styles from 'modules/common/components/CartCount/CartCount.module.css';

interface ICartCount {
  onClick: () => void;
}

function CartCount({ onClick }: ICartCount): React.ReactElement {
  const { carts } = useCart();
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
          {Object.keys(carts).length}
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default CartCount;
