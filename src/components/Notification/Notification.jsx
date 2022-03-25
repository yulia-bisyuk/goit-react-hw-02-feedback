import React from 'react';
import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.style';

const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
