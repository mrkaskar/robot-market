import React from 'react';
import ContentLoader from 'react-content-loader';

function RobotLoading(): React.ReactElement {
  return (
    <div>
      <ContentLoader
        width={275}
        height={165}
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
      >
        <rect x="0" rx="15" width="275" height="165" />
      </ContentLoader>
    </div>
  );
}

export default RobotLoading;
