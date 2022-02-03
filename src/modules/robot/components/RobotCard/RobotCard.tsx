import React from 'react';
import globalStyles from 'global/Global.module.css';
import colors from 'global/colors/colors';
import dateFormatter from 'helpers/dateFormatter';
import AddCardButton from 'modules/common/components/AddCardButton/AddCardButton';
import { IRobot } from 'types/robot';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useCart from 'modules/cart/hooks/useCart';
import useRobot from 'modules/robot/hooks/useRobot';
import formatNumber from 'helpers/numberFormatter';
import styles from 'modules/robot/components/RobotCard/RobotCard.module.css';

import 'react-lazy-load-image-component/src/effects/blur.css';

function RobotCard({
  name,
  image,
  price,
  stock,
  createdAt,
  material,
}: IRobot): React.ReactElement {
  const { text1, text2 } = colors;
  const robots = useRobot();

  const [currentStock, setCurrentStock] = React.useState(stock);

  const { addToCart, carts } = useCart();
  const robotsInCart = Object.keys(carts);

  React.useEffect(() => {
    if (robotsInCart.includes(name) && robots) {
      const availableStock = robots.robotStock[name] - carts[name].count;
      if (availableStock > -1) { setCurrentStock(availableStock); }
    } else if (robots) setCurrentStock(robots.robotStock[name]);
  }, [carts, name, robots, robotsInCart]);

  return (
    <div className={styles.robot_card}>
      <div
        className={styles.card}
        style={{
          boxShadow: `${robotsInCart.includes(name)

            ? '0px 8px 16px -2px #B7E1FF'
            : '0px 8px 16px -2px rgba(98, 98, 98, 0.1)'}`,
        }}
      >
        <div className={styles.card__wrapper}>
          <div className={styles.card__upper}>
            <div className={styles.img}>
              <LazyLoadImage
                src={image}
                alt="robot"
                effect="blur"
                width="120px"
                height="120px"
                delayTime={0}
                className={styles.card__robot__img}
              />
            </div>
            <div
              style={{ marginLeft: '20px' }}
            >
              <span
                className={globalStyles.header}
                style={{ color: text1, marginTop: '20px' }}
              >
                {name}

              </span>
              <br />
              <span className={globalStyles.normal} style={{ color: text1 }}>
                {material}
                {' '}
                Material
              </span>
              <br />
              <span
                className={globalStyles.small}
                style={{ color: text2, marginTop: '6px' }}
              >
                In Stock:
                {' '}
                {currentStock}
              </span>
            </div>
          </div>
          <div className={styles.card__lower}>
            <p
              className={globalStyles.normal}
              style={{
                color: text1,
                width: '120px',
                textAlign: 'center',
                marginTop: '15px',
              }}
            >
              {dateFormatter(createdAt)}

            </p>
            <AddCardButton
              onClick={() => addToCart({ name, img: image, price })}
              active={currentStock !== 0}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.price_tag} ${globalStyles.normal}`}
        style={{
          fontWeight: 700,
          letterSpacing: '1px',
        }}
      >
        ฿
        {' '}
        {formatNumber(+price)}
      </div>

      <div />
    </div>
  );
}

export default React.memo(RobotCard);
