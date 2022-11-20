import React, { Component } from 'react';
import {
    FeedbackVidgetContainer,
    FeedbackVidgetTitle,
    FeedbackVidgetButtonList,
    FeedbackVidgetButtonItem,
    FeedbackVidgetButton,
    FeedbackVidgetStatisticList,
    FeedbackVidgetStatisticItem,
    FeedbackVidgetStatisticText
} from './feedback-vidget.styled';

export class FeedbackVidget extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
      return (
        <FeedbackVidgetContainer>
          <FeedbackVidgetTitle>Please leave feedback</FeedbackVidgetTitle>
          <FeedbackVidgetButtonList>
            <FeedbackVidgetButtonItem>
              <FeedbackVidgetButton type="button">Good</FeedbackVidgetButton>
            </FeedbackVidgetButtonItem>
            <FeedbackVidgetButtonItem>
              <FeedbackVidgetButton type="button">Neutral</FeedbackVidgetButton>
            </FeedbackVidgetButtonItem>
            <FeedbackVidgetButtonItem>
              <FeedbackVidgetButton type="button">Bad</FeedbackVidgetButton>
            </FeedbackVidgetButtonItem>
          </FeedbackVidgetButtonList>
          <FeedbackVidgetTitle>Statistic</FeedbackVidgetTitle>
          <FeedbackVidgetStatisticList>
            <FeedbackVidgetStatisticItem>
              <FeedbackVidgetStatisticText>Good:</FeedbackVidgetStatisticText>
            </FeedbackVidgetStatisticItem>
            <FeedbackVidgetStatisticItem>
              <FeedbackVidgetStatisticText>Neutral:</FeedbackVidgetStatisticText>
            </FeedbackVidgetStatisticItem>
            <FeedbackVidgetStatisticItem>
              <FeedbackVidgetStatisticText>Bad:</FeedbackVidgetStatisticText>
            </FeedbackVidgetStatisticItem>
          </FeedbackVidgetStatisticList>
        </FeedbackVidgetContainer>
      );
  }
}