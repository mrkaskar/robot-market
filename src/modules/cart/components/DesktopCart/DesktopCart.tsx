import React from 'react';
import styles from 'modules/cart/components/DesktopCart/DesktopCart.module.css';
import CartWrapper from 'modules/cart/components/CartWrapper/CartWrapper';

function DesktopCart(): React.ReactElement {
  const [top, setTop] = React.useState(40);
  React.useEffect(() => {
    function detectScroll(): void {
      if (document.documentElement.scrollTop > 100) {
        setTop(20);
      } else {
        setTop(40);
      }
    }
    window.addEventListener('scroll', detectScroll);

    return () => window.removeEventListener('scroll', detectScroll);
  }, []);
  return (
    <div
      className={styles.cart__desktop}
      style={{
        top: `${top}px`,
      }}
    >
      <CartWrapper />
    </div>
  );
}

export default DesktopCart;
