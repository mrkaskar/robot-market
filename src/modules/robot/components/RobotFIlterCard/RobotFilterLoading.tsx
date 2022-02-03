import React from 'react';
import ContentLoader from 'react-content-loader';

function RobotFilterLoading(): React.ReactElement {
  return (
    <div style={{ display: 'inline' }}>
      <ContentLoader
        width={70}
        height={35}
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
      >
        <rect rx="10" width="70" height="35" />
      </ContentLoader>
    </div>
  );
}

export default RobotFilterLoading;
