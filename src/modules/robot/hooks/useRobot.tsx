import useApi from 'hooks/useApi';
import { IAsync } from 'hooks/useAsync';
import React from 'react';
import { IRobot } from 'types/robot';
import getAllRobots from '../api';

interface IRobotData {
  isLoading: boolean;
  isError: boolean;
  robots: IRobot[];
  error: { message: string } | null
}
function useRobot(): IRobotData {
  const {
    isLoading, isError, data, error,
  } = useApi<IRobot[], { message: string }>({ apiFun: getAllRobots });

  const [robots, setRobots] = React.useState<IRobot[]>([]);

  React.useEffect(() => {
    if (data && robots?.length === 0) {
      setRobots(data.map((robot) => ({
        name: robot.name,
        image: robot.image,
        price: robot.price,
        stock: robot.stock,
        createdAt: robot.createdAt,
        material: robot.material,
      })));
    }
  }, [data, robots?.length]);

  return {
    isLoading, isError, robots, error,
  };
}

export default useRobot;
