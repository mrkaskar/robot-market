import { useAtom } from 'jotai';
import filterState from 'modules/robot/state/filterState';

interface IFilterFunction {
  addFilter: (type: string) => void
  removeFilter: (type: string) => void
  filters: string[]
}
function useFilter(): IFilterFunction {
  const [filters, setFilters] = useAtom(filterState);

  const addFilter = (type: string): void => {
    setFilters([...filters, type]);
  };

  const removeFilter = (type: string): void => {
    setFilters(filters.filter((f) => f !== type));
  };

  return { addFilter, removeFilter, filters };
}

export default useFilter;
