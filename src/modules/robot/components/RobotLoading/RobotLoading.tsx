import React from 'react';
import ContentLoader from 'react-content-loader';

function RobotLoading(): React.ReactElement {
  return (
    <div>
      <ContentLoader
        width={300}
        height={170}
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
      >
        <rect x="0" rx="15" width="300" height="170" />
      </ContentLoader>
    </div>
  );
}

export default RobotLoading;
