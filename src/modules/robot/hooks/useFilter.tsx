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
    let filtersToUpdate = [...filters];
    if (type !== 'All') {
      filtersToUpdate = filtersToUpdate.filter((t) => t !== 'All');
      filtersToUpdate.push(type);
    } else {
      filtersToUpdate = ['All'];
    }
    setFilters(filtersToUpdate);
  };

  const removeFilter = (type: string): void => {
    if (filters.length === 1) {
      setFilters(['All']);
      return;
    }
    if (type !== 'All') { setFilters(filters.filter((f) => f !== type)); }
  };

  return { addFilter, removeFilter, filters };
}

export default useFilter;
