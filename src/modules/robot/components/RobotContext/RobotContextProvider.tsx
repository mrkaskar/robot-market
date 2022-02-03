import React from 'react';
import useApi from 'hooks/useApi';
import getAllRobots from 'modules/robot/api';
import { IRobot } from 'types/robot';

export interface IFormattedRobot { [key: string]: IRobot[] }

export interface IRobotData {
  isLoading: boolean;
  isError: boolean;
  robots: IFormattedRobot;
  error: { message: string } | null;
  robotTypes: string[]
  robotStock: { [key: string]: number }
}

export const RobotContext = React.createContext<IRobotData | undefined>(undefined);

function RobotContextProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const {
    isLoading, isError, data, error,
  } = useApi<IRobot[], { message: string }>({ apiFun: getAllRobots });

  const [robots, setRobots] = React.useState<IFormattedRobot>({});
  const robotStock = React.useRef<{ [key: string]: number }>({});

  React.useEffect(() => {
    if (data) {
      const formattedRobots: IFormattedRobot = {};
      data.forEach((robot) => {
        robotStock.current[robot.name] = robot.stock;
        if (!formattedRobots[robot.material]) { formattedRobots[robot.material] = []; }
        formattedRobots[robot.material].push(
          {
            name: robot.name,
            image: robot.image,
            price: robot.price,
            stock: robot.stock,
            createdAt: robot.createdAt,
            material: robot.material,
          },
        );
      });
      setRobots(formattedRobots);
    }
  }, [data, robots.length]);

  const contextValue = React.useMemo(() => (
    {
      isLoading,
      isError,
      robots,
      error,
      robotTypes: ['All', ...Object.keys(robots)],
      robotStock: robotStock.current,
    }
  ), [error, isError, isLoading, robots]);

  return (
    <RobotContext.Provider value={contextValue}>
      {children}
    </RobotContext.Provider>
  );
}

export default RobotContextProvider;
