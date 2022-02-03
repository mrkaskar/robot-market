import React from 'react';

export enum Size {
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP',
}

export default function useScreensize(): Size {
  const [media, setMedia] = React.useState(Size.DESKTOP);
  React.useEffect(() => {
    function checkMedia(): void {
      const query = window.matchMedia('(max-width: 600px)');
      if (!query.matches) setMedia(Size.DESKTOP);
      else setMedia(Size.MOBILE);
    }
    checkMedia();
    window.addEventListener('resize', checkMedia);
    return () => window.removeEventListener('resize', checkMedia);
  }, []);

  return media;
}
