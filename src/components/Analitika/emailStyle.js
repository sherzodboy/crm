import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
`;
const Info = styled.div`
  display: flex;
  border-radius: 8px;
  &:hover {
    background-color: #f0f5ff;
    cursor: pointer;
  }
`;
const Section = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ end }) => end && 'flex-end'};
  align-items: center;
  padding: 12px;
  background-color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
Info.Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 24px;
  border-radius: 50%;
  border: 2px solid #f0f0f0;
`;
Info.Sms = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--primaryColor);
`;

export { Wrapper, Info, Section };
