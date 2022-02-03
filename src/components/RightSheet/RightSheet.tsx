import { SheetContext } from 'context/SheetProvider';
import React from 'react';
import styles from './RightSheet.module.css';
import { buildGesture, cleanGesture, Gesture } from '../../helpers/gestureDetector';

interface IRightSheet {
  children: React.ReactElement
}
function RightSheet({
  children,
}: IRightSheet): React.ReactElement {
  const { sheet: { rightSheet }, updateSheet } = React.useContext(SheetContext);
  const sheetRef = React.useRef<HTMLDivElement>(null);
  function acceptGesture(gest: Gesture): void {
    if (gest === Gesture.RIGHT) {
      if (updateSheet) { updateSheet('rightSheet', false); }
    }
  }
  React.useEffect(() => {
    const sheetDiv = sheetRef.current;
    if (sheetDiv) {
      buildGesture(sheetDiv, acceptGesture);
    }
    return () => {
      if (sheetDiv) {
        cleanGesture(sheetDiv, acceptGesture);
      }
    };
  }, [sheetRef]);

  return (
    <div
      ref={sheetRef}
      className={styles.rightsheet}
      style={{
        right: rightSheet ? '-10px' : '-320px',
      }}
      aria-hidden
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

export default RightSheet;
