import colors from 'global/colors/colors';
import React from 'react';
import styles from './RobotFilterCard.module.css';
import { ReactComponent as Check } from './assets/check.svg';

interface IRobotFilterCard {
  active?: boolean
  label: string
  onClick: () => void
}

function RobotFilterCard({ active, label, onClick }: IRobotFilterCard): React.ReactElement {
  const { primary, inactive } = colors;
  // const size = useScreensize();
  return (
    <div
      aria-hidden
      className={styles.filter_card}
      onClick={onClick}
    >
      <div
        className={styles.filter_card__wrapper}
        style={{
          backgroundColor: active ? primary : inactive,
        }}
      >
        <div className={styles.checkbox}>
          {
            active
            && <Check />
          }
        </div>
        <span className={styles.text}>
          {label}
        </span>
      </div>
    </div>
  );
}

RobotFilterCard.defaultProps = {
  active: false,
};

export default RobotFilterCard;
