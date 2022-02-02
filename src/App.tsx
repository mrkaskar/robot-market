import * as React from 'react';
import useSize, { Size } from 'hooks/useScreensize';
import styles from 'App.module.css';
import RightSheet from 'components/RightSheet/RightSheet';
import { SheetContext } from 'context/SheetProvider';
import Home from 'pages/Home';
import RobotContextProvider from 'modules/robot/components/RobotContext/RobotContextProvider';
import Cart from 'modules/cart/Cart';
import CartCount from 'modules/common/components/CartCount/CartCount';

function App(): React.ReactElement {
  const media = useSize();
  const { sheet, updateSheet } = React.useContext(SheetContext);
  const isMobile = media === Size.MOBILE;
  const toggleRightSheet = (): void => {
    if (updateSheet && isMobile) updateSheet('rightSheet');
  };
  return (
    <div
      className={styles.App}
      aria-hidden
      onClick={() => {
        if (sheet.rightSheet) toggleRightSheet();
      }}
      style={{
        paddingLeft: isMobile ? '20px' : '50px',
      }}
    >
      <RobotContextProvider>
        <Home />
        <RightSheet>
          <Cart />
        </RightSheet>

        {
          isMobile
          && (
            <div className={styles.floating_cart}>
              <CartCount count={3} onClick={toggleRightSheet} />
            </div>
          )
        }

      </RobotContextProvider>
    </div>
  );
}

export default App;
