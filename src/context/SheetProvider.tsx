import React from 'react';

interface ISheetContext {
  sheet: { rightSheet: boolean }
  updateSheet?: (key: 'rightSheet') => void
}

export const SheetContext = React.createContext<ISheetContext>({ sheet: { rightSheet: false } });

function SheetProvider({ children }: { children: React.ReactElement }): React.ReactElement {
  const [sheet, setSheet] = React.useState({
    rightSheet: false,
  });
  const updateSheet = React.useCallback((key: 'rightSheet'): void => {
    const sheetToUpdate = sheet[key];
    setSheet({ ...sheet, [key]: !sheetToUpdate });
  }, [sheet]);

  const contextValue = React.useMemo(() => ({ sheet, updateSheet }), [sheet, updateSheet]);

  return (
    <SheetContext.Provider value={contextValue}>
      {children}
    </SheetContext.Provider>
  );
}

export default SheetProvider;
