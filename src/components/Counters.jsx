import React from 'react';

const Counters = ({ good, neutral, bad }) => (
    <div className="Statistics__counters">
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
    </div>
);

export default Counters;