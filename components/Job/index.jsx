import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import jobStyles from './Job.module.css';

const Job = (props) => {
  const { children, title, dates } = props;

  return (
    <div className={jobStyles.root}>
      <Typography className={jobStyles.title} variant="h6">{title}</Typography>
      <Typography className={jobStyles.dates} variant="caption">{dates}</Typography>
      <Typography className={jobStyles.body}>{children}</Typography>
    </div>
  );
};

Job.propTypes = {
  title: PropTypes.node.isRequired,
  dates: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Job;
