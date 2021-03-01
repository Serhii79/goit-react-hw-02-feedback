import React from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends React.Component {
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
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // ------теж саме без деструктуризації -------
  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // }; 

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    return (
      <div className="Feedback">
        <h2 className="title">Please leave feedback</h2>

        <FeedbackOptions
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
          
        <h2 className="title">Statistics</h2>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />

        {/* <p>Total: <span>{this.countTotalFeedback()}</span></p> */}
        {/* <p>Positive feedback: <span>{this.countPositiveFeedbackPercentage()}</span>%</p> */}
      </div>
    )
  }
}

export default App;
