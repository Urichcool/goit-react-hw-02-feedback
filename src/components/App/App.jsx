import  FeedbackVidget  from '../feedback-vidget/feedback-vidget';
import { MainContainer } from './App.styled';

export const App = () => {
  return (
    <MainContainer>
      <FeedbackVidget
        good={0}
        neutral={0}
        bad={0}
        total={0}
      />
    </MainContainer>
  );
};
