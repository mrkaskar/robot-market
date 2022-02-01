import React from 'react';

interface ISheetContext {
  sheet: { rightSheet: boolean }
  updateSheet?: (key: 'rightSheet', set?: boolean) => void
}

export const SheetContext = React.createContext<ISheetContext>({ sheet: { rightSheet: false } });

function SheetProvider({ children }: { children: React.ReactElement }): React.ReactElement {
  const [sheet, setSheet] = React.useState({
    rightSheet: false,
  });
  const updateSheet = React.useCallback((key: 'rightSheet', set?: boolean): void => {
    let toUpdate: boolean;
    if (set !== undefined) toUpdate = set;
    else toUpdate = !sheet[key];
    setSheet({ ...sheet, [key]: toUpdate });
  }, [sheet]);

  const contextValue = React.useMemo(() => ({ sheet, updateSheet }), [sheet, updateSheet]);

  return (
    <SheetContext.Provider value={contextValue}>
      {children}
    </SheetContext.Provider>
  );
}

export default SheetProvider;
