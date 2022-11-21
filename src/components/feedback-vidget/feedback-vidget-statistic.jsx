import React from "react";
import {FeedbackVidgetStatisticList,
    FeedbackVidgetStatisticItem,
    FeedbackVidgetStatisticText
} from './feedback-vidget.styled'

const FeedbackVidgetStatistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
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
  );
};

export default FeedbackVidgetStatistic