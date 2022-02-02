import useRobot from 'modules/robot/hooks/useRobot';
import React from 'react';
import styles from 'modules/robot/components/RobotFilters/RobotFilters.module.css';
import useScreensize, { Size } from 'hooks/useScreensize';
import RobotFilterCard from '../RobotFIlterCard/RobotFilterCard';

function RobotFilters(): React.ReactElement {
  const robotData = useRobot();
  const [robotTypes, setRobotTypes] = React.useState<string[]>([]);
  const size = useScreensize();
  const isMobile = size === Size.MOBILE;

  const [showFilter, setShowFilter] = React.useState(!isMobile);

  React.useEffect(() => {
    if (robotData) {
      setRobotTypes(robotData.robotTypes);
    }
  }, [robotData]);

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
            Filters
          </span>
        )
      }
      {
        showFilter

        && (
          <div
            className={styles.filter_area}
            style={{
              width: `${isMobile ? '87%' : '61%'}`,
              position: `${isMobile ? 'absolute' : 'static'}`,
            }}
          >
            {
              robotTypes.map((type) => (
                <RobotFilterCard
                  label={type}
                  onClick={() => undefined}
                  active={type === 'All'}
                />
              ))
            }
          </div>
        )
      }

    </div>
  );
}

export default RobotFilters;
