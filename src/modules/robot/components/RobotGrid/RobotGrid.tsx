import React from 'react';
import RobotCard from 'modules/robot/components/RobotCard/RobotCard';
import styles from 'modules/robot/components/RobotGrid/RobotGrid.module.css';
import Error from 'components/Error/Error';
import useDisplayRobot from 'modules/robot/hooks/useDisplayRobot';
import useMobileSize from 'hooks/useMobileSize';
import RobotLoading from '../RobotLoading/RobotLoading';

function RobotGrid(): React.ReactElement {
  const { displayRobots, error, isLoading } = useDisplayRobot();
  const robotPresent = displayRobots?.length > 0;
  const { isMobile } = useMobileSize();

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div
      className={styles.robot_grid}
      style={{
        paddingLeft: `${isMobile ? '20px' : '0px'}`,
      }}
    >
      {
        (robotPresent || !isLoading)
          ? displayRobots?.map((r) => (
            <div key={r.name} className={styles.robot}>
              <RobotCard {...r} />
            </div>
          ))
          : Array.from(Array(9).keys())
            .map((e) => (
              <div key={e} className={styles.robot}>
                <RobotLoading />
              </div>
            ))

      }
    </div>
  );
}

export default RobotGrid;
