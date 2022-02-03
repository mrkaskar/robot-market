import useRobot from 'modules/robot/hooks/useRobot';
import React from 'react';
import styles from 'modules/robot/components/RobotFilters/RobotFilters.module.css';
import useMobileSize from 'hooks/useMobileSize';
import useFilter from 'modules/robot/hooks/useFilter';
import RobotFilterCard from '../RobotFIlterCard/RobotFilterCard';
import { ReactComponent as Filter } from './assets/filter.svg';

function RobotFilters(): React.ReactElement {
  const robotData = useRobot();
  const [robotTypes, setRobotTypes] = React.useState<string[]>([]);
  const { isMobile } = useMobileSize();

  const [showFilter, setShowFilter] = React.useState(true);
  const { filters, addFilter, removeFilter } = useFilter();

  React.useEffect(() => {
    if (robotData) {
      setRobotTypes(robotData.robotTypes);
    }
  }, [robotData]);

  React.useLayoutEffect(() => {
    if (isMobile) {
      setShowFilter(false);
    }
  }, [isMobile]);

  return (
    <div>
      {
        isMobile
        && (
          <span
            aria-hidden
            className={styles.filter_button}
            onClick={() => setShowFilter(!showFilter)}
          >
            <Filter className={styles.filter_icon} />
          </span>
        )
      }
      {
        showFilter

        && (
          <div
            className={styles.filter_area}
            style={{
              width: `${isMobile ? '80%' : '61%'}`,
              position: `${isMobile ? 'fixed' : 'static'}`,
            }}
          >
            {
              robotTypes.map((type) => (
                <div key={type}>
                  <RobotFilterCard
                    label={type}
                    onClick={() => {
                      if (filters.includes(type)) {
                        removeFilter(type);
                      } else {
                        addFilter(type);
                      }
                    }}
                    active={filters.includes(type)}
                  />
                </div>
              ))
            }
          </div>
        )
      }

    </div>
  );
}

export default RobotFilters;
