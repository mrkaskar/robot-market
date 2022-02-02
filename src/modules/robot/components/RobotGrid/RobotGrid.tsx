import useRobot from 'modules/robot/hooks/useRobot';
import React from 'react';
import RobotCard from 'modules/robot/components/RobotCard/RobotCard';
import styles from 'modules/robot/components/RobotGrid/RobotGrid.module.css';
import Error from 'components/Error/Error';
import RobotLoading from '../RobotLoading/RobotLoading';
import Pagination from '../Pagination/Pagination';

function RobotGrid(): React.ReactElement {
  const {
    isLoading, isError, robots, error,
  } = useRobot();

  const robotPresent = robots && robots?.length > 0;

  if (isError && error) {
    return <Error message={error.message} />;
  }
  return (
    <>
      <div className={styles.robot_grid}>
        {
          (robotPresent || !isLoading)
            ? robots?.map((r) => (
              <div className={styles.robot}>
                <RobotCard {...r} />
              </div>
            ))
            : Array.from(Array(10).keys())
              .map(() => (
                <div className={styles.robot}>
                  <RobotLoading />
                </div>
              ))

        }
      </div>
      <Pagination />
    </>
  );
}

export default RobotGrid;
