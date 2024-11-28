"use client";
import "./FullPageLogo.css";

import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function FullPageLogo() {
  const [fadeOut, setFadeOut] = useState(false);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    const spinTimer = setTimeout(() => {
      setSpin(true);
    }, 2500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(spinTimer);
    };
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 pointer-events-none ${fadeOut ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: '#FFF' }}>
      <div style={{ height: '50%' }} className={spin ? 'spin-logo' : ''}>
        <DotLottieReact
          src="https://lottie.host/6d989651-ee02-474d-ab48-b0277de31b2c/CC8fkuLJsj.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};
