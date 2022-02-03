import React from 'react';
import styles from 'modules/common/components/NumberCounter/NumberCounter.module.css';

interface INumberCounter {
  number: number
  onIncrease: () => void
  onDecrease: () => void
  increaseActive: boolean | undefined
  decreaseActive: boolean
}

function NumberCounter({
  number,
  onIncrease,
  onDecrease,
  increaseActive,
  decreaseActive,
}: INumberCounter): React.ReactElement {
  return (
    <div className={styles.number_wrapper}>
      <div
        className={styles.decrease}
        style={{
          background: `${decreaseActive
            ? 'linear-gradient(137.39deg, #34AAFF -15.07%, #97D3FF 145.21%)'
            : 'linear-gradient(137.39deg, #AAAAAA -15.07%, #CACACA 145.21%)'}`,
        }}
        aria-hidden
        onClick={onDecrease}
      >
        -

      </div>
      <div className={styles.number}>{number}</div>
      <div
        className={styles.increase}
        style={{
          background: `${increaseActive
            ? 'linear-gradient(137.39deg, #34AAFF -15.07%, #97D3FF 145.21%)'
            : 'linear-gradient(137.39deg, #AAAAAA -15.07%, #CACACA 145.21%)'}`,
        }}
        aria-hidden
        onClick={onIncrease}
      >
        +

      </div>
    </div>
  );
}

export default NumberCounter;
