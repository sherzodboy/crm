/* eslint-disable react/prop-types */
import AnalyticsProvider from './analytics';
import EmailsProvider from './emails';
import MediaProvider from './media';
import MoliyaProvider from './moliya';

const provider = [
  EmailsProvider,
  MoliyaProvider,
  AnalyticsProvider,
  MediaProvider,
];

const ContextProvider = ({ children }) => {
  return provider.reduceRight(
    (account, Provider) => <Provider>{account}</Provider>,
    children
  );
};
export default ContextProvider;
