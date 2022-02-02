import React from 'react';
import ContentLoader from 'react-content-loader';

function RobotLoading(): React.ReactElement {
  return (
    <div>
      <ContentLoader
        speed={1}
        width={300}
        height={170}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    </div>
  );
}

export default RobotLoading;
