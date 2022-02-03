import React from 'react';
import styles from 'modules/cart/components/CartWrapper/CartWrapper.module.css';
import useCart from 'modules/cart/hooks/useCart';
import CartCount from 'modules/common/components/CartCount/CartCount';
import useMobileSize from 'hooks/useMobileSize';
import colors from 'global/colors/colors';
import CartItem from '../CartItem/CartItem';

function Cart(): React.ReactElement {
  const { carts } = useCart();
  const { isMobile } = useMobileSize();
  return (
    <div
      className={styles.cart__area}
      style={{
        width: `${isMobile ? '260px' : '290px'}`,
      }}
    >

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
            <div className={styles.cart__items}>
              <div
                className={styles.cart__segments}
                style={{
                  color: colors.inactive,
                }}
              >
                <div className={styles.cart__segments_one}>Item Description</div>
                <div className={styles.cart__segments_two}>Subtotal</div>
              </div>
              {
                Object.keys(carts).map((item) => (
                  <CartItem
                    name={item}
                    img={carts[item].img}
                    price={carts[item].price}
                    count={carts[item].count}
                  />
                ))
              }
            </div>
          )
      }
    </div>
  );
}

export default Cart;
