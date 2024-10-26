import React, { SyntheticEvent, useState } from 'react';

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const FallbackImage = ({
  src,
  fallbackSrc = 'https://picsum.photos/200/300?random=1',
  alt,
  ...props
}: FallbackImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
    e.currentTarget.onerror = null;
  };

  return (
    <img
      src={src}
      alt={alt}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        display: isLoaded ? 'block' : 'none',
        backgroundColor: '#CACACA',
      }}
      {...props}
    />
  );
};
