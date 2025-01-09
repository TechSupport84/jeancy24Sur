import React, { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    const loadAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error", e);
      }
    };

    // Load the AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8628829898524808';
    script.crossOrigin = 'anonymous';
    script.onload = loadAds;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8628829898524808"
      data-ad-slot="3765760315"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  );
};

export default GoogleAd;
