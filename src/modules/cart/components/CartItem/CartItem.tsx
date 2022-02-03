import React from 'react';
import styles from 'modules/cart/components/CartItem/CartItem.module.css';
import NumberCounter from 'modules/common/components/NumberCounter/NumberCounter';

interface ICartItem {
  name: string
  count: number
  price: string
  img: string
}

function CartItem({
  name, count, price, img,
}: ICartItem): React.ReactElement {
  return (
    <div className={styles.cart__segments}>
      <div className={styles.cart__segments_one}>
        <div className={styles.cart__item_left}>
          <img src={img} alt="robot" className={styles.cart__item_img} />
          <div className={styles.cart__item_info}>
            <div className={styles.cart__item_name}>{name}</div>
            <div className={styles.cart__item_price}>
              ฿
              {' '}
              {price}
              {' '}
              per unit
            </div>
            <div>
              x
              <span style={{ marginRight: '10px' }} />
              <NumberCounter
                number={count}
                onIncrease={() => undefined}
                onDecrease={() => undefined}
              />

            </div>
          </div>

        </div>
      </div>
      <div className={styles.subtotal}>
        ฿ 100
      </div>
    </div>
  );
}

export default CartItem;
