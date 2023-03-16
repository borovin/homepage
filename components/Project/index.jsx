/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import projectStyles from './Project.module.css';

const Project = (props) => {
  const { title, items, name } = props;

  return (
    <div className={projectStyles.root}>
      <Typography className={projectStyles.title} variant="h5">{title}</Typography>
      {items.map((item) => (
        <a key={item.screenUrl} className={projectStyles.screenLink} href={item.url}>
          <img alt={name} className={projectStyles.screenImage} src={item.screenUrl} />
        </a>
      ))}
    </div>
  );
};

export default Project;
