import useApi from 'hooks/useApi';
import useAsync from 'hooks/useAsync';
import React from 'react';
import getAllRobots from '../api';
import styles from './RobotGrid.module.css';

function RobotGrid(): React.ReactElement {
  const {
    isLoading, isError, data, error,
  } = useApi({ apiFun: getAllRobots });

  return (
    <div className={styles.robot_grid}>
      {data && JSON.stringify(data)}
      {error && JSON.stringify(error)}
      <div className={styles.robot}>
        Robot 1
      </div>
      <div className={styles.robot}>
        Robot 1
      </div>
      <div className={styles.robot}>
        Robot 1
      </div>
      <div className={styles.robot}>
        Robot 1
      </div>
    </div>
  );
}

export default RobotGrid;
