import useApi from 'hooks/useApi';
import getAllRobots from 'modules/robot/api';
import React from 'react';
import { IRobot } from 'types/robot';

type IFormattedRobot = { [key: string]: IRobot[] }

export interface IRobotData {
  isLoading: boolean;
  isError: boolean;
  robots: { [key: string]: IRobot[] };
  error: { message: string } | null
}

export const RobotContext = React.createContext<IRobotData | undefined>(undefined);

function RobotContextProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const {
    isLoading, isError, data, error,
  } = useApi<IRobot[], { message: string }>({ apiFun: getAllRobots });

  const [robots, setRobots] = React.useState<IFormattedRobot>({});

  React.useEffect(() => {
    if (data) {
      const formattedRobots: IFormattedRobot = {};
      data.forEach((robot) => {
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
  }, [data, robots?.length]);

  const contextValue = React.useMemo(() => (
    {
      isLoading, isError, robots, error,
    }
  ), [error, isError, isLoading, robots]);

  return (
    <RobotContext.Provider value={contextValue}>
      {children}
    </RobotContext.Provider>
  );
}

export default RobotContextProvider;
