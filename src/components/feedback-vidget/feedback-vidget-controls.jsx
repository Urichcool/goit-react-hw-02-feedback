import React from "react";
import PropTypes from 'prop-types';
import {
  FeedbackVidgetButtonList,
  FeedbackVidgetButtonItem,
  FeedbackVidgetButton,
  FeedbackVidgetTitle,
  FeedbackVidgetStatisticSection
} from './feedback-vidget.styled';

const FeedbackVidgetControls = ({title, onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
  return (
    <FeedbackVidgetStatisticSection>
      <FeedbackVidgetTitle>{title}</FeedbackVidgetTitle>
      <FeedbackVidgetButtonList>
        <FeedbackVidgetButtonItem>
          <FeedbackVidgetButton
            style={{ color: 'green' }}
            type="button"
            onClick={onIncrementGood}
          >
            Good
          </FeedbackVidgetButton>
        </FeedbackVidgetButtonItem>
        <FeedbackVidgetButtonItem>
          <FeedbackVidgetButton
            style={{ color: 'orange' }}
            type="button"
            onClick={onIncrementNeutral}
          >
            Neutral
          </FeedbackVidgetButton>
        </FeedbackVidgetButtonItem>
        <FeedbackVidgetButtonItem>
          <FeedbackVidgetButton
            style={{ color: 'red' }}
            type="button"
            onClick={onIncrementBad}
          >
            Bad
          </FeedbackVidgetButton>
        </FeedbackVidgetButtonItem>
      </FeedbackVidgetButtonList>
    </FeedbackVidgetStatisticSection>
  );
};

export default FeedbackVidgetControls;

FeedbackVidgetControls.propTypes = {
  title: PropTypes.string.isRequired,
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired
};