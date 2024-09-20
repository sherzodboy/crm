/* eslint-disable react-hooks/exhaustive-deps */
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
import { useContext, useEffect, useState } from 'react';
import { MoliyaContext } from '../../context/moliya/index';

const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, changeWeek] = useState(0);
  const [today, setToday] = useState({});
  const [state, dispatch] = useContext(MoliyaContext);

  const url = import.meta.env.VITE_BASE_URL;

  const onClickDate = (value) => {
    // if (date.week(weekCount)[0].getDate() === value.getDate())
    //   changeWeek(weekCount - 1);
    // else if (date.week(weekCount)[6].getDate() === value.getDate())
    //   changeWeek(weekCount + 1);
    // setActive(value.getDate());
    let [tdy] = state.filter((val) => val.today == value);
    setToday(tdy);
    setActive(value);
  };

  const onClickForward = () => {
    changeWeek(weekCount + 6);
  };

  const onClickBackward = () => {
    changeWeek(weekCount - 6);
  };

  useEffect(() => {
    // moliya
    fetch(`${url}/tabs/moliya`)
      .then((res) => res.json())
      .then((res) => {
        let date = new Date().getDate();
        let [tdy] = res.filter((val) => val.today == date);
        setToday(tdy);
        dispatch({ type: 'get', payload: res });
      });
  }, []);

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
        {state.map((value) => {
          let date = new Date(value.day);
          const ac = value.today == active;
          return (
            <DateCard
              active={ac}
              key={value.id}
              onClick={() => onClickDate(value.today)}
            >
              <Subtitle color={ac ? 'white' : '#929FAF'} size={14}>
                {weeks[date.getDay()]?.short}
              </Subtitle>
              <Subtitle color={ac ? 'white' : '#253E5F'} size={14}>
                {value.today}
              </Subtitle>
            </DateCard>
          );
        })}
      </Fragment>
      <Subtitle size={12} color={'#929FAF'}>
        {date.date}-{date.month.full}, {date.year}
      </Subtitle>
      <Title mt={6} mb={22} size={32}>
        {today.students}
        <Subtitle ml={16} size={24} color={'#52C41A'}>
          <Arrow /> +22%
        </Subtitle>
      </Title>
      <Fragment mb={8}>
        <Subtitle>
          <Circle green="true"></Circle> Talabalar
        </Subtitle>
        <Subtitle>{today.students}</Subtitle>
      </Fragment>
      <Fragment>
        <Subtitle>
          <Circle></Circle> Darsliklar sotuvi
        </Subtitle>
        <Subtitle>{today.video}</Subtitle>
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
