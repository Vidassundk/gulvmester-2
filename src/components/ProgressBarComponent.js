"use client";

import { useRef } from 'react';
import { Line } from 'rc-progress';

const ProgressBarComponent = ({ title, percentage, barColor = '#C5853A', duration = 5000 }) => {
    const containerRef = useRef(null);

    return (
        <>
            <div className="single-bar-item">
                <h5>{title}</h5>
                <div className="bar-parcentage">{percentage}%</div>
            </div>
            <div ref={containerRef} className="">
                <Line percent={percentage} strokeWidth={1} strokeColor={barColor} />
            </div>
        </>
    );
};

export default ProgressBarComponent;
