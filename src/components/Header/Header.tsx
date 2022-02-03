import colors from 'global/colors/colors';
import React from 'react';
import { ReactComponent as Logo } from 'components/Header/assets/logo.svg';
import styles from 'components/Header/Header.module.css';

function Header(): React.ReactElement {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <h1 className={styles.header__title} style={{ fontFamily: 'poppins', color: colors.primary }}>Robot Market</h1>
    </div>
  );
}

export default Header;
