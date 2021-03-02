import React from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

const Section = ({ title, children }) => (
  <section>

    <h2 className="title">{title}</h2>

    {children}

  </section>
)

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
    
  // handleGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  //  };

  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };




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

    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    return (
      <div>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleClick}
            // onLeaveFeedback={this.handle}
          />
        </Section>

        

        {/* <FeedbackOptions
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        /> */}

        {/* <Statistics
          data={this.state}
        /> */}

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>

        

        {/* <p>Total: <span>{this.countTotalFeedback()}</span></p> */}
        {/* <p>Positive feedback: <span>{this.countPositiveFeedbackPercentage()}</span>%</p> */}
      </div>
    )
  }
}

{/* <Notification message="No feedback given"></Notification> */}

export default App;
