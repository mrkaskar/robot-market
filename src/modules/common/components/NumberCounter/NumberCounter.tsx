import React from 'react';
import styles from 'modules/common/components/NumberCounter/NumberCounter.module.css';

interface INumberCounter {
  number: number
  onIncrease: () => void
  onDecrease: () => void
}

function NumberCounter({ number, onIncrease, onDecrease }: INumberCounter): React.ReactElement {
  return (
    <div className={styles.number_wrapper}>
      <div
        className={styles.increase}
        aria-hidden
        onClick={onIncrease}
      >
        -

      </div>
      <div className={styles.number}>{number}</div>
      <div
        className={styles.decrease}
        aria-hidden
        onClick={onDecrease}
      >
        +

      </div>
    </div>
  );
}

export default NumberCounter;
