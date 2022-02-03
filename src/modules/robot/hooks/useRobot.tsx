import React from 'react';
import { IRobotData, RobotContext } from 'modules/robot/components/RobotContext/RobotContextProvider';

function useRobot(): IRobotData | undefined {
  return React.useContext(RobotContext);
}

export default useRobot;
