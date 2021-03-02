import React from 'react';

// const Statistics = ({ data: { good, neutral, bad } }) => {
//     const total = good + neutral + bad;
//     const positivePercentage =  total !== 0 ? Math.round((good * 100) / total) : 0;
  
//     return (
//         <div className="Statistics__counters">
//             <h2 className="title">Statistics</h2>
        
//             <p>Good: <span>{good}</span></p>
//             <p>Neutral: <span>{neutral}</span></p>
//             <p>Bad: <span>{bad}</span></p>
//             <p>Total: <span>{total}</span></p>
//             <p>Positive feedback: <span>{positivePercentage}</span>%</p>
//         </div>
//     )
// };

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//     return (
//         <div className="Statistics__counters">
//         <h2 className="title">Statistics</h2>
        
//         <p>Good: <span>{good}</span></p>
//         <p>Neutral: <span>{neutral}</span></p>
//         <p>Bad: <span>{bad}</span></p>
//         <p>Total: <span>{total}</span></p>
//         <p>Positive feedback: <span>{positivePercentage}</span>%</p>
//     </div>
//     )
// };

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className="Statistics__counters">
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>Total: <span>{total}</span></p>
        <p>Positive feedback: <span>{positivePercentage}</span>%</p>
    </div>
);

export default Statistics;