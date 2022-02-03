import React from 'react';
import styles from 'modules/cart/components/CartItem/CartItem.module.css';
import NumberCounter from 'modules/common/components/NumberCounter/NumberCounter';
import useCart from 'modules/cart/hooks/useCart';
import useRobot from 'modules/robot/hooks/useRobot';
import { ReactComponent as Close } from './assets/close.svg';

interface ICartItem {
  name: string
  count: number
  price: string
  img: string
  onClose: () => void
}

function CartItem({
  name, count, price, img, onClose,
}: ICartItem): React.ReactElement {
  const { increaseItem, decreaseItem, carts } = useCart();
  const robots = useRobot();
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

              <span />
              <NumberCounter
                number={count}
                onIncrease={() => increaseItem(name)}
                onDecrease={() => decreaseItem(name)}
                decreaseActive={count !== 1}
                increaseActive={robots && (robots.robotStock[name] !== carts[name].count)}
              />

            </div>
          </div>

        </div>
      </div>
      <div>
        <div
          aria-hidden
          className={styles.close}
          onClick={onClose}
        >
          <Close className={styles.close_icon} />
        </div>
        <div className={styles.subtotal}>
          ฿
          {' '}
          {(+price * count).toFixed(2)}
        </div>

      </div>
    </div>
  );
}

export default CartItem;
