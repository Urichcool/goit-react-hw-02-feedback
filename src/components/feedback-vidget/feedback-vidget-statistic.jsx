import React from "react";
import PropTypes from 'prop-types';
import {
  FeedbackVidgetStatisticList,
  FeedbackVidgetStatisticItem,
  FeedbackVidgetStatisticText,
  FeedbackVidgetTitle,
  FeedbackVidgetStatisticSection
} from './feedback-vidget.styled';

const FeedbackVidgetStatistic = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackVidgetStatisticSection>
      <FeedbackVidgetTitle>{title}</FeedbackVidgetTitle>
      <FeedbackVidgetStatisticList>
        <FeedbackVidgetStatisticItem>
          <FeedbackVidgetStatisticText style={{ color: 'green' }}>
            Good: {good}
          </FeedbackVidgetStatisticText>
        </FeedbackVidgetStatisticItem>
        <FeedbackVidgetStatisticItem>
          <FeedbackVidgetStatisticText style={{ color: 'orange' }}>
            Neutral: {neutral}
          </FeedbackVidgetStatisticText>
        </FeedbackVidgetStatisticItem>
        <FeedbackVidgetStatisticItem>
          <FeedbackVidgetStatisticText style={{ color: 'red' }}>
            Bad: {bad}
          </FeedbackVidgetStatisticText>
        </FeedbackVidgetStatisticItem>
        <FeedbackVidgetStatisticItem>
          <FeedbackVidgetStatisticText>
            Total: {total}
          </FeedbackVidgetStatisticText>
        </FeedbackVidgetStatisticItem>
        <FeedbackVidgetStatisticItem>
          <FeedbackVidgetStatisticText style={{ color: '#8181ec' }}>
            Positive feedback: {positivePercentage}%
          </FeedbackVidgetStatisticText>
        </FeedbackVidgetStatisticItem>
      </FeedbackVidgetStatisticList>
    </FeedbackVidgetStatisticSection>
  );
};

export default FeedbackVidgetStatistic

FeedbackVidgetStatistic.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};