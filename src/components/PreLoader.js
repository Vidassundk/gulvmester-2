"use client";

import { useEffect, useState } from 'react';

const PreLoader = () => {
    const [hideLoader, setHideLoader] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            // Delay fade out
            setTimeout(() => {
                setHideLoader(true);
            }, 500);
        };

        // If already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            // Otherwise, wait for it
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    if (hideLoader) return null;

    return <div id="loader" className="fade-out" />;
};

export default PreLoader;
