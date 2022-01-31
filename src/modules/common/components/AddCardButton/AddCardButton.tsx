import colors from 'global/colors/colors';
import React from 'react';
import styles from './AddCartButton.module.css';
import { ReactComponent as AddCart } from './assets/addcart.svg';

function AddCardButton(): React.ReactElement {
  const { primary } = colors;
  return (
    <button type="button" className={`${styles.cart_button} ${styles.active_button}`}>
      <AddCart className={styles.add_cart_icon} />
      <span style={{ color: primary }}>
        Add to Cart
      </span>
    </button>
  );
}

export default AddCardButton;
