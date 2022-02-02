import useRobot from 'modules/robot/hooks/useRobot';
import React from 'react';
import RobotCard from 'modules/robot/components/RobotCard/RobotCard';
import styles from 'modules/robot/components/RobotGrid/RobotGrid.module.css';
import Error from 'components/Error/Error';
import RobotLoading from '../RobotLoading/RobotLoading';

function RobotGrid(): React.ReactElement {
  const {
    isLoading, isError, robots, error,
  } = useRobot();
  const robotPresent = robots && robots?.length > 0;
  if (isError && error) {
    return <Error message={error.message} />;
  }
  return (
    <div className={styles.robot_grid}>
      {
        (robotPresent || !isLoading)
          ? robots?.map((r, i) => (
            <div className={styles.robot}>
              {(i === 0 || i === 1)
                ? <RobotLoading />
                : <RobotCard {...r} />}
            </div>
          ))
          : [1, 2, 3, 4, 5, 6].map(() => (
            <div className={styles.robot}>
              <RobotLoading />
            </div>
          ))

      }
    </div>
  );
}

export default RobotGrid;
