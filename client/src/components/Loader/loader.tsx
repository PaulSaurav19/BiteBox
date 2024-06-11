import React from 'react';

interface LoaderProps {
  size: number;
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <img width={size} height={size} src='/assets/loader.svg' alt='Loading...' />
  );
};

export default Loader;