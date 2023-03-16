/* eslint-disable react/prop-types */
import pageStyles from './Page.module.css';

const Page = ({ children }) => (
  <div className={pageStyles.root}>
    {children}
  </div>
);

export default Page;
