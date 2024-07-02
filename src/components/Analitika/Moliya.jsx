import Title from '../Generics/Title';
import { Fragment, ArrowIcon, Wrapper } from './moliyaStyle';

const Moliya = () => {
  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left />
        <Title size={14}>Iyul 2</Title>
        <ArrowIcon />
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
