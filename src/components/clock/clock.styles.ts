import styled from 'styled-components';

export const StyledCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 10px solid #6c7589;
  width: 320px;
  height: 320px;
`;

type StyledArrowProps = {
  angle?: number;
};

export const BaseArrow = styled.div<StyledArrowProps>`
  position: absolute;
  height: 160px;
  width: 130px;
  display: flex;
  justify-content: center;
  transform: ${(props) => `rotateZ(${props.angle ?? 0}deg)`} ;

  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 60%;
    background-color: #fff;
    border-radius: 3px;
  }
`;

export const StyledHoursArrow = styled(BaseArrow) <StyledArrowProps>``;

export const StyledMinutesArrow = styled(BaseArrow) <StyledArrowProps>`
  height: 200px;

  &:before {
    width: 1px;
    background-color: #fff;
  }
`;

export const StyledSecondsArrow = styled(BaseArrow) <StyledArrowProps>`
  height: 240px;

  &:before {
    width: 1px;
    background-color: #00d9f6;
  }
`;

export const StyledCenter = styled.div`
  position: absolute;
  z-index: 2;
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  border: 3px solid #0e121b;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTime = styled.div`
  font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;

export const MarkBase = styled.div`
  position: absolute;
  background-color: #fff;
  height: 2px;
  width: 15px;
`

export const StyledTwelve = styled(MarkBase)`
  top: 15px;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
`;

export const StyledSix = styled(MarkBase)`
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
`;

export const StyledThree = styled(MarkBase)`
  right: 15px;
  top: 50%;
  transform: translateX(50%);
`;

export const StyledNine = styled(MarkBase)`
  left: 15px;
  top: 50%;
  transform: translateX(-50%);
`;
