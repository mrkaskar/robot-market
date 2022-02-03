import Header from 'components/Header/Header';
import RobotFilters from 'modules/robot/components/RobotFilters/RobotFilters';
import RobotGrid from 'modules/robot/components/RobotGrid/RobotGrid';
import React from 'react';
import styles from './Home.module.css';

function Home(): React.ReactElement {
  return (
    <div className={styles.home}>
      <Header />
      <RobotFilters />
      <RobotGrid />
    </div>
  );
}

export default Home;
