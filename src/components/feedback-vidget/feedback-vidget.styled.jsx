import styled from '@emotion/styled';

export const FeedbackVidgetContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
height:100vh;
`

export const FeedbackVidgetTitle = styled.h2`
    text-transform:uppercase;
    color: #8181ec;
    margin: 0;
margin-bottom: 20px;
`

export const FeedbackVidgetButtonList = styled.ul`
    display:flex;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom:30px;
`

export const FeedbackVidgetButtonItem = styled.li`
  margin-right: 10px;
  &:last-child{
    margin-right: 0;
  }
`;

export const FeedbackVidgetButton = styled.button`
font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  height: 25px;
  &:hover,
  &:focus {
    background-color: #b3b3f1;
  }
`;

export const FeedbackVidgetStatisticList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

export const FeedbackVidgetStatisticItem = styled.li`
margin-bottom: 10px;
&:last-child{
    margin-bottom: 0;
}
`;

export const FeedbackVidgetStatisticText = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const FeedbackVidgetStatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;