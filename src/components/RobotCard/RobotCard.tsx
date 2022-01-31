import React from 'react';
import globalStyles from 'global/Global.module.css';
import colors from 'global/colors/colors';
import dateFormatter from 'helpers/dateFormatter';
import { IRobot } from '../../@types/robot';
import styles from './styles/RobotCard.module.css';

function RobotCard({
  name,
  image,
  price,
  stock,
  createdAt,
  material,
}: IRobot): React.ReactElement {
  const { text1, text2 } = colors;

  return (
    <div className={styles.robot_card}>
      <div className={styles.card}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__upper}>
            <img
              src={image}
              alt="robot"
              className={styles.card__robot__img}
            />
            <div>
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
                className={globalStyles.normal}
                style={{ color: text2, marginTop: '6px' }}
              >
                In Stock:
                {' '}
                {stock}
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
        {price}
      </div>

      <div />
    </div>
  );
}

export default RobotCard;
