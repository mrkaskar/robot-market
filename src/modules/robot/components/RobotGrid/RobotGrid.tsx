import useRobot from 'modules/robot/hooks/useRobot';
import React from 'react';
import RobotCard from 'modules/robot/components/RobotCard/RobotCard';
import styles from 'modules/robot/components/RobotGrid/RobotGrid.module.css';
import Error from 'components/Error/Error';
import { IRobot } from 'types/robot';
import flatten from 'helpers/flattenObj';
import RobotLoading from '../RobotLoading/RobotLoading';
import { IRobotData } from '../RobotContext/RobotContextProvider';

function RobotGrid(): React.ReactElement {
  const robotData = useRobot();

  const [robots, setRobots] = React.useState<IRobotData>();
  const [displayRobots, setDisplayRobots] = React.useState<IRobot[]>([]);

  React.useEffect(() => {
    if (robotData) {
      setRobots(robotData);
    }
  }, [robotData]);

  React.useEffect(() => {
    if (robots) { setDisplayRobots(flatten(robots.robots)); }
  }, [robots]);

  const robotPresent = robots && displayRobots?.length > 0;

  if (robots?.isError && robots.error) {
    return <Error message={robots.error.message} />;
  }
  return (
    <div className={styles.robot_grid}>
      {
        (robotPresent || !robots?.isLoading)
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
