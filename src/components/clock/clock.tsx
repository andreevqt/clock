import React, { useEffect, useMemo, useState } from 'react';

import { StyledCenter, StyledCircle, StyledContainer, StyledHoursArrow, StyledMinutesArrow, StyledNine, StyledSecondsArrow, StyledSix, StyledThree, StyledTime, StyledTwelve } from './clock.styles';
import { TClockProps } from './type';
import { formatDate } from './helpers/formatDate';

export const Clock: React.FC<TClockProps> = ({
  startDate
}) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState<Date>();

  useEffect(
    () => {
      setDate(new Date(startDate ?? new Date()));
    },
    []
  );

  useEffect(() => {
    const handle = setTimeout(() => {
      if (!date) {
        return;
      }

      const newDate = new Date(date.getTime() + 1000);
      const hh = newDate.getHours() * 30;
      const mm = newDate.getMinutes() * 6;
      const ss = newDate.getSeconds() * 6;

      setHours(hh + mm / 12);
      setMinutes(mm);
      setSeconds(ss);
      setDate(newDate);
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  }, [date]);

  const formated = useMemo(
    () => formatDate(new Date(date ?? Date.now())),
    [date]
  );

  return (
    <StyledContainer>
      <StyledCircle>
        <StyledTwelve />
        <StyledSix />
        <StyledThree />
        <StyledNine />
        <StyledHoursArrow angle={hours} />
        <StyledSecondsArrow angle={seconds} />
        <StyledMinutesArrow angle={minutes} />
        <StyledCenter />
      </StyledCircle>
      <StyledTime>
        {formated}
      </StyledTime>
    </StyledContainer>
  );
};
