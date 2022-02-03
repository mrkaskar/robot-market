import React from 'react';
import styles from 'modules/cart/components/CartWrapper/CartWrapper.module.css';
import globalStyles from 'global/Global.module.css';
import useCart from 'modules/cart/hooks/useCart';
import CartCount from 'modules/common/components/CartCount/CartCount';
import useMobileSize from 'hooks/useMobileSize';

function Cart(): React.ReactElement {
  const { carts } = useCart();
  const { isMobile } = useMobileSize();
  return (
    <div className={styles.cart__area}>
      <div
        className={styles.cart__header}
      >
        <span style={{ marginRight: '10px' }}>Your robots in Cart</span>
        {!isMobile
          && <CartCount count={0} onClick={() => undefined} />}
      </div>
      {
        Object.keys(carts).length < 1
          ? (
            <span
              className={styles.no_item}
            >
              There is no item in cart yet! Please add an item
            </span>
          )
          : (
            <div>
              {
                Object.keys(carts).map((item) => (
                  <div>
                    <p>{carts[item].name}</p>
                    <img src={carts[item].img} alt="robot" />
                    <p>{carts[item].count}</p>
                  </div>
                ))
              }
            </div>
          )
      }
    </div>
  );
}

export default Cart;
