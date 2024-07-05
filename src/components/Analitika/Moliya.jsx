import useDate, { weeks } from '../../hooks/date';
import Title from '../Generics/Title';
import Subtitle from '../Generics/Subtitle';
import {
  Fragment,
  ArrowIcon,
  Wrapper,
  DateCard,
  Circle,
  Arrow,
} from './moliyaStyle';
import { useState } from 'react';

const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, changeWeek] = useState(0);

  const onClickDate = (value) => {
    if (date.week(weekCount)[0].getDate() === value.getDate())
      changeWeek(weekCount - 1);
    else if (date.week(weekCount)[6].getDate() === value.getDate())
      changeWeek(weekCount + 1);
    setActive(value.getDate());
  };

  const onClickForward = () => {
    changeWeek(weekCount + 6);
  };

  const onClickBackward = () => {
    changeWeek(weekCount - 6);
  };

  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left onClick={onClickBackward} />
        <Title size={14}>
          {date.month?.full} {date.year}
        </Title>
        <ArrowIcon onClick={onClickForward} />
      </Fragment>
      <Fragment mt={16} mb={16}>
        {date.week(weekCount).map((value) => {
          const ac = active === value.getDate();
          return (
            <DateCard
              active={ac}
              key={value}
              onClick={() => onClickDate(value)}
            >
              <Subtitle color={ac ? 'white' : '#929FAF'} size={14}>
                {weeks[value.getDay()]?.short}
              </Subtitle>
              <Subtitle color={ac ? 'white' : '#253E5F'} size={14}>
                {value.getDate()}
              </Subtitle>
            </DateCard>
          );
        })}
      </Fragment>
      <Subtitle size={12} color={'#929FAF'}>
        {date.date}-{date.month.full}, {date.year}
      </Subtitle>
      <Title mt={6} mb={22} size={32}>
        8 520 000
        <Subtitle ml={16} size={24} color={'#52C41A'}>
          <Arrow /> +22%
        </Subtitle>
      </Title>
      <Fragment mb={8}>
        <Subtitle>
          <Circle green></Circle> Talabalar
        </Subtitle>
        <Subtitle>5 760 000</Subtitle>
      </Fragment>
      <Fragment>
        <Subtitle>
          <Circle></Circle> Darsliklar sotuvi
        </Subtitle>
        <Subtitle>2 180 000</Subtitle>
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
