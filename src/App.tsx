import * as React from 'react';
import colors from 'global/colors/colors';
import { ReactComponent as Logo } from 'assets/logo.svg';
import useSize, { Size } from 'hooks/useScreensize';
import styles from 'App.module.css';
import CartCount from 'modules/common/components/CartCount/CartCount';
import RightSheet from 'components/RightSheet/RightSheet';
import { SheetContext } from 'context/SheetProvider';

function App(): React.ReactElement {
  const media = useSize();
  const { sheet, updateSheet } = React.useContext(SheetContext);
  const toggleRightSheet = (): void => {
    if (updateSheet) updateSheet('rightSheet');
  };
  return (
    <div
      className={styles.App}
      aria-hidden
      onClick={() => {
        if (sheet.rightSheet) toggleRightSheet();
      }}
    >
      <div id="header">
        <Logo />
        <h1 style={{ fontFamily: 'poppins', color: colors.primary }}>Robot Market</h1>
        <CartCount />
      </div>
      {
        JSON.stringify(sheet)
      }
      <button
        type="button"
        onClick={toggleRightSheet}
      >
        Click
      </button>
      <RightSheet>
        <p>This is inside the sheet</p>
      </RightSheet>
    </div>
  );
}

export default App;
