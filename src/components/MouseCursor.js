"use client";

import { useEffect, useRef } from 'react';

const MouseCursor = () => {
    const cursorInnerRef = useRef(null);
    const cursorOuterRef = useRef(null);

    useEffect(() => {
        const cursorInner = cursorInnerRef.current;
        const cursorOuter = cursorOuterRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let isHovering = false;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isHovering) {
                cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
            cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        };

        const addHover = () => {
            cursorInner.classList.add('cursor-hover');
            cursorOuter.classList.add('cursor-hover');
            isHovering = true;
        };

        const removeHover = () => {
            cursorInner.classList.remove('cursor-hover');
            cursorOuter.classList.remove('cursor-hover');
            isHovering = false;
        };

        document.addEventListener('mousemove', moveCursor);

        const hoverTargets = document.querySelectorAll('a, button, .cursor-pointer');
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        // Show cursors
        cursorInner.style.visibility = 'visible';
        cursorOuter.style.visibility = 'visible';

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', moveCursor);
            hoverTargets.forEach((el) => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return (
        <>
            <div className="mouseCursor cursor-outer" ref={cursorOuterRef}></div>
            <div className="mouseCursor cursor-inner" ref={cursorInnerRef}>
                <span>Drag</span>
            </div>
        </>
    );
};

export default MouseCursor;
