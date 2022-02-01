import colors from 'global/colors/colors';
import React from 'react';
import styles from './FilterCard.module.css';
import { ReactComponent as Check } from './assets/check.svg';

interface IFilterCard {
  active?: boolean
}

function FilterCard({ active }: IFilterCard): React.ReactElement {
  const { primary, inactive } = colors;
  return (
    <div className={styles.filter_card}>
      <div
        className={styles.filter_card__wrapper}
        style={{ backgroundColor: active ? primary : inactive }}
      >
        <div className={styles.checkbox}>
          {
            active
            && <Check />
          }
        </div>
        <span className={styles.text}>
          Plastic
        </span>
      </div>
    </div>
  );
}

FilterCard.defaultProps = {
  active: false,
};

export default FilterCard;
