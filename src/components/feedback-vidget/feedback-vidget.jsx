import React, { Component } from 'react';
import {FeedbackVidgetContainer} from './feedback-vidget.styled';
import FeedbackVidgetControls from './feedback-vidget-controls';
import FeedbackVidgetStatistic from './feedback-vidget-statistic';
import FeedbackVidgetSection from './feedback-vidget-section';

class FeedbackVidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };


  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
  };

  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
  };

   countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
   return this.state.total !== 0
? Math.round(this.state.good / this.state.total * 100) 
: 0 
  }

  render() {
    return (
      <FeedbackVidgetContainer>
        <FeedbackVidgetSection title="Please leave feedback"/>
        <FeedbackVidgetControls
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
        />
        <FeedbackVidgetSection title="Statistic"/>
        <FeedbackVidgetStatistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </FeedbackVidgetContainer>
    );
  }
}

export default FeedbackVidget