import React, { useEffect } from 'react';
import '../styles/AdComponent.css';

const AdComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8628829898524808";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        script.onload = () => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        };
    }, []);

    return (
        <div className="ads-container">
            <ins className="adsbygoogle ad-style"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-8628829898524808"
                 data-ad-slot="8414563712"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>
    );
};

export default AdComponent;
