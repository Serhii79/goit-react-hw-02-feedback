import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className="Feedback__controls">
        {options.map((option) => (
            <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>

        ))}
    </div>
);

// const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
//     <div className="Feedback__controls">
//         <h2 className="title">Please leave feedback</h2>

//         <button type="button" onClick={onGood}>Good</button>
//         <button type="button" onClick={onNeutral}>Neutral</button>
//         <button type="button" onClick={onBad}>Bad</button>
//     </div>
// );

export default FeedbackOptions;