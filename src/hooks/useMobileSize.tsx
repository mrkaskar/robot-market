import React from 'react';
import useScreensize, { Size } from './useScreensize';

function useMobileSize(): { isMobile: boolean } {
  const [isMobile, setIsMobile] = React.useState(false);
  const size = useScreensize();

  React.useLayoutEffect(() => {
    setIsMobile(size === Size.MOBILE);
  }, [size]);

  return { isMobile };
}

export default useMobileSize;
