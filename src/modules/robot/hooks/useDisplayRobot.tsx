import flatten from 'helpers/flattenObj';
import React from 'react';
import { IRobot } from 'types/robot';
import { IFormattedRobot, IRobotData } from '../components/RobotContext/RobotContextProvider';
import useRobot from './useRobot';
import useFilters from './useFilter';

interface IDisplayRobot {
  displayRobots: IRobot[]
  error: string | undefined
  isLoading: boolean | undefined
}

function useDisplayRobot(): IDisplayRobot {
  const robotData = useRobot();

  const [robots, setRobots] = React.useState<IRobotData>();
  const [displayRobots, setDisplayRobots] = React.useState<IRobot[]>([]);
  const { filters } = useFilters();

  React.useEffect(() => {
    if (robotData) {
      setRobots(robotData);
    }
  }, [robotData]);

  React.useEffect(() => {
    if (robots && filters[0] === 'All') { setDisplayRobots(flatten(robots.robots)); } else {
      const filteredRobots: IFormattedRobot = {};
      filters.forEach((type) => {
        if (robots) { filteredRobots[type] = robots.robots[type]; }
      });
      setDisplayRobots(flatten(filteredRobots));
    }
  }, [filters, robots]);

  return {
    displayRobots,
    error: robots?.error?.message,
    isLoading: robots?.isLoading,
  };
}

export default useDisplayRobot;
