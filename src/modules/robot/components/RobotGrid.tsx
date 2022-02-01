import RobotCard from 'components/RobotCard/RobotCard';
import useApi from 'hooks/useApi';
import React from 'react';
import { IRobot } from 'types/robot';
import getAllRobots from '../api';
import styles from './RobotGrid.module.css';

function RobotGrid(): React.ReactElement {
  const {
    isLoading, isError, data, error,
  } = useApi<IRobot[]>({ apiFun: getAllRobots });

  const [robots, setRobots] = React.useState<IRobot[]>();

  React.useEffect(() => {
    if (data) {
      setRobots(data.map((robot) => ({
        name: robot.name,
        image: robot.image,
        price: robot.price,
        stock: robot.stock,
        createdAt: robot.createdAt,
        material: robot.material,
      })));
    }
  }, [data]);

  return (
    <div className={styles.robot_grid}>
      {
        robots && robots?.length > 0
        && robots?.map((r) => (
          <RobotCard {...r} />
        ))
      }
    </div>
  );
}

export default RobotGrid;
