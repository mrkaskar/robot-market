import Header from 'components/Header/Header';
import useMobileSize from 'hooks/useMobileSize';
import DesktopCart from 'modules/cart/components/DesktopCart/DesktopCart';
import RobotFilters from 'modules/robot/components/RobotFilters/RobotFilters';
import RobotGrid from 'modules/robot/components/RobotGrid/RobotGrid';
import React from 'react';
import styles from './Home.module.css';

function Home(): React.ReactElement {
  const { isMobile } = useMobileSize();
  return (
    <div className={styles.home}>
      <Header />
      <RobotFilters />
      <RobotGrid />
      {/* for padding bottom */}
      <div style={{
        height: '300px',
      }}
      />
      {
        !isMobile
        && <DesktopCart />
      }
    </div>
  );
}

export default Home;
