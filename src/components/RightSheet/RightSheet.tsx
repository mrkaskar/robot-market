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
  const { sheet: { rightSheet } } = React.useContext(SheetContext);
  const sheetRef = React.useRef<HTMLDivElement>(null);
  function acceptGesture(gest: Gesture): void {
    if (gest === Gesture.LEFT) {
      alert('left');
    } else if (gest === Gesture.RIGHT) {
      alert('right');
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
  }, []);

  return (
    <div
      ref={sheetRef}
      className={styles.rightsheet}
      style={{
        right: rightSheet ? '-10px' : '-300px',
      }}
      aria-hidden
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

export default RightSheet;