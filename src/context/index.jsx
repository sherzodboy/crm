/* eslint-disable react/prop-types */
import UserContext from './user/index';
import MentorContext from './mentor/index';

const provider = [UserContext, MentorContext];

const ContextProvider = ({ children }) => {
  return provider.reduceRight(
    (account, Provider) => <Provider>{account}</Provider>,
    children
  );
};
export default ContextProvider;
