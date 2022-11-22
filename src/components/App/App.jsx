import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackVidgetContainer } from '../feedback-vidget/feedback-vidget.styled';
import FeedbackVidgetControls from '../feedback-vidget/feedback-vidget-controls';
import FeedbackVidgetStatistic from '../feedback-vidget/feedback-vidget-statistic';
import FeedbackVidgetNotification from '../feedback-vidget/feedback-vidget-notification';

export class App extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  };

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
      ? Math.round((this.state.good / this.state.total) * 100)
      : 0;
  };

  render() {
    return (
      
      <FeedbackVidgetContainer>
        <FeedbackVidgetControls
          title="Please leave feedback"
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
        />
        {this.state.total !== 0 ? (
          <FeedbackVidgetStatistic
            title="Statistic"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <FeedbackVidgetNotification />
        )}
      </FeedbackVidgetContainer>
    );
  }
}

