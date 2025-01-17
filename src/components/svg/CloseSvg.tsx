import React from 'react';

const CloseSvg = ({...props}: React.ComponentProps<'svg'>) => {
  return (
    <svg {...props} viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Vector"
        d="M13.4156 2.2405L12.092 0.91687L6.8444 6.16445L1.59682 0.91687L0.273193 2.2405L5.52077 7.48807L0.273193 12.7357L1.59682 14.0593L6.8444 8.8117L12.092 14.0593L13.4156 12.7357L8.16803 7.48807L13.4156 2.2405Z"
        fill="#51646E"
      />
    </svg>
  );
};

export default CloseSvg;
