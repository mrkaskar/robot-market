import colors from 'global/colors/colors';
import React from 'react';
import styles from 'modules/common/components/AddCardButton/AddCartButton.module.css';
import { ReactComponent as AddCart } from 'modules/common/components/AddCardButton/assets/addcart.svg';
import { ReactComponent as DisabledCart } from 'modules/common/components/AddCardButton/assets/disabled_addcart.svg';

interface IAddCartButton {
  onClick: () => void
  active: boolean
}

function AddCardButton({ onClick, active }: IAddCartButton): React.ReactElement {
  const { primary, inactive } = colors;
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.cart_button} ${active ? styles.active_button : ''}`}
    >
      {
        active
          ? <AddCart className={styles.add_cart_icon} />
          : <DisabledCart className={styles.add_cart_icon} />

      }
      <span style={{ color: active ? primary : inactive }}>
        Add to Cart
      </span>
    </button>
  );
}

export default AddCardButton;
