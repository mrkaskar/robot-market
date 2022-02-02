import flatten from 'helpers/flattenObj';
import React from 'react';
import { IRobot } from 'types/robot';
import { IRobotData } from '../components/RobotContext/RobotContextProvider';
import useRobot from './useRobot';

interface IDisplayRobot {
  displayRobots: IRobot[]
  error: string | undefined
  isLoading: boolean | undefined
}

function useDisplayRobot(): IDisplayRobot {
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

  return {
    displayRobots,
    error: robots?.error?.message,
    isLoading: robots?.isLoading,
  };
}

export default useDisplayRobot;
