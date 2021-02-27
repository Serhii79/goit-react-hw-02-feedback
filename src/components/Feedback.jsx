import React from 'react';
import Controls from './Controls';
import Counters from './Counters';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }

    render() {
        return (
            <div className="Feedback">
                <h2 className="title">Please leave feedback</h2>

                <Controls
                    onGood={this.handleGood}
                    onNeutral={this.handleNeutral}
                    onBad={this.handleBad}
                />

                {/* <div className="Feedback__controls">
                    <button type="button" onClick={this.handleGood}>Good</button>
                    <button type="button" onClick={this.handleNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleBad}>Bad</button>
                </div> */}

                <h2 className="title">Statistics</h2>

                <Counters
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                />

                {/* <div className="Statistics__counters">
                    <p>Good: <span>{this.state.good}</span></p>
                    <p>Neutral: <span>{this.state.neutral}</span></p>
                    <p>Bad: <span>{this.state.bad}</span></p>
                </div> */}
            </div>
        )
    }
}

export default Feedback;