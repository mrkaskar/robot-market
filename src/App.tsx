import * as React from 'react';
import RobotCard from 'components/RobotCard/RobotCard';
import colors from 'global/colors/colors';

function App(): React.ReactElement {
  return (
    <div className="App">
      <h1 style={{ fontFamily: 'poppins', color: colors.primary }}>Robot Market</h1>
      <RobotCard
        name="Earnest Yundt"
        image="https://robohash.org/Earnest Yundt.png?size=120x120"
        price="36.97"
        stock={10}
        createdAt="2021-05-27T19:06:25.487Z"
        material="Fresh"
      />
    </div>
  );
}

export default App;
