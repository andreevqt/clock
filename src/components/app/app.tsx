import React, { useEffect, useState } from 'react';

import { Clock } from '../clock';
import { StyledApp } from './app.styles';
import { fetchTime } from '../../services/time';

export const App: React.FC = () => {
  const [date, setDate] = useState<Date>();

  useEffect(
    () => {
      fetchTime.then(({ datetime }) => setDate(new Date(datetime)));
    },
    []
  );

  return (
    <StyledApp>
      <Clock startDate={date} />
    </StyledApp>
  );
};
