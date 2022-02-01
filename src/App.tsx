import * as React from 'react';
import useSize, { Size } from 'hooks/useScreensize';
import styles from 'App.module.css';
import RightSheet from 'components/RightSheet/RightSheet';
import { SheetContext } from 'context/SheetProvider';
import Home from 'pages/Home';

function App(): React.ReactElement {
  const media = useSize();
  const { sheet, updateSheet } = React.useContext(SheetContext);
  const toggleRightSheet = (): void => {
    if (updateSheet && media === Size.MOBILE) updateSheet('rightSheet');
  };
  return (
    <div
      className={styles.App}
      aria-hidden
      onClick={() => {
        if (sheet.rightSheet) toggleRightSheet();
      }}
      style={{
        paddingLeft: media === Size.MOBILE ? '20px' : '50px',
      }}
    >
      <Home />
      <RightSheet>
        <p>This is inside the sheet</p>
      </RightSheet>
    </div>
  );
}

export default App;
