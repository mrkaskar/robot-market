import * as React from 'react';
import RobotCard from 'components/RobotCard/RobotCard';
import colors from 'global/colors/colors';
import { ReactComponent as Logo } from 'assets/logo.svg';
import useSize, { Size } from 'hooks/useScreensize';
import FilterCard from 'modules/common/components/FilterCard/FilterCard';
import CartCount from 'modules/common/components/CartCount/CartCount';

function App(): React.ReactElement {
  const media = useSize();
  return (
    <div className="App">
      <div id="header">
        <Logo />
        <h1 style={{ fontFamily: 'poppins', color: colors.primary }}>Robot Market</h1>
        <CartCount />
      </div>
    </div>
  );
}

export default App;
