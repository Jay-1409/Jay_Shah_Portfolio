// src/Components/WaveBackground.js
import React from 'react';

const WaveBackground = () => {
  return (
    <svg
      className="absolute bottom-0 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{ transform: 'rotate(180deg)' }}
    >
      <path
        fill="#000000"
        fillOpacity="1"
        d="M0,64L30,58.7C60,53,120,43,180,64C240,85,300,139,360,160C420,181,480,139,540,106.7C600,75,660,53,720,64C780,75,840,117,900,117.3C960,117,1020,75,1080,64C1140,53,1200,75,1260,117.3C1320,160,1380,224,1410,256L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V64Z"
      />
    </svg>
  );
};

export default WaveBackground;
