import {
  ListItemIcon, ListItemText, ListItem,
} from '@material-ui/core';
import Icon from '@mdi/react';
import {
  mdiGithub, mdiLinkedin, mdiClipboardAccount, mdiPhone, mdiMapMarker, mdiEmail,
} from '@mdi/js';
import profileStyes from './Profile.module.css';

const Profile = () => (
  <div className={profileStyes.root}>
    <img className={profileStyes.avatar} src="/ava.jpg" alt="Andrew Borovin" />
    <div className={profileStyes.dataList}>
      <ListItem>
        <ListItemIcon><Icon path={mdiClipboardAccount} size={1} color="currentColor" /></ListItemIcon>
        <ListItemText primary="Front-end Developer" secondary="Position" />
      </ListItem>
      <ListItem>
        <ListItemIcon><Icon path={mdiMapMarker} size={1} color="currentColor" /></ListItemIcon>
        <ListItemText primary="Saint-Petersburg, Russia" secondary="Location" />
      </ListItem>
      <ListItem>
        <ListItemIcon><Icon path={mdiEmail} size={1} color="currentColor" /></ListItemIcon>
        <ListItemText primary={<a href="mailto:a@borovin.com">a@borovin.com</a>} secondary="Email" />
      </ListItem>
      <ListItem>
        <ListItemIcon><Icon path={mdiPhone} size={1} color="currentColor" /></ListItemIcon>
        <ListItemText primary="+79218902868" secondary="Phone" />
      </ListItem>
      <ListItem>
        <ListItemIcon><Icon path={mdiGithub} size={1} color="currentColor" /></ListItemIcon>
        <ListItemText primary={<a target="blank" href="https://github.com/borovin">github.com/borovin</a>} secondary="Github" />
      </ListItem>
      <ListItem>
        <ListItemIcon><Icon path={mdiLinkedin} size={1} color="currentColor" /></ListItemIcon>
        <ListItemText primary={<a target="blank" href="https://linkedin.com/in/borovin">linkedin.com/in/borovin</a>} secondary="Linkedin" />
      </ListItem>
    </div>
  </div>
);

export default Profile;
