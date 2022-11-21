import React from "react";
import{FeedbackVidgetButtonList,
    FeedbackVidgetButtonItem,
    FeedbackVidgetButton} from './feedback-vidget.styled'

const FeedbackVidgetControls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
    return (
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
    );
};

export default FeedbackVidgetControls;